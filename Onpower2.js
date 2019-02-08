// Log all pairs of array
const boxes = [1,2,3,4,5]

const pairArray = (array) => {
  for (let i=0; i<array.length; i++) {
    for (let j=0; j<array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

pairArray(boxes) //O(n^2) --> Quadratic  time
