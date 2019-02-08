const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {

  start = 0 //where we want to start at each iteration
  arrayLen = array.length //to reduce time spent calculating the length of the array

  while(start !== arrayLen-1){ //while the unsorted section of the list is > 1 length
    minVal = array[start] //the smallest value in the remaining unsorted section
    minLoc = start //location of the minimum value in the array

    for(let i=start+1; i<arrayLen; i++){ //iterate through the whole unsorted
                                         //section of the array
      if(array[i] < minVal){ //if we find a smaller value than what we have
        minVal = array[i] //mark it as the new smallest value
        minLoc = i //remember its location
      }
    }

    temp = array[start] //store the first unsorted element in a temp variable
    array[start] = minVal //swap the smallest value to the start of the
                          //unsorted section of the array
    array[minLoc] = temp //swap the intial first value of the unsorted section
                         //to the location of the minimum value
    start += 1 //move the indicator to the next position so we only sort through
               //the unsorted section of the array
  }
  return array //return the array after it's sorted
}

//test to see if it's sorted by value
console.log(selectionSort(numbers) === numbers.sort((a, b) => a-b));
