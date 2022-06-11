const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// for (let item of Object.entries(person)) {
//   console.log(`${item[0]}: ${item[1]}`);
// }

const {id, firstName: n, lastName: s, age: a} = person;
console.log(`${id} ${n} ${s} ${a}`);