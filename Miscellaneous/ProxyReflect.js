function delay(f, ms) {
    return new Proxy(f, {
      apply(target, thisArg, args) {
        setTimeout(() => target.apply(thisArg, args), ms);
      }
    });
  }
  
  function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }
  
  sayHi = delay(sayHi, 3000);
  
  console.log(sayHi.length); // 1 (*) proxy forwards "get length" operation to the target
  
  sayHi("John"); // Hello, John! (after 3 seconds)
  