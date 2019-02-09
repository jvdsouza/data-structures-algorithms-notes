// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){ //O(n)
  if (n === 0) {
    return 0
  }

  fib = 1
  fibprev = 0
  counter = 0
  while(counter < n-1) {
    temp = fib
    fib += fibprev
    fibprev = temp
    counter ++;
  }

  return fib
}

// console.log(fibonacciIterative(6));

calculations = 0;
function fibonacciRecursive(n) { //O(2^n)
  calculations++;
  if (n <=1){
    return n
  }
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}


console.log(fibonacciRecursive(7))
console.log('calculations', calculations)
