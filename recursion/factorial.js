const factorial = (n) => {
  if (n === 2) {
    return 2
  } else {
    return factorial(n-1)*n
  }
}

console.log(factorial(5))

const factorialIterative = (n) => {
  let factorial = n
  while (n > 2) {
    factorial = factorial * (n-1)
    n--;
  }
  return factorial
}

console.log(factorialIterative(5));
