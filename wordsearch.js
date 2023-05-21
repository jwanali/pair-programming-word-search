const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
         }
     }
    const vertical = transpose(horizontalJoin);
     for (l of  vertical) {
        if (l.includes(word)) {
            return true
         }
     }
     return false
    

}
const transpose = function (matrix) {
     let finalMatrix = [];
    for (let y = 0; y < matrix[0].length; y++) {
      let newArray = [];
      for (let i = 0; i < matrix.length; i++) {
        newArray.push(matrix[i][y]);
      }
      finalMatrix.push(newArray);
    }
    matrix = finalMatrix;
    return matrix;
  };
module.exports = wordSearch