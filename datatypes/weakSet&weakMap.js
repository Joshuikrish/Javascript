// creating a weakset
let weakSet = new WeakSet();
let name1 = {name:"krishna"};
weakSet.add(name1);
console.log(weakSet.has(name1));


// creating a weakmap
let weakmap = new WeakMap();
let name2 = {name:"krishna"};
weakmap.set(name2,"kathmandu");
console.log(weakmap.get(name2))