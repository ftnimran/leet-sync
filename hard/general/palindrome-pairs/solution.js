class Solution {
  isPalindrome(str, l, r) {
    while (l < r) {
      if (str[l] !== str[r]) {
        return false;
      }

      l++;
      r--;
    }

    return true;
  }

  palindromePair(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
      map.set(arr[i], i);
    }

    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];

      for (let j = 0; j <= word.length; j++) {
        let left = word.slice(0, j);
        let right = word.slice(j);

        // Case 1
        if (this.isPalindrome(left, 0, left.length - 1)) {
          let rev = right.split("").reverse().join("");

          if (map.has(rev) && map.get(rev) !== i) {
            return true;
          }
        }

        // Case 2
        if (right.length > 0 && this.isPalindrome(right, 0, right.length - 1)) {
          let rev = left.split("").reverse().join("");

          if (map.has(rev) && map.get(rev) !== i) {
            return true;
          }
        }
      }
    }

    return false;
  }
}
