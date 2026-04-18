/**
 * @param number[] arr
 * @returns number
 */
class Solution {
  maxOnes(arr) {
    let totalOnes = 0;
    let maxGain = 0;
    let currentGain = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) totalOnes++;

      let val = arr[i] === 0 ? 1 : -1;

      currentGain = Math.max(val, currentGain + val);
      maxGain = Math.max(maxGain, currentGain);
    }

    return totalOnes + maxGain;
  }
}
