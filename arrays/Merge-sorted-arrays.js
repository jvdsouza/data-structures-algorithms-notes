//Merge two arrays and have the array sorted

const arrayCombineAndSort = (arr1, arr2) => {
  if (arr1.length === 0){
    return arr2
  }
  if (arr2.length ===0){
    return arr1
  }
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    'not good'
  }

  const combinedArray = []
  for (i=0; i<arr1.length; i++) {
    combinedArray.push(arr1[i])
  }
  for (j=0; j<arr2.length; j++) {
    combinedArray.push(arr2[j])
  }

  return combinedArray.sort((a,b) => a-b)
}

console.log(arrayCombineAndSort([0,3,4,31], [4,6,30]))
