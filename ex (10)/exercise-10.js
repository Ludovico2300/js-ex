function sumUntil(maxValue) {
  let counter = 0;
  for (let i = 1; i <= maxValue; i++){
    counter = counter + i;
  }
  return counter
}
console.log(sumUntil(5));