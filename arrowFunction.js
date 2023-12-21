// Arrow Function

let sum = (x,y) => x+y
console.log(sum(2,3)) 



// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { console.log("You agreed."); },
//     function() { console.log("You canceled the execution."); }
//   );


let ask = (question,yes,no) => {
    confirm(question) ? yes() : no()
}
ask("do you agree",console.log("you agree"),console.log("no agree"));