const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
}

const person2 = {
  firstName: 'Ludovico',
  lastName: 'Colucci',
  age: 21,
}

// Print values of person using Object.keys

// console.log(`${Object.keys(person)[0]}: ${Object.values(person)[0]}`);
// console.log(`${Object.keys(person)[1]}: ${Object.values(person)[1]}`);
// console.log(`${Object.keys(person)[2]}: ${Object.values(person)[2]}`);

function infoPerson (item) {
  console.log(`${Object.keys(item)[0]}: ${Object.values(item)[0]}`);
  console.log(`${Object.keys(item)[1]}: ${Object.values(item)[1]}`);
  console.log(`${Object.keys(item)[2]}: ${Object.values(item)[2]}`);
}

infoPerson(person); //so che la funzione non era necessaria ma volevo provare



