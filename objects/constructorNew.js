/**
 * So The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.
 * so we use constructor the new is mandoratory to copy the value
 * 
 * @param {*} name 
 * @returns 
 */


// function User(name) {
//     if (!new.target) { // if you run me without new
//       return new User(name); // ...I will add new for you
//     }
  
//     this.name = name;
//   }
  
//   let john = User("John"); // redirects call to new User
//   console.log(john.name); // John
  


function User(name) {
    this.name = name
    this.sayHi = function () {
        return `Hi ${this.name}`
    }
    return this
}
let ram = new User("Ram")
console.log(ram.sayHi())