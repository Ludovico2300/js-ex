// const concat = function (arr1, arr2) {
//   return arr1.concat(arr2);
// }

const concat = (arr1, arr2) => arr1.concat(arr2);

// ometto le parentesi e return perchè la funzione esegue un return, dato che c'è 
// più di un paramentro uso le parentesi per contenerli

console.log(concat([2, 4], [5, 1]));