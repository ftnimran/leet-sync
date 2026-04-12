/**
 * @param {number[][]} mat
 * @return {boolean}
 */
class Solution {
  searchMatrix(mat) {
    let n = mat.length;
    let m = mat[0].length;

    function checkDiagonal(i, j, val) {
      if (i >= n || j >= m) return true;

      if (mat[i][j] !== val) return false;

      return checkDiagonal(i + 1, j + 1, val);
    }

    for (let j = 0; j < m; j++) {
      if (!checkDiagonal(0, j, mat[0][j])) return false;
    }

    for (let i = 1; i < n; i++) {
      if (!checkDiagonal(i, 0, mat[i][0])) return false;
    }

    return true;
  }
}
