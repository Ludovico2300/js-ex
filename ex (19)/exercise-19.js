const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

// const person2 = person1;

// cosi facendo si copia il riferimento in memoria, quindi ogni cambiamento che subisce
// un oggetto, lo subirà anche l'altro

const person2 = Object.assign ({}, person1);
// invece cosi copio l'oggetto, ed ognuno di essi avrà vita propria

// Modifica la proprietà "firstName" di person2 in "Simon"
person2.firstName = "Simon";

console.log(person1);
console.log(person2);