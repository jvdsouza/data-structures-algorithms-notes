//Create a function that reverses a string:

function reverse(str) {
  //check input
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'no good'
  }
  splitString = str.split("")
  reverseList = []
  stringLength = str.length - 1

  for(let i=stringLength; i>=0; i--) {
    reverseList.push(splitString[i])
  }
  return reverseList.join('')
}

const reverse2 = (str) => str.split('').reverse().join('')


console.log(reverse('jokagdsf'))
console.log(reverse2('jokagdsf'))
