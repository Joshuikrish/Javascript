/*
Proxy is a wrapper around an object, that forwards operations on it to the object, optionally trapping some of them.

It can wrap any kind of object, including classes and functions.

The syntax is:

let proxy = new Proxy(target, {
   traps 
})
…Then we should use proxy everywhere instead of target. A proxy doesn’t have its own properties or methods. It traps an operation if the trap is provided, otherwise forwards it to target object.

We can trap:

Reading (get), writing (set), deleting (deleteProperty) a property (even a non-existing one).
Calling a function (apply trap).
The new operator (construct trap).
Many other operations (the full list is at the beginning of the article and in the docs).
That allows us to create “virtual” properties and methods, implement default values, observable objects, function decorators and so much more.

We can also wrap an object multiple times in different proxies, decorating it with various aspects of functionality.

The Reflect API is designed to complement Proxy. For any Proxy trap, there’s a Reflect call with same arguments. We should use those to forward calls to target objects.

Proxies have some limitations:

Built-in objects have “internal slots”, access to those can’t be proxied. See the workaround above.
The same holds true for private class fields, as they are internally implemented using slots. So proxied method calls must have the target object as this to access them.
Object equality tests === can’t be intercepted.
Performance: benchmarks depend on an engine, but generally accessing a property using a simplest proxy takes a few times longer. In practice that only matters for some “bottleneck” objects though.

 */


{function delay(f, ms) {
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
}


/**
 * 
 * 
 * Reflect is a built in object that simplifies creation of proxy.
 * 
 */

{

  let user = {
    _name: "Guest",
    get name() {
      return this._name;
    }
  };
  
  let userProxy = new Proxy(user, {
    get(target, prop, receiver) {
      return target,prop,receiver;
    }
  });


  console.log(userProxy.name);
  console.log(userProxy.name);
  
  


}


{
  let object = {
    data: "Valuable data"
  };
  
  let {proxy, revoke} = Proxy.revocable(object, {});
  
  // pass the proxy somewhere instead of object...
  console.log(proxy.data); // Valuable data
  
  // later in our code
  revoke();
  
  // the proxy isn't working any more (revoked)
  console.log(proxy.data); // Error
  
}