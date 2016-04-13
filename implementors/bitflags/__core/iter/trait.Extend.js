(function() {var implementors = {};
implementors['bitflags'] = ["impl <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;<a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>&gt; for <a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.str.html'>str</a>&gt; for <a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.char.html'>char</a>&gt; for <a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>","impl <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.char.html'>char</a>&gt; for <a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='bitflags/__core/vec/struct.Vec.html' title='bitflags::__core::vec::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a> + 'a</span>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='bitflags/__core/vec/struct.Vec.html' title='bitflags::__core::vec::Vec'>Vec</a>&lt;T&gt;","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='bitflags/__core/collections/struct.BTreeSet.html' title='bitflags::__core::collections::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a> + 'a + <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='bitflags/__core/collections/struct.BTreeSet.html' title='bitflags::__core::collections::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a></span>","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='bitflags/__core/collections/linked_list/struct.LinkedList.html' title='bitflags::__core::collections::linked_list::LinkedList'>LinkedList</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a> + 'a</span>","impl&lt;A&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='bitflags/__core/collections/linked_list/struct.LinkedList.html' title='bitflags::__core::collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;","impl&lt;'a, K, V&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.tuple.html'>(</a>&amp;'a K, &amp;'a V<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='bitflags/__core/collections/struct.BTreeMap.html' title='bitflags::__core::collections::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a> + <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a>, V: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a></span>","impl&lt;K, V&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.tuple.html'>(</a>K, V<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='bitflags/__core/collections/struct.BTreeMap.html' title='bitflags::__core::collections::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a></span>","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='bitflags/__core/collections/binary_heap/struct.BinaryHeap.html' title='bitflags::__core::collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a> + 'a + <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='bitflags/__core/collections/binary_heap/struct.BinaryHeap.html' title='bitflags::__core::collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a></span>","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='bitflags/__core/collections/vec_deque/struct.VecDeque.html' title='bitflags::__core::collections::vec_deque::VecDeque'>VecDeque</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a> + 'a</span>","impl&lt;A&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='bitflags/__core/collections/vec_deque/struct.VecDeque.html' title='bitflags::__core::collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;",];implementors['bitflags'] = ["impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='bitflags/__core/vec/struct.Vec.html' title='bitflags::__core::vec::Vec'>Vec</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a> + 'a</span>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='bitflags/__core/vec/struct.Vec.html' title='bitflags::__core::vec::Vec'>Vec</a>&lt;T&gt;","impl <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;<a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>&gt; for <a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.str.html'>str</a>&gt; for <a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>","impl&lt;'a&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a <a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.char.html'>char</a>&gt; for <a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>","impl <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.char.html'>char</a>&gt; for <a class='struct' href='bitflags/__core/string/struct.String.html' title='bitflags::__core::string::String'>String</a>","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='bitflags/__core/collections/vec_deque/struct.VecDeque.html' title='bitflags::__core::collections::vec_deque::VecDeque'>VecDeque</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a> + 'a</span>","impl&lt;A&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='bitflags/__core/collections/vec_deque/struct.VecDeque.html' title='bitflags::__core::collections::vec_deque::VecDeque'>VecDeque</a>&lt;A&gt;","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='bitflags/__core/collections/binary_heap/struct.BinaryHeap.html' title='bitflags::__core::collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a> + 'a + <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='bitflags/__core/collections/binary_heap/struct.BinaryHeap.html' title='bitflags::__core::collections::binary_heap::BinaryHeap'>BinaryHeap</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a></span>","impl&lt;'a, K, V&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.tuple.html'>(</a>&amp;'a K, &amp;'a V<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='bitflags/__core/collections/struct.BTreeMap.html' title='bitflags::__core::collections::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a> + <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a>, V: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a></span>","impl&lt;K, V&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.tuple.html'>(</a>K, V<a class='primitive' href='https://doc.rust-lang.org/nightly/bitflags/primitive.tuple.html'>)</a>&gt; for <a class='struct' href='bitflags/__core/collections/struct.BTreeMap.html' title='bitflags::__core::collections::BTreeMap'>BTreeMap</a>&lt;K, V&gt; <span class='where'>where K: <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a></span>","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='bitflags/__core/collections/btree_set/struct.BTreeSet.html' title='bitflags::__core::collections::btree_set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a> + 'a + <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a></span>","impl&lt;T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;T&gt; for <a class='struct' href='bitflags/__core/collections/btree_set/struct.BTreeSet.html' title='bitflags::__core::collections::btree_set::BTreeSet'>BTreeSet</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/cmp/trait.Ord.html' title='bitflags::__core::cmp::Ord'>Ord</a></span>","impl&lt;'a, T&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;&amp;'a T&gt; for <a class='struct' href='bitflags/__core/collections/linked_list/struct.LinkedList.html' title='bitflags::__core::collections::linked_list::LinkedList'>LinkedList</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='bitflags/__core/marker/trait.Copy.html' title='bitflags::__core::marker::Copy'>Copy</a> + 'a</span>","impl&lt;A&gt; <a class='trait' href='bitflags/__core/iter/trait.Extend.html' title='bitflags::__core::iter::Extend'>Extend</a>&lt;A&gt; for <a class='struct' href='bitflags/__core/collections/linked_list/struct.LinkedList.html' title='bitflags::__core::collections::linked_list::LinkedList'>LinkedList</a>&lt;A&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
