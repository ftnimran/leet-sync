class Solution {
  makeBeautiful(arr) {
    const st = [];

    for (let x of arr) {
      if (
        st.length &&
        ((st[st.length - 1] >= 0 && x < 0) || (st[st.length - 1] < 0 && x >= 0))
      ) {
        st.pop();
      } else {
        st.push(x);
      }
    }

    return st;
  }
}
