// let hello = function func() {
//     return `hello`
// }
// console.log(hello());


let sayHi = new Function('console.log("Hello")');

sayHi(); // Hello
