class Solution {
  huffmanCodes(s, f) {
    let n = s.length;

    class Node {
      constructor(freq, char, left = null, right = null, idx = 0) {
        this.freq = freq;
        this.char = char;
        this.left = left;
        this.right = right;
        this.idx = idx;
      }
    }

    let heap = [];

    for (let i = 0; i < n; i++) {
      heap.push(new Node(f[i], s[i], null, null, i));
    }

    heap.sort((a, b) => {
      if (a.freq === b.freq) return a.idx - b.idx;
      return a.freq - b.freq;
    });

    while (heap.length > 1) {
      let left = heap.shift();
      let right = heap.shift();

      let merged = new Node(
        left.freq + right.freq,
        null,
        left,
        right,
        Math.min(left.idx, right.idx),
      );

      heap.push(merged);

      heap.sort((a, b) => {
        if (a.freq === b.freq) return a.idx - b.idx;
        return a.freq - b.freq;
      });
    }

    let root = heap[0];
    let result = [];

    function dfs(node, code) {
      if (!node) return;

      if (node.char !== null) {
        result.push(code.length === 0 ? "0" : code);
        return;
      }

      dfs(node.left, code + "0");
      dfs(node.right, code + "1");
    }

    dfs(root, "");

    return result;
  }
}
