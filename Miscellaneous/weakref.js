{
    let user = { name: "John" };

// copied the strong reference to the object into the admin variable
let admin = user;

// let's overwrite the value of the user variable
user = null;

admin.name= 'admin'

console.log(user);
console.log(admin);
}


{
    let user = { name: "John" };

// copied the strong reference to the object into the admin variable
let admin =new WeakRef(user);

// let's overwrite the value of the user variable
user = null;

console.log(user);
console.log(admin);

}

/*

WeakRef is typically used to create caches or associative arrays that store resource-intensive objects. This allows one to avoid preventing these objects from being collected by the garbage collector solely based on their presence in the cache or associative array.

One of the primary examples – is a situation when we have numerous binary image objects (for instance, represented as ArrayBuffer or Blob), and we want to associate a name or path with each image. Existing data structures are not quite suitable for these purposes:

function fetchImg() {
    // abstract function for downloading images...
}

function weakRefCache(fetchImg) { // (1)
    const imgCache = new Map(); // (2)

    return (imgName) => { // (3)
        const cachedImg = imgCache.get(imgName); // (4)

        if (cachedImg?.deref()) { // (5)
            return cachedImg?.deref();
        }

        const newImg = fetchImg(imgName); // (6)
        imgCache.set(imgName, new WeakRef(newImg)); // (7)

        return newImg;
    };
}

const getCachedImg = weakRefCache(fetchImg);


WeakRef – designed to create weak references to objects, allowing them to be deleted from memory by the garbage collector if there are no longer strong references to them. This is beneficial for addressing excessive memory usage and optimizing the utilization of system resources in applications.

FinalizationRegistry – is a tool for registering callbacks, that are executed when objects that are no longer strongly referenced, are destroyed. This allows releasing resources associated with the object or performing other necessary operations before deleting the object from memory.


*/


