class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  // get firstName(){
  //   return this.firstName;
  // }

  // get lastName(){
  //   return this.lastName;
  // }

  //  get age(){
  //   return this.age;
  // }

  //  set firstName(value){
  //   this.firstName = value;
  // }

  // set lastName(value){
  //   this.lastName = value;
  // }

  // set age(value){
  //   this.age = value;
  // }

  // non capisco il funzionamento di get e set

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName());

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName());