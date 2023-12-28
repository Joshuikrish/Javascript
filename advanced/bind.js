let user = {
    firstName: "John",
    sayHi() {
      return (`Hello, ${this.firstName}!`);
    }
  };

  
  let user1 = user;
  console.log(user1.sayHi());
  setTimeout(user.sayHi, 1000); // Hello, undefined!
