/**
 * @param {number} n
 * @returns {number[]}
 */
class Solution {
  graycode(n) {
    if (n === 1) return ["0", "1"];

    let prev = this.graycode(n - 1);
    let result = [];

    for (let code of prev) result.push("0" + code);
    for (let i = prev.length - 1; i >= 0; i--) {
      result.push("1" + prev[i]);
    }

    return result;
  }
}
