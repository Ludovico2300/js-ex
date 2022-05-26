

// function adultFilter(persons) {
//   const adults = persons.filter(persons => persons.age >= 18);
// } NON CAPISCO COME INSERIRE IL FILTRO NELLA FUNZIONE ??

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

// const adults = adultFilter(persons); NON CAPISCO PERCHE' DOVREI METTERE QUESTO ???

const adults = persons.filter(persons => persons.age >= 18);


console.log(persons);

console.log(adults);