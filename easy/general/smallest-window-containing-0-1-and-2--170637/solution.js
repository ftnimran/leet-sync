/**
 * @param {string} s
 * @returns {number}
 */
class Solution {
  smallestSubstring(s) {
    const solve = (idx, l0, l1, l2, minLen) => {
      if (idx === s.length) return minLen === Infinity ? -1 : minLen;

      if (s[idx] === "0") l0 = idx;
      else if (s[idx] === "1") l1 = idx;
      else if (s[idx] === "2") l2 = idx;

      if (l0 !== -1 && l1 !== -1 && l2 !== -1) {
        let start = Math.min(l0, l1, l2);
        minLen = Math.min(minLen, idx - start + 1);
        if (minLen === 3) return 3;
      }

      return solve(idx + 1, l0, l1, l2, minLen);
    };

    return solve(0, -1, -1, -1, Infinity);
  }
}
