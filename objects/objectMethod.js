let robot = {
    name: "sofia",
    age: 1,
    walk(){
        console.log("i can walk")
    }
}
let robot2={
    name : 'david',
    age: 2,
    walk : robot.walk,
    hi(){
        return `Hi ${this.name}`
    },
    copyname(){
        return `Copy named is ${this.name}`
    },
}
console.log(robot2.hi())
console.log(robot2.copyname())
