import SudArray from './../src/main';

describe('Creating and testing grid', () => {

  test('should correctly create a arraySudoku object from inputNumber', () => {
    const arraySudoku = new SudArray(2);
    expect(arraySudoku.grid).toEqual(2);
  });
  test('should correctly create a arraySudoku object from inputNumbers', () => {
    const arraySudoku = new SudArray([1,2,3,4,5,6,7,8,9]);
    expect(arraySudoku.grid).toEqual[1,2,3,4,5,6,7,8,9];
  });
  test('should correctly find all the blanks', () => {
    const testArray = new SudArray([1,2,0,4,0,6,7,8,9,0])
    expect(testArray.findNextBlank()).toEqual([2,4,9]);
  });
  test('should identify the position of the first number to try', () => {
    const testArray = new SudArray([1,2,0,4,5,6,7,8,9,1])
    expect(testArray.findNumberToTry()).toEqual([2]);
  });
  test('should identify the lowest missing number missing from a row', () => {
    const testArray = new SudArray([9,2,1,4,5,6,7,4])
    expect(testArray.checkRow(2)).toEqual(3);
  });
})