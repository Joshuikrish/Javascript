/**
 * 
 * For a number, it will be [object Number]
For a boolean, it will be [object Boolean]
For null: [object Null]
For undefined: [object Undefined]
For arrays: [object Array]
…etc (customizable).

 */

class Rabbit { }
class Animal { }
let rabbit = new Rabbit()
console.log(rabbit instanceof Animal);


{
    let s = Object.prototype.toString;

console.log( s.call(123) ); // [object Number]
console.log( s.call(null) ); // [object Null]
console.log( s.call(console.log) ); // [object Function]

}

{
    let user = {
        [Symbol.toStringTag]: "User"
      };
      
      alert( {}.toString.call(user) ); // [object User]
      
}