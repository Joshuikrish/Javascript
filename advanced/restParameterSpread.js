/* function sumAll(...args) { 
    // let a = args;
    // args is the name for the array
    // console.log(typeof(a));
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  

  console.log( sumAll(1) ); // 1
  console.log( sumAll(1, 2) ); // 3
  console.log( sumAll(1, 2, 3) ); // 6
   */



  function multAll(...arg) {
    let mult = 1;
    // console.log(arguments.length);
    for (a of arg){
        mult *= a
    }
    return mult
  }

  console.log(multAll(1,2,3));


//   spread operator


let arr1 = [1,2,3]
let noref_arr = [...arr1]
// no ref