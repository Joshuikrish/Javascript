// normal loop

// let fact = 1;
// for (let i = 1; i <= 5; i++) {
//     const element = i;
//     fact *= element;
// }
// console.log(fact);


// recursion 

// let fact = 1
function recursion(x) {
    if(x < 0){
        throw new Error("negative number");
    }
    if(x === 0){
        return 1
    }
    return x * recursion(x-1)
    
}

console.log(recursion(5));