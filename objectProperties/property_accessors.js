/**
 * like getter & setter
 */

{
    let obj1 = {
        fristName : "Krishna",
        secondName : "Shrestha",
        get fullName (){
            return `${this.fristName} ${this.secondName}`
        },
        set fullName(value) {
            [this.fristName, this.secondName] = value.split(" ");
          }
    }
    obj1.fullName = "Alice Cooper";

    console.log(obj1.fullName);
}


{
    function User(name, birthday) {
        this.name = name;
        this.birthday = birthday;
      
        // age is calculated from the current date and birthday
        Object.defineProperty(this, "age", {
          get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
          }
        });
      }
      
      let john = new User("John", new Date(1992, 6, 1));
      
      alert( john.birthday ); // birthday is available
      alert( john.age );      // ...as well as the age
      
}