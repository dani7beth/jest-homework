import {
  // methods,
  // methods,
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero
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