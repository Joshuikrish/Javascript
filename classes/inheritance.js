class Animal {
    constructor(name){
        this.teeth = 40
        this.legs = 4
        this.hair = "dryhair"
        this.name = name
    }
    countTeeth(teeth){
        return this.teeth ? this.teeth: teeth;
    }
}

let cheetah = new Animal("Cheetah");
// cheetah.teeth = 32;
console.log(cheetah);

class insect extends Animal{
    constructor(name){
        super(name);
        this.legs = 8,
        this.hair = "black"
    }
   
   
}
let butterfly = new insect("butterfly");
console.log(butterfly);