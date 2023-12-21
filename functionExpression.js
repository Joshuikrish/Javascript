/* function declaration */
function add(x,y){
    return x+y
}

/* function Expression */
let sum = function (x,y){
    return x+y
}

console.log(add(2,2))
console.log(sum(2,2))

/*
Difference is function Declarations and function expression is 

javascript engine runs all the function function declaration at first 

function expression runs when the code line comes in it.

which means 
console.log(add(2,2)) return 4
console.log(sum(2,2)) error
*/

/* function declaration */
// function add(x,y){
    // return x+y
// }

/* function Expression */
// let sum = function (x,y){
    // return x+y
// }


/* use function delcation for normal function when it comes to if else use function expression */



