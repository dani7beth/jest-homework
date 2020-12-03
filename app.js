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
export const someNumbersAreOdd = (numberArray) => {
  // grab odds and see if the size of array is one or larger 
  let odds = numberArray.filter(number => number%2 !== 0);
  return odds.length > 0 ? true : false;
};

//  return array double and even
// evensOnlyAndDoubleArray(numberArray) // => [4,8]; // use map and filter
export const evensOnlyAndDoubleArray = (numberArray) => {
  let evens = numberArray.filter(number => number%2 === 0);
  return evens.map(number => number * 2);
};

//  find an item method return 'not found' if not found
// findItem(numberArray, 1) //=> 1
export const findItem = (numberArray, number) => {
  return numberArray.includes(number);
}

// sort array desc order
// sortArray(numberArray) //=> [4,3,2,1] *desc*
export const sortArray = (numberArray) => {
  return numberArray.sort().reverse();
};

// -----BONUS------
// ARRAY ITERATOR METHODS ON Objects with name age 



// // doubles likes of artist
// doubleLikes(artists)
// // => [
// //   {name: 'a', likes:200},
// //   {name: 'b', likes:198},
// //   {name: 'c', likes:202},  
// // ]; 
export const doubleLikes = (artists) => {
  return artists.map(artist => artist.likes * 2);
};

// moreThan100Likes(artists)// =>[ {name: 'c', likes:101} ]; // use filter
export const moreThan100Likes = (artists) => {
  return artists.filter(artist => artist.likes > 100);
}


// //  return an array of strings of artist name
// justArtistMoreThan100Likes(artists) //=> ['c']; // use filter
export const justArtistMoreThan100Likes = (artists) => {
  //first filter to grab all that are above 100 then map and get just the names
  return artists.filter(artist => artist.likes > 100).map(artist => artist.name);
};

// // get total number of likes fo all artists
// numberOfLikes(artists) //=> 300; // get all likes
export const numberOfLikes = (artists) => {
  return artists.map(artists => artists.likes).reduce((sum, like) => sum + like);
};

// // find an item method. Returns 'not found' if not found
// findObjByName(artists, 'a') // => {name: 'a', likes:200}
// export const findObjByName = (artists, artistName) => {
//    artists.forEach((artist) => {
//     if(artist.name === artistName){
//       return artist;
//     }else{
//       return "not found"; 
//     }
//   });
// };

// // returns array of artist sorted by likes
// sortArtistByName(artists)