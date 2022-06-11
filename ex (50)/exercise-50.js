class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  
  fromJson(x) {
    return JSON.parse(x);
  }
  
  toJson() {
    return JSON.stringify(this);
  }

  
}

//non funziona


const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);