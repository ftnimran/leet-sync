/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */

class Solution {
  gcd(a, b) {
    while (b !== 0) {
      let t = a % b;
      a = b;
      b = t;
    }

    return a;
  }

  lcm(a, b) {
    return (a / this.gcd(a, b)) * b;
  }

  build(node, start, end, arr, tree) {
    if (start === end) {
      tree[node] = arr[start];
      return;
    }

    let mid = (start + end) >> 1;

    this.build(node * 2, start, mid, arr, tree);

    this.build(node * 2 + 1, mid + 1, end, arr, tree);

    tree[node] = this.lcm(tree[node * 2], tree[node * 2 + 1]);
  }

  update(node, start, end, idx, val, tree) {
    if (start === end) {
      tree[node] = val;
      return;
    }

    let mid = (start + end) >> 1;

    if (idx <= mid) {
      this.update(node * 2, start, mid, idx, val, tree);
    } else {
      this.update(node * 2 + 1, mid + 1, end, idx, val, tree);
    }

    tree[node] = this.lcm(tree[node * 2], tree[node * 2 + 1]);
  }

  query(node, start, end, l, r, tree) {
    if (r < start || end < l) {
      return 1;
    }

    if (l <= start && end <= r) {
      return tree[node];
    }

    let mid = (start + end) >> 1;

    let left = this.query(node * 2, start, mid, l, r, tree);

    let right = this.query(node * 2 + 1, mid + 1, end, l, r, tree);

    return this.lcm(left, right);
  }

  RangeLCMQuery(arr, queries) {
    let n = arr.length;

    let tree = Array(4 * n).fill(1);

    this.build(1, 0, n - 1, arr, tree);

    let ans = [];

    for (let q of queries) {
      if (q[0] === 1) {
        this.update(1, 0, n - 1, q[1], q[2], tree);
      } else {
        ans.push(this.query(1, 0, n - 1, q[1], q[2], tree));
      }
    }

    return ans;
  }
}
