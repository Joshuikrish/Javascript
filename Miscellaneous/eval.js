/**
 * To run any code we can use eval function till now
 * 
 * 
 */


/*
Summary
A call to eval(code) runs the string of code and returns the result of the last statement.

Rarely used in modern JavaScript, as there’s usually no need.
Can access outer local variables. That’s considered bad practice.
Instead, to eval the code in the global scope, use window.eval(code).
Or, if your code needs some data from the outer scope, use new Function and pass it as arguments

*/

let a = 10;
let b = 20;
let c = eval("a+b");
console.log(c);