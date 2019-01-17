const transposeOfMatrix = (matrix) => matrix[0].map((value, index) => matrix.map(row => row[index]));

export const Matrix = (matrixSequence) => {
  matrixSequence = matrixSequence.split("\n");
  let matrix = matrixSequence.map(element => element.split(' '));
  return {
    rows: (index) => matrix[index].map(element => parseInt(element)),
    columns: (index) => transposeOfMatrix(matrix)[index].map(element => parseInt(element))
  };
};