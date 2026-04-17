/**
 * @param {string} s
 * @returns {boolean}
 */
class Solution {
  canFormPalindrome(s) {
    let bitmask = 0;
    const aCode = 97;

    for (let i = 0; i < s.length; i++) {
      bitmask ^= 1 << (s.charCodeAt(i) - aCode);
    }

    return (bitmask & (bitmask - 1)) === 0;
  }
}
