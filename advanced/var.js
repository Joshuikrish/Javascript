/**
 * @name var
 * let 
 * var
 * const
 * “var” has no block scope
 * “var” tolerates redeclarations
 * “var” variables can be declared below their use
 * 
 * 
 * 
 * 
 * 
 */

// for (var i = 0; i < 10; i++) {
//     var one = 1;
//     one += i
//     // ...
//   }
  
//   console.log(i);   // 10, "i" is visible after loop, it's a global variable
//   console.log(one); 


function sayHi() {
    
    console.log(phrase); // undefined
    var phrase; // declaration works at the start...
  
    phrase = "Hello"; // ...assignment - when the execution reaches it.
  }
  
  sayHi();
  