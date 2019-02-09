const numbers = [99, 44, 6, 2, 1, 5, 44, 63, 87, 44, 283, 4, 0];
//insertion sort is going to the next value on the right
//and finding where it fits in the left
function insertionSort(array) {
  arrayLen = array.length
  for (let i=1; i<arrayLen; i++){
    if(array[i] < array[0]) {
      array.unshift(...array.splice(i,1))
    }
    for (let j=0; j<i; j++){
      if (array[i] < array[j] && array[i] >= array[j-1]){
          array.splice(j, 0, ...array.splice(i, 1))
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
