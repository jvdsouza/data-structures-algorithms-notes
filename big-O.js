const nemo = ['nemo'];

function findNemo(array) {
  for (let i=0; i<array.length; i++) {
    if(array[i] === 'nemo') {
      console.log(`Found Nemo at ${i}`)
      break;
    }
  }
  console.log('Call to find nemo took ' + (t1 - t0) + ' milliseconds')
}

findNemo(nemo) //O(n) --> Linear Time

const boxes = [0,1,2,3,4,5]
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]);
  console.log(boxes[1]);
}

const firstTwoBoxes = (boxes) => {
  console.log(boxes[0]);
  console.log(boxes[1]);
} //stil O(1) - constant time

logFirstTwoBoxes(boxes);
firstTwoBoxes(boxes);
