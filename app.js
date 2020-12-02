export const originalArray = (arr) =>{
  return arr
}

//return array with doulbe values in array
//numberArray = [1,2,3,4] => [2,4,6,8]
export const doubleArray = (numberArray) => {
  return numberArray.map(num =>{
   return num * 2;
  })
};