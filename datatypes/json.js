let object = {
    name: "krishna",
    age: 20,
}

let json = JSON.stringify(object)
console.log(json);
let parse = JSON.parse(json)
console.log(parse);