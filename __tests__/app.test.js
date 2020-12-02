import {
  // methods,
  // methods,
  originalArray,
  doubleArray
} from '../app'

// hint of look in before_each before_all
describe('originalArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

describe('doubleArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8]);
  })
})