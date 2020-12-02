import {
  // methods,
  // methods,
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray
} from '../app'

// hint of look in before_each before_all
describe('originalArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  });
});

describe('doubleArray Test', ()=> {
  test('doubleArray should return values doubled', ()=>{
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8]);
  });
});

describe('evensOnlyArray Test', ()=> {
  test('evensOnlyArray should return only even values', ()=>{
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4]);
  });
});

describe('arraySum Test', ()=> {
  test('arraySum should return all values added together', ()=>{
    expect(arraySum([1,2,3,4])).toEqual(10);
  });
});

describe('allNumbersGreaterThanZero Test', ()=> {
  test('allNumbersGreaterThanZero should return true : false if all elements are greater than zero', ()=>{
    expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual(true);
  });
});

describe('someNumbersAreOdd Test', ()=> {
  test('someNumbersAreOdd should return true : false if there is 1 or more odds in array', ()=>{
    expect(someNumbersAreOdd([1,2,3,4])).toEqual(true);
  });
});

describe('evensOnlyAndDoubleArray Test', ()=> {
  test('evensOnlyAndDoubleArray should return an array of the evens doubled', ()=>{
    expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8]);
  });
});

describe('findItem Test', ()=> {
  test('findItem should return true : false if an item is found in an array', ()=>{
    expect(findItem([1,2,3,4], 2)).toEqual(true);
  });
});

describe('find random item Test', ()=> {
  test('find random item should return true : false if an item is found in an array', ()=>{
    let array = [1,2,3,4];
    let randNumFromArray = array[Math.floor(Math.random() * array.length)];
    expect(findItem(array, randNumFromArray)).toEqual(true);
  });
});

describe('sortArray Test', ()=> {
  test('sortArray should return the given array in descending order', ()=>{
    expect(sortArray([1,2,3,4])).toEqual([4,3,2,1]);
  });
});