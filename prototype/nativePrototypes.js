/**
 * Native Prototypes
 */

{
    let obj = {}
    console.log(obj.toString());
}
{
    let arr =[1,3,5]
    console.log(arr.__proto__.__proto__.__proto__);
    console.log(arr.toString());
   
}

{
    if (!String.prototype.repeat) { // if there's no such method
        // add it to the prototype
      
        String.prototype.repeat = function(n) {
          // repeat the string n times
      
          // actually, the code should be a little bit more complex than that
          // (the full algorithm is in the specification)
          // but even an imperfect polyfill is often considered good enough
          return new Array(n + 1).join(this);
        };
      }
      
      console.log( "La".repeat(3) ); // LaLaLa
      
}


{
    Function.prototype.defer = function(ms) {
        let f = this;
        return function(...args) {
          setTimeout(() => f.apply(this, args), ms);
        }
      };
      
      // check it
      function f(a, b) {
        alert( a + b );
      }
      
      f.defer(1000)(1, 2); // shows 3 after 1 sec
      
}