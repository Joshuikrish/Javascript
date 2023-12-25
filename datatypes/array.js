let fruit = ['apple']
let cloneFruit = fruit
cloneFruit.push('mango')
console.log(cloneFruit);
console.log(fruit.length);

// fruit.splice()

for (let item of fruit){
    console.log(item);
}

// arr.splice method is swiss army knife
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

//   user = users.find(item => item.id === 1)
//   console.log(user);


//   arr.filter method is used as find but works for many

// let user = users.filter(item=>item.id<4)
// console.log(user);

let user = users.map(item => item.name.length)
console.log(user);

function compareNumeric(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
  }
  

  let arr = [1,40,2,15]
  console.log(arr.sort(compareNumeric));


  let names = 'Bilbo, Gandalf, Nazgul';

let arr2 = names.split(', ');
console.log(arr2);


function doubleNumbers(arr){
    return arr.map(items => items*2)
    // your code here
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
  

  let arr3 = [1, 2, 3, 4, 5];

let result = arr3.reduce((sum, current) => sum + current,0);

console.log(result); // 15
