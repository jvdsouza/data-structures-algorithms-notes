//Google question
//Find the first recurring value
//Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]:
//It should return 2

//Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]:
//It should return 1

//Given an array = [2, 3, 4, 5]:
//It should return undefined

const hash = (value, length) =>{
  if (typeof value !== 'number'){
    return "the item is not a number"
  }
  return value % length
}

const firstReccur = (array) => {
  let seenList = {};
  arrayLength = array.length

  for(let i=0; i<array.length; i++){
    hashVal = hash(array[i], arrayLength)
    if (seenList[hashVal]) {
      return array[i];
    } else {
      seenList[hashVal] = array[i]
    }
  }
  return undefined
}

//tests
console.log(firstReccur([2, 5, 1, 2, 3, 5, 1, 2, 4])===2);
console.log(firstReccur([2, 5, 5, 1, 2, 3, 5, 1, 2, 4])===5);
console.log(firstReccur([2, 1, 1, 2, 3, 5, 1, 2, 4])===1);
console.log(firstReccur([2, 3, 4, 5])===undefined);
