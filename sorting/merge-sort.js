const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  arrayLen = array.length
  if (array.length === 1) {
    return array
  }
  // Split Array into right and left
  let left = array.slice(0, arrayLen/2);
  let right = array.slice(arrayLen/2);

  // console.log(left);
  // console.log(right);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  mergedList = []
  while(left.length > 0 || right.length > 0) {
    if(left[0] >= right[0]) {
      mergedList.push(right[0])
      right.splice(0, 1)
    } else if(right[0] > left[0]) {
      mergedList.push(left[0])
      left.splice(0, 1)
    }
    //if we had an odd length left or right
    if(left.length === 0) {
      mergedList.splice(mergedList.length, 0, ...right)
      right = []
    } else if (right.length === 0) {
      mergedList.splice(mergedList.length, 0, ...left)
      left = []
    }
  }
  return mergedList
}


const answer = mergeSort(numbers);
console.log(answer);
