/**
 * Garbage collection is performed automatically. We cannot force or prevent it.
Objects are retained in memory while they are reachable.
Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole, as we’ve seen in the example above.

 */function foo() {
    var obj1 = {};
    var obj2 = {}; 
    obj1.a = obj2; 
    obj2.a = obj1;
    console.log(obj1);
    console.log(obj2);
 }
 foo();
 