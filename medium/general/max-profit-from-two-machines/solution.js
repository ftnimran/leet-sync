/**
 * @param {number} x
 * @param {number} y
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */

class Solution {
  maxProfit(x, y, a, b) {
    let tasks = [];

    for (let i = 0; i < a.length; i++) {
      tasks.push([Math.abs(a[i] - b[i]), a[i], b[i]]);
    }

    tasks.sort((p, q) => q[0] - p[0]);

    let profit = 0;

    for (let [diff, pa, pb] of tasks) {
      if ((pa >= pb && x > 0) || y === 0) {
        profit += pa;
        x--;
      } else {
        profit += pb;
        y--;
      }
    }

    return profit;
  }
}
