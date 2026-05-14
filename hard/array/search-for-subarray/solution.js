/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */

class Solution {
  buildLPS(p) {
    const lps = new Array(p.length).fill(0);

    for (let i = 1, len = 0; i < p.length; ) {
      if (p[i] === p[len]) {
        lps[i++] = ++len;
      } else if (len) {
        len = lps[len - 1];
      } else {
        i++;
      }
    }

    return lps;
  }

  search(a, b) {
    const lps = this.buildLPS(b);

    const ans = [];

    for (let i = 0, j = 0; i < a.length; ) {
      if (a[i] === b[j]) {
        i++;
        j++;
      }

      if (j === b.length) {
        ans.push(i - j);

        j = lps[j - 1];
      } else if (i < a.length && a[i] !== b[j]) {
        if (j) {
          j = lps[j - 1];
        } else {
          i++;
        }
      }
    }

    return ans;
  }
}
