// const sum = function (a, b) {
//   return a + b;
// }

// const log = function (value) {
//   console.log(value);
// }

const sum = (a, b) => a + b;
// dato ch la funzione esegue un return, nell'arrow function posso omettere le parentesi
// graffe e il return stesso

const log = value => { 
  console.log(value);
};
// dato che la funzione ha solo un paramentro, posso indicare il paramentro in questione
// senza le parentesi


log(sum(2, 5));