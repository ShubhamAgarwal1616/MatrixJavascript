import { Matrix } from './matrix';

describe('Matrix', () => {
  test('extract first row from a matrix', () => {
    expect(Matrix('1').rows(0)).toEqual([1]);
  });

  test('extract second row of a matrix', () => {
    expect(Matrix('1 2\n3 4').rows(1)).toEqual([3, 4]);
  });

  test('extract another row from a matrix', () => {
    expect(Matrix('1 2\n10 20').rows(1)).toEqual([10, 20]);
  });

  test('extract row from non-square matrix', () => {
    expect(Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6').rows(2)).toEqual([7, 8, 9]);
  });

  test('extract first column from a matrix', () => {
    expect(Matrix('1').columns(0)).toEqual(([1]));
  });

  test('extract second column from a matrix', () => {
    expect(Matrix('1 2 3\n4 5 6\n7 8 9').columns(2)).toEqual([3, 6, 9]);
  });

  test('extract column from non-square matrix', () => {
    expect(Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6').columns(2)).toEqual([3, 6, 9, 6]);
  });

  test('extract another column from a matrix', () => {
    expect(Matrix('89 1903 3\n18 3 1\n9 4 800').columns(1)).toEqual([1903, 3, 4]);
  });
});
