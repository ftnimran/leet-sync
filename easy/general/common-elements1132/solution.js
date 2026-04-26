class Solution {
  commonElements(a, b, c) {
    let i = 0,
      j = 0,
      k = 0;
    let res = [];

    while (i < a.length && j < b.length && k < c.length) {
      if (a[i] === b[j] && b[j] === c[k]) {
        if (res.length === 0 || res[res.length - 1] !== a[i]) {
          res.push(a[i]);
        }
        i++;
        j++;
        k++;
      } else {
        let mn = Math.min(a[i], b[j], c[k]);

        if (a[i] === mn) i++;
        if (b[j] === mn) j++;
        if (c[k] === mn) k++;
      }
    }

    return res;
  }
}
