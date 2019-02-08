//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIteration(str) {
  reversedStr = ''
  for(let i=str.length - 1; i>=0; i--){
    reversedStr += str[i]
  }
  return reversedStr
}

function reverseStringRecursion(str) {
  if(str.length === 1) {
    return str
  }
  return reverseStringRecursion(str.slice(1, str.length)) + str[0]
}

// console.log(reverseStringIteration('yoyo mastery'))
console.log(reverseStringRecursion('yoyo mastery'))
//should return: 'retsam oyoy'
