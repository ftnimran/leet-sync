/**
 * @param {string}s
 * @returns {string}
 */
class Solution {
  removeSpaces(s) {
    let res = "";
    for (let ch of s) {
      if (ch !== " ") {
        res += ch;
      }
    }
    return res;
  }
}
