/*
Definition for Node
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
  isSame(a, b) {
    if (!a && !b) return true;

    if (!a || !b || a.data !== b.data) {
      return false;
    }

    return this.isSame(a.left, b.left) && this.isSame(a.right, b.right);
  }

  isSubTree(root1, root2) {
    if (!root2) return true;

    if (!root1) return false;

    if (this.isSame(root1, root2)) {
      return true;
    }

    return (
      this.isSubTree(root1.left, root2) || this.isSubTree(root1.right, root2)
    );
  }
}
