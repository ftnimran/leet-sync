/**
 * @param {number} x
 * @param {number} y
 * @returns {boolean}
 */
class Solution {
  isPower(x, y) {
    if (x === 1) {
      return y === 1;
    }

    let currentPower = 1;

    while (currentPower < y) {
      currentPower *= x;
    }

    return currentPower === y;
  }
}
