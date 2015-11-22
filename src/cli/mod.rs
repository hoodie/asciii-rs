#![allow(unused_variables)]
use std::path::{Path,PathBuf};
use std::ffi::OsStr;
use config;
use super::CONFIG;
use manager::{Luigi,LuigiDir};
use manager::LuigiProject;
use project::Project;
use util;

fn setup_luigi() -> Luigi{
    let storage_path = PathBuf::from(CONFIG.get_str("path")).join("caterings");
    let storage_path = util::replace_home_tilde(&storage_path);
    let luigi = Luigi::new(&storage_path, "working", "archive", "templates").unwrap();
    luigi
}

fn assert_existens(storage_path:&Path) {
    assert!(storage_path.exists()
            &&  storage_path.join("working").exists()
            &&  storage_path.join("archive").exists()
            &&  storage_path.join("templates").exists());
}

/// Opens up all projects to look inside and check content.
///
/// TODO This could be parallelized
/// TODO move this into `Luigi`
pub fn search_projects(dir:LuigiDir, search_term:&str) -> Vec<Project> {
    let luigi = setup_luigi();

    let projects: Vec<Project> = luigi.list_project_files(dir)
        .iter()
        .map(|path| Project::open(path).unwrap())
        .filter(|project| project.name().to_lowercase().contains(&search_term.to_lowercase()))
        .collect();

    projects
}

/// Command LIST [--archive]
pub fn list_projects(dir:LuigiDir){
    let luigi = setup_luigi();
    let project_paths = luigi.list_project_files(dir);
    let projects: Vec<Project> = project_paths.iter().map(|path| Project::open(path).unwrap()).collect();

    for project in projects{
        println!("{} {} {} {}", project.index(), project.name(), project.manager(), project.date());
    }
}

/// Command LIST --templates
pub fn list_templates(){
    let luigi = setup_luigi();
    let template_paths = luigi.list_templates();

    for path in template_paths{
        println!("{}", path.display());
    }
}

/// Command EDIT
use itertools::Itertools;
pub fn edit_project(dir:LuigiDir, search_term:&str, editor:&str){
    let paths = search_projects(dir, &search_term) .iter()
        .filter_map(|project|
                    project.path().to_str()
                    .map(|s|s.to_owned())
                    )
        .collect::<Vec<String>>();

    util::open_in_editor(&editor, paths);
}

pub fn edit_template(name:&str, editor:&str){
    let luigi = setup_luigi();
    let template_paths = luigi.list_templates()
        .iter()
        .filter(|f|f
                .file_name()
                .unwrap_or(&OsStr::new("")) == name)
        .map(|p|p.display().to_string())
        .collect::<Vec<String>>();
    util::open_in_editor(&editor, template_paths);
}

/// Command SHOW
pub fn show_project(dir:LuigiDir, search_term:&str){
    for project in search_projects(dir, &search_term){
        println!("{} {} {} {}", project.index(), project.name(), project.manager(), project.date());
    }
}

/// Command CONFIG --show
pub fn config_show(path:&str){
    //TODO config_show could be prettier
    println!("{:#?}", CONFIG.get_str(&path));
}

/// Command CONFIG --edit
pub fn config_edit(editor:&str){
    util::open_in_editor(&editor, vec![CONFIG.path.to_str().unwrap().to_owned()]);
}

/// Command CONFIG --default
pub fn config_show_default(){
    println!("{}", config::DEFAULT_CONFIG);
}