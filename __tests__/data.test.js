import SudArray from './../src/main';

describe('Creatingcd and testing grid', () => {

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
    expect(testArray.findBlanks()).toEqual([2,4,9]);
  });
 test('should identify the lowest missing number missing from a row', () => {
    const testArray = new SudArray([9,0,1,4,5,6,7,4])
    expect(testArray.checkRow(2,1)).toEqual(2);
  });
  test('should identify the lowest missing number missing from a column', () => {
    const testArray = new SudArray([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,4,3,3,])
    expect(testArray.checkColumn(2,1)).toEqual(3);
  });
  test('should find the blank and check for the lowest missing number in that row. It should then check the column and return the next lowest number in the column', () => {
    const testArray = new SudArray([1,2,0,5,5,6,7,8,9,1,2,3,4,5,6,7,8,9])
    expect(testArray.findNumberToTry()).toEqual([[2,4]]);
  });
  test('should find the blank and check for the lowest missing number in that row. It should then check the column and return the next lowest number in the column. It should check that number in the row and then in the column until it finds an answer', () => {
    const testArray = new SudArray([1,2,0,4,7,7,7,8,9,1,2,3,4,5,6,7,8,9,1,2,5,4,5,6,7,8,9])
    expect(testArray.findNumberToTry()).toEqual([[2,6]]);
  });
  test('should correctly create a arraySudoku object from inputNumber', () => {
    const arraySudoku = new SudArray(2,[0,1]);
    expect(arraySudoku.solution).toEqual([0,1]);
  });
  test('should store result numbers in an array', () => {
    const testArray = new SudArray([1,2,0,4,7,7,7,8,9,1,2,3,4,5,6,7,8,9,1,2,5,4,5,6,7,8,9],[])
    expect(testArray.buildSolution()).toEqual([[[2,6]]]);
  });
})