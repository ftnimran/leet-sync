/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
  countIncreasing(arr) {
    let count = 0;
    let curr = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        curr++;
        count += curr;
      } else {
        curr = 0;
      }
    }

    return count;
  }
}
