/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

class Solution {
  longestSubstr(s, k) {
    let n = s.length;
    const counts = new Int32Array(26);
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for (let right = 0; right < n; right++) {
      const charIdx = s.charCodeAt(right) - 65;
      counts[charIdx]++;

      if (counts[charIdx] > maxFreq) {
        maxFreq = counts[charIdx];
      }

      if (right - left + 1 - maxFreq > k) {
        counts[s.charCodeAt(left) - 65]--;
        left++;
      }

      maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
  }
}
