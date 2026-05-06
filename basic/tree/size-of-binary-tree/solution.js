/*
Definition for Node
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
/**
 * @param Node root
 * @returns number
 */
class Solution {
  getSize(root) {
    if (root === null) return 0;

    return 1 + this.getSize(root.left) + this.getSize(root.right);
  }
}
