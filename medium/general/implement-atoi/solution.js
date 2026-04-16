class Solution {
  myAtoi(s) {
    let i = 0,
      n = s.length;

    while (i < n && s[i] === " ") i++;

    let sign = 1;
    if (i < n && (s[i] === "+" || s[i] === "-")) {
      if (s[i] === "-") sign = -1;
      i++;
    }

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    function solve(idx, currentRes) {
      if (idx >= n) return currentRes;

      let ch = s[idx];
      if (ch < "0" || ch > "9") return currentRes;

      let digit = ch.charCodeAt(0) - 48;

      if (sign === 1) {
        if (
          currentRes > Math.floor(INT_MAX / 10) ||
          (currentRes === Math.floor(INT_MAX / 10) && digit > 7)
        ) {
          return INT_MAX;
        }
      } else {
        if (
          currentRes > Math.floor(Math.abs(INT_MIN) / 10) ||
          (currentRes === Math.floor(Math.abs(INT_MIN) / 10) && digit >= 8)
        ) {
          return INT_MIN;
        }
      }

      return solve(idx + 1, currentRes * 10 + digit);
    }

    let ans = solve(i, 0);

    if (ans === INT_MIN) return INT_MIN;
    if (ans === INT_MAX && sign === 1) return INT_MAX;

    return ans * sign;
  }
}
