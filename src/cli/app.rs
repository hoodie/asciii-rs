use clap::{App, AppSettings, Arg, ArgMatches, SubCommand};

pub fn setup() -> ArgMatches<'static>{
    App::new("asciii")
        .author("Hendrik Sollich <hendrik@hoodie.de>")
        .version(&crate_version!()[..])
        .about("The ascii invoicer III")
        .setting(AppSettings::SubcommandRequiredElseHelp)

        .subcommand(SubCommand::with_name("doc")
            .about("Opens the online documentation, please read it")
        )

        .subcommand(SubCommand::with_name("new")
                    .about("Create a new project")
                    .arg(Arg::with_name("name")
                         .help("Project name")
                         .required(true)
                        )
                    .arg(Arg::with_name("template")
                         .help("Use a specific template.")
                         .short("T")
                         .long("template")
                        )
                    .arg(Arg::with_name("editor")
                         .help("Override the configured editor")
                         .short("E")
                         .long("editor")
                        )
                    .arg(Arg::with_name("don't edit")
                         .help("Do not edit the file after creation")
                         .short("D")
                         .long("dont")
                        )
                    )

        .subcommand(SubCommand::with_name("list")
                    .about("List Projects")
                    .arg(Arg::with_name("archive")
                         .help("list archived projects")
                         .short("a")
                         .long("archive")
                         .takes_value(true)
                        )
                    .arg(Arg::with_name("details")
                         .help("Add extra fields to print for each project listed")
                         .short("d")
                         .long("details")
                         .takes_value(true)
                         .multiple(true)
                        )
                    .arg(Arg::with_name("filter")
                         .help("List of fields to print for each project listed")
                         .short("f")
                         .long("filter")
                         .takes_value(true)
                         .multiple(true)
                        )
                    .arg(Arg::with_name("errors")
                         .help("Show Errors for each project")
                         .long("errors")
                        )
                    .arg(Arg::with_name("simple")
                         .help("Use simple list")
                         .long("simple")
                        )
                    .arg(Arg::with_name("csv")
                         .help("Print in csv form")
                         .long("csv")
                         .conflicts_with("simple")
                         .conflicts_with("verbose")
                        )
                    .arg(Arg::with_name("verbose")
                         .help("Opposite of simple")
                         .long("verbose")
                         .short("v")
                         .conflicts_with("simple")
                         .conflicts_with("csv")
                        )
                    .arg(Arg::with_name("sort")
                         .help("sort by [date | index | name | manager]")
                         .long("sort")
                         .short("s")
                         .possible_values(&["date",  "index",  "name",  "manager"])
                         .takes_value(true)
                        )
                    .arg(Arg::with_name("all")
                         .help("List all projects, ever")
                         .long("all")
                        )

                    .arg(Arg::with_name("templates")
                         .help("List templates")
                         .long("templates")
                         .short("t")
                        )

                    .arg(Arg::with_name("years")
                         .help("List years in archive")
                         .long("years")
                         .short("y")
                        )

                    .arg(Arg::with_name("paths")
                         .help("List paths to each project file")
                         .long("paths")
                         .short("p")
                        )

                    .arg(Arg::with_name("broken")
                         .help("List broken projects  without project file")
                         .long("broken")
                         .short("b")
                        )

                    .arg(Arg::with_name("virtual_fields")
                         .help("List all virtual data fields that can be used with --details")
                         .long("virtual")
                        )

                    .arg(Arg::with_name("nothing")
                         .help("Print nothing, expect the fields supplied via --details")
                         .long("nothing")
                         .short("n")
                        )
                    )

        .subcommand(SubCommand::with_name("archive")
                    .about("Move a Project into the archive")
                    .arg(Arg::with_name("NAME")
                         .help("The name of the project, duh!")
                         .required(true)
                        )

                    .arg(Arg::with_name("force")
                         .help("Archives the Project, even though it is not completely valid")
                         .long("force")
                        )

                    .arg(Arg::with_name("year")
                         .help("Override the year")
                         .long("year")
                         .takes_value(true)
                        )
                   )

        .subcommand(SubCommand::with_name("unarchive")
                    .about("Move a Project out of the archive")
                    .arg(Arg::with_name("YEAR")
                         .help("Specify the Archiv")
                         .required(true)
                        )
                    .arg(Arg::with_name("NAME")
                         .help("The name of the project, duh!")
                         .required(true)
                        )
                   )

        .subcommand(SubCommand::with_name("path")
                    .about("Show storage path")
                    .arg(Arg::with_name("templates")
                         .help("Show path to templates instead")
                         .long("templates")
                         .short("t")
                         .conflicts_with("bin")
                         .conflicts_with("output")
                        )
                    .arg(Arg::with_name("output")
                         .help("Show path to created documents instead")
                         .long("output")
                         .short("o")
                         .conflicts_with("bin")
                         .conflicts_with("templates")
                        )
                    .arg(Arg::with_name("bin")
                         .help("Show path to current binary instead")
                         .long("bin")
                         .short("b")
                         .conflicts_with("output")
                         .conflicts_with("templates")
                        )
                    )

        .subcommand(SubCommand::with_name("open")
                    .about("Open storage path")
                    .arg(Arg::with_name("templates")
                         .help("Open path to templates instead")
                         .long("templates")
                         .short("t")
                         .conflicts_with("output")
                         .conflicts_with("bin")
                        )
                    .arg(Arg::with_name("output")
                         .help("Open path to created documents instead")
                         .long("output")
                         .short("o")
                         .conflicts_with("templates")
                         .conflicts_with("bin")
                        )
                    .arg(Arg::with_name("bin")
                         .help("Open path to current binary instead")
                         .long("bin")
                         .short("b")
                         .conflicts_with("templates")
                         .conflicts_with("output")
                        )
                    )
                    //# TODO add --invoice and --offer

        .subcommand(SubCommand::with_name("edit")
                    .about("Edit a specific project")
                    .arg(Arg::with_name("search_term")
                         .help("Search term, possibly event name")
                         .required(true)
                         .multiple(true)
                        )

                    .arg(Arg::with_name("archive")
                         .help("Pick an archived project")
                         .short("a")
                         .long("archive")
                         .takes_value(true)
                        )

                    .arg(Arg::with_name("template")
                         .help("Edit a template currently tyml")
                         .short("t")
                         .long("template")
                        )

                    .arg(Arg::with_name("editor")
                         .help("Override the configured editor")
                         .short("e")
                         .long("editor")
                         .takes_value(true)
                        )
                    )

        .subcommand(SubCommand::with_name("show")
                    .about("Display a specific project")
                    .arg(Arg::with_name("search_term")
                         .help("Search term, possibly event name")
                         .required(true)
                         .multiple(true)
                        )

                    .arg(Arg::with_name("archive")
                         .help("Pick an archived project")
                         .long("archive")
                         .short("a")
                         .takes_value(true)
                        )

                    .arg(Arg::with_name("template")
                         .help("Show show fields in templates that are filled")
                         .long("template")
                         .short("t")
                        )
                    //#conflicts_with: archive  # this causes a crash

                    .arg(Arg::with_name("files")
                         .help("List files that belong to a project")
                         .long("files")
                        )

                    .arg(Arg::with_name("invoice")
                         .help("Display values in invoice mode")
                         .long("invoice")
                         .short("i")
                        )

                    .arg(Arg::with_name("offer")
                         .help("Display values in offer mode")
                         .long("offer")
                         .short("o")
                        )

                    .arg(Arg::with_name("hours") //# what used to be --caterers
                         .help("Display hours")
                         .long("hours")
                        )

                    .arg(Arg::with_name("csv")
                         .help("Show as csv")
                         .long("csv")
                         .short("c")
                        )

                    .arg(Arg::with_name("markdown")
                         .help("Show as markdown")
                         .long("markdown")
                         .short("m")
                        )

                    .arg(Arg::with_name("config")
                         .help("Show and edit your config")
                        )
                    .arg(Arg::with_name("edit")
                         .help("Edit your config")
                         .short("e")
                         .long("edit")
                        )


                    .arg(Arg::with_name("show")
                         .help("Show a specific config value")
                         .short("s")
                         .long("show")
                         .takes_value(true)
                        )

                    .arg(Arg::with_name("default")
                         .help("Show default config")
                         .short("d")
                         .long("default")
                        )

                    )

        .subcommand(SubCommand::with_name("whoami")
                    .about("Show your name from config")
                   )

        //# GIT STUFF
        .subcommand(SubCommand::with_name("status")
                    .about("Show the working tree status")
                    .arg(Arg::with_name("pull")
                         .help("Pull and merge new commits from remote")
                        )
                    .arg(Arg::with_name("add")
                         .help("Add file contents to the index")
                        )
                    .arg(Arg::with_name("search_term")
                         .help("Search term, possibly event name")
                         .required(true)
                         .multiple(true)
                        )
                    .arg(Arg::with_name("commit")
                         .help("Save changes locally")
                        )
                    .arg(Arg::with_name("remote")
                         .help("Show information about the remote")
                        )
                    .arg(Arg::with_name("push")
                         .help("Upload locally saved changes to the remote")
                        )

                    .arg(Arg::with_name("term")
                         .help("terminal info")
                        )
                    )
    .get_matches()
}
