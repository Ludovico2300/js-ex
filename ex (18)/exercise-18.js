function memoize(fn) {
  let cache = { 1: 1 };
  return function factorialCache(n) {
    if (n in cache) {

      return cache[n];

    }
    else {
      let temp = fn(n);
      cache[n] = temp;
      return temp;
    }
  }

}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));