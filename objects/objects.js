/**
 * Objects are key value pair data structure (array).
 * Author : Krishna Shrestha
 * Date : 31/12/2023
 * Version : 1.0
 * License : MIT
 *
 * functions :
 *   - Object.keys()
 *   - Object.values()
 *   - Object.entries()
 *   - Object.fromEntries()
 *   - Object.assign()
 *   - Object.freeze()
 *   - Object.seal()
 *   - Object.is()
 *   - Object.prototype.hasOwnProperty()
 *   - Object.prototype.isPrototypeOf()
 *   - Object.prototype.propertyIsEnumerable()
 *   - Object.prototype.toString()
 *   - Object.prototype.valueOf()
 *   - Object.prototype.toLocaleString()
 *   - Object.prototype.hasOwnProperty()
 *
 * properties :
 *   - length
 *   - prototype
 *   - constructor
 *   - [[Prototype]]
 *   - [[Class]]
 *
 *
 */

/* let groupStudents = {
  name: "Krishna",
  age: 21,
};
// console.log(Array.isArray(groupStudents));
// console.log(typeof(groupStudents));

// console.log("name" in groupStudents);



let emptyObject ={

}
emptyObject.name="John"
emptyObject.surname="smith"
console.log((emptyObject));
emptyObject.name="Pete"
console.log((emptyObject));
delete emptyObject.name;
console.log((emptyObject)); */
/* 
function isEmpty(array) {
    return Object.keys(array).length === 0;

}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false
 */

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let totalSalary = 0;
// for (let prop in salaries) {
//     totalSalary += salaries[prop]
// }
// console.log(totalSalary)

// console.log(totalSalary);

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(menu) {
    for(key in menu){
        // console.log(typeof(menu[key]))
        if(typeof(menu[key]) == "number"){
            console.log( menu[key] *= 2)
        }
        else {
            console.log( menu[key])
            

        }
    }
  }
  
multiplyNumeric(menu);
//   console.log(c)