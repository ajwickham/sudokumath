import SudArray from './../src/main';

describe('Creating and testing grid', () => {

  test('should correctly create a arraySudoku object from inputNumber', () => {
    const arraySudoku = new SudArray(2);
    expect(arraySudoku.first).toEqual(2);
  });
  test('should correctly create a arraySudoku object from inputNumbers', () => {
    const arraySudoku = new SudArray(1,2,3,4,5,6,7,8,9);
    expect(arraySudoku.first).toEqual(1);
    expect(arraySudoku.second).toEqual(2);
    expect(arraySudoku.third).toEqual(3);
    expect(arraySudoku.fourth).toEqual(4);
    expect(arraySudoku.fifth).toEqual(5);
    expect(arraySudoku.sixth).toEqual(6);
    expect(arraySudoku.seventh).toEqual(7);
    expect(arraySudoku.eighth).toEqual(8);
    expect(arraySudoku.nineth).toEqual(9);
  });
  test('should correctly create push 5th value into arraySudoku', () => {
    const testArray = new SudArray([1,2,3,4,5,6,7,8,9])
    expect(testArray.pushIntoArray(5)).toEqual([1,2,3,4,5,1,7,8,9]);
  });
  test('should correctly find the next blank', () => {
    const testArray = new SudArray([1,2,0,4,5,6,7,8,9])
    expect(testArray.findNextBlank()).toEqual(2);
  });
})