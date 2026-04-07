/**
 * @param {number[][]} men
 * @param {number[][]} women
 * @returns {number[]}
 */
class Solution {
  stableMarriage(men, women) {
    let n = men.length;

    let wife = new Array(n).fill(-1);
    let husband = new Array(n).fill(-1);
    let next = new Array(n).fill(0);

    let rank = Array.from({ length: n }, () => new Array(n));

    for (let w = 0; w < n; w++) {
      for (let i = 0; i < n; i++) {
        rank[w][women[w][i]] = i;
      }
    }

    function solve() {
      let m = -1;
      for (let i = 0; i < n; i++) {
        if (husband[i] === -1 && next[i] < n) {
          m = i;
          break;
        }
      }

      if (m === -1) return;

      let w = men[m][next[m]];
      next[m]++;

      if (wife[w] === -1) {
        wife[w] = m;
        husband[m] = w;
      } else {
        let m1 = wife[w];

        if (rank[w][m] < rank[w][m1]) {
          wife[w] = m;
          husband[m] = w;
          husband[m1] = -1;
        }
      }

      solve();
    }

    solve();

    return husband;
  }
}
