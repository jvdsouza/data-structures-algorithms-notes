//an elementary sort
//simple basic sorting algorithms that you would do off the top of your head

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  arrayLen = array.length
  while(arrayLen > 0) {
    for(let i=0; i<arrayLen-1; i++){
      if (array[i] > array[i+1]) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
      }
    }
    arrayLen--;
  }
}

bubbleSort(numbers);
console.log(numbers);
