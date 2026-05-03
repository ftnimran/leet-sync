class Solution {
  countBits(num) {
    if (num === 0) {
      return 0;
    }

    return (num & 1) + this.countBits(num >> 1);
  }

  sortBySetBitCount(arr) {
    arr.sort((a, b) => {
      return this.countBits(b) - this.countBits(a);
    });

    return arr;
  }
}
