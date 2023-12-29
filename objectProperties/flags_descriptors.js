/**
 * An object is not only key value pair but it also have propreties.
 */
{
  let user = {
    name: "John"
  };

  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

  console.log(JSON.stringify(descriptor, null, 2));
}
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

{
  let user = {};
  Object.defineProperty(user, "name", {
    value: "john"
  });
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  console.log(JSON.stringify(descriptor, null, 2));
}


{
  let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false,
    configurable: true,
  });
  
  user.name = "Pete"; 
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  console.log(JSON.stringify(descriptor, null, 2));
}