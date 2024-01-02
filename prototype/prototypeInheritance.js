let user1={
    name:"Krishna",
    role(){
        return "user"
    },
}
let guest1={
    name:"guest",
    __proto__: user1,
}

console.log(guest1.role());
