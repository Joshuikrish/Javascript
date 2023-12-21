let user = {
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