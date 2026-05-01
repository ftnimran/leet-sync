/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */

class Solution {
  kthLargest(arr, k) {
    let n = arr.length;
    let result = new Array(n);
    let minHeap = new Int32Array(k);
    let size = 0;

    for (let i = 0; i < n; i++) {
      let val = arr[i];

      if (size < k) {
        minHeap[size] = val;
        let curr = size;
        while (curr > 0) {
          let parent = (curr - 1) >> 1;
          if (minHeap[parent] <= minHeap[curr]) break;
          let temp = minHeap[parent];
          minHeap[parent] = minHeap[curr];
          minHeap[curr] = temp;
          curr = parent;
        }
        size++;
      } else if (val > minHeap[0]) {
        minHeap[0] = val;
        let curr = 0;
        while (true) {
          let left = (curr << 1) + 1;
          let right = (curr << 1) + 2;
          let smallest = curr;

          if (left < k && minHeap[left] < minHeap[smallest]) smallest = left;
          if (right < k && minHeap[right] < minHeap[smallest]) smallest = right;

          if (smallest === curr) break;

          let temp = minHeap[curr];
          minHeap[curr] = minHeap[smallest];
          minHeap[smallest] = temp;
          curr = smallest;
        }
      }

      result[i] = size < k ? -1 : minHeap[0];
    }

    return result;
  }
}
