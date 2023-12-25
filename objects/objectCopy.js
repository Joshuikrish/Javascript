/**
 * So basically we can use structuredClone() function to copy the nested object
 * If not nested object use the object.assign({},object)
 */

/* let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  console.log( user.sizes === clone.sizes ); // true, same object
  
  // user and clone share sizes
  user.sizes.width = 60;    // change a property from one place
  console.log(clone.sizes.width); 
  console.log(user.sizes.width); 

  /* let clone = structuredClone(user);
 */ 


let admin={
  name:'admin'
}
let neew = admin
neew.name='user'
console.log(admin)


let a ={}
let b = a
console.log(a==b)
console.log(a===b)

let c = {}
let d = {}
console.log(c==d);
console.log(c===d);


// let newy = {
//   name: "John",
//   age: 30
// };

// let clone = Object.assign({}, newy);
// clone.name="you"

// console.log(clone.name); // John
// console.log(clone.age); // 30

// console.log(newy.name);




let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

console.log( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
console.log(clone.sizes.width); // 50, not related
