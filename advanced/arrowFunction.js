/**
 * Do not have this
Do not have arguments
Can’t be called with new
They also don’t have super, but we didn’t study it yet. We will on the chapter Class inheritance
That’s because they are meant for short pieces of code that do not have their own “context”, but rather work in the current one. And they really shine in that use case.
 */


let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
        student => console.log(this.title + ': ' + student)
      );
    }
  };
  
  group.showList();


  function defer(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }
  
  function sayHi(who) {
    alert('Hello, ' + who);
  }
  
  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("John"); // Hello, John after 2 seconds


//   The same without an arrow function would look like:

function defer(f, ms) {
  return function(...args) {
    let ctx = this;
    setTimeout(function() {
      return f.apply(ctx, args);
    }, ms);
  };
}