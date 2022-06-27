function isAdult({age}) {
  return age >= 18;
}

const person = {};
const {id = 1, firstName = 'Mario', lastName = 'Rossi', age = 25} = person;

console.log(isAdult(person));