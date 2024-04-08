//With TDA
class Person {
    constructor (age) {
        this.age = age;
   }

   isAdult () {
       return this.age >= 18;
   }
}

module.exports = { Person };

//Without TDA
/*
class Person {
     constructor (age) {
         this.age = age;
    }
 
    getAge () {
        return this.age;
    }
 }
 
 module.exports = { Person };
 */