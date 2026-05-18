/**
 * @param {number} n
 * @return {number}
 */

class Solution {
  constructor() {
    this.memo = new Map();
  }

  solve(n) {
    if (n <= 1) return n;

    if (this.memo.has(n)) return this.memo.get(n);

    const ans = Math.max(
      n,
      this.solve(Math.floor(n / 2)) +
        this.solve(Math.floor(n / 3)) +
        this.solve(Math.floor(n / 4)),
    );

    this.memo.set(n, ans);

    return ans;
  }

  maxSum(n) {
    return this.solve(n);
  }
}
