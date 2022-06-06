class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject (obj){
    return new Person(obj.firstName, obj.lastName);
  }
}

const obj = {
  firstName: 'Mario',
  lastName: 'Rossi'
};

const person = Person.fromObject(obj);

// const person = new Person("Ludovico", "Colucci");


console.log(`${person.firstName} ${person.lastName}`);