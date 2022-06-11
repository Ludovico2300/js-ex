const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

function replacer(key, value) {
  // Filtering out properties
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

//con replacer filtro i valori di person in modo da ottenere solo i numeri


const json = JSON.stringify(person, replacer);

console.log(json); // Should return: { id: 1, age: 25 }