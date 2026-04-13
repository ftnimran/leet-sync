class Solution {
  nextPalindrome(num) {
    let n = num.length;

    let all9 = true;
    for (let i = 0; i < n; i++) {
      if (num[i] !== 9) {
        all9 = false;
        break;
      }
    }

    if (all9) {
      let res = new Array(n + 1).fill(0);
      res[0] = 1;
      res[n] = 1;
      return res;
    }

    let res = [...num];

    let i = Math.floor(n / 2) - 1;
    let j = n % 2 === 0 ? Math.floor(n / 2) : Math.floor(n / 2) + 1;

    while (i >= 0 && res[i] === res[j]) {
      i--;
      j++;
    }

    let leftSmaller = false;
    if (i < 0 || res[i] < res[j]) {
      leftSmaller = true;
    }

    while (i >= 0) {
      res[j] = res[i];
      i--;
      j++;
    }

    if (leftSmaller) {
      let carry = 1;

      i = Math.floor(n / 2) - 1;

      if (n % 2 === 1) {
        let mid = Math.floor(n / 2);
        res[mid] += 1;
        carry = Math.floor(res[mid] / 10);
        res[mid] %= 10;
        j = mid + 1;
      } else {
        j = Math.floor(n / 2);
      }

      while (i >= 0 && carry > 0) {
        res[i] += carry;
        carry = Math.floor(res[i] / 10);
        res[i] %= 10;

        res[j] = res[i];
        i--;
        j++;
      }
    }

    return res;
  }
}
