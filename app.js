export const originalArray = (arr) =>{
  return arr
}

// ARRAY ITERATOR METHODS
// numberArray = [1,2,3,4]


//return array with doulbe values in array
//numberArray = [1,2,3,4] => [2,4,6,8]
export const doubleArray = (numberArray) => {
  return numberArray.map(num =>{
   return num * 2;
  })
};


// return array with all even numbers
// evensOnlyArray(numberArray) // => [2,4];  hint use filter 
export const evensOnlyArray = (numberArray) => {
  return numberArray.filter((number) => number%2 === 0);
};

// return array with sum of numbers
// arraySum(numberArray) // => 10;  hint use reduce
export const arraySum = (numberArray) => {
  return numberArray.reduce((sum, number) => sum + number);
};

// return true if every item greater than 0
// allNumbersGreaterThanZero(numberArray) // => true; use every
export const allNumbersGreaterThanZero = (numberArray) => { 
   return numberArray.every(number =>  number > 0);
};

//  return true if one or more items in array are odd
// someNumbersAreOdd(numberArray) // => true; use some

//  return array double and even
// evensOnlyAndDoubleArray(numberArray) // => [4,8]; // use map and filter

//  find an item method return 'not found' if not found
// findItem(numberArray, 1) //=> 1

// sort array desc order
// sortArray(numberArray) //=> [4,3,2,1] *desc*