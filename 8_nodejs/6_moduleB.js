const _moduleA = require("./4_moduleA");

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){

    }
}

// exports.Person = Person;
module.exports = Person;