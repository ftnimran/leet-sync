class Solution {
  intersection(a, b) {
    let i = 0,
      j = 0;
    let n = a.length,
      m = b.length;
    let result = [];

    while (i < n && j < m) {
      if (a[i] === b[j]) {
        // avoid duplicates
        if (result.length === 0 || result[result.length - 1] !== a[i]) {
          result.push(a[i]);
        }
        i++;
        j++;
      } else if (a[i] < b[j]) {
        i++;
      } else {
        j++;
      }
    }

    return result;
  }
}
