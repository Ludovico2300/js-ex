const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

// Modifica la linea sottostante affinché venga creata e assegnata a person2 
// una copia esatta di person1, permettendo così di modificare il "firstName" di person2,
// senza che venga modificato anche il valore "firstName" di person1
const person2 = Object.assign ({}, person1);

// dichiaro un nuovo oggetto, clonando quello esistente, in modo che non abbiano 
// gli stessi riferimenti di memoria e che abbiano "vita propria"

person2.firstName = 'Simon';

console.log(person1);
console.log(person2);