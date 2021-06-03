import SudArray from './../src/main';

describe('Creating and testing grid', () => {

  test('should correctly create a translate object from inputNumber', () => {
    const arraySudoku = new SudArray(2);
    expect(arraySudoku.first).toEqual(2);
  });
})