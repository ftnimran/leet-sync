/**
 * @param {string} s
 * @returns {string[]}
 */
class Solution {
  isValid(str) {
    let count = 0;

    for (let ch of str) {
      if (ch === "(") {
        count++;
      } else if (ch === ")") {
        count--;

        if (count < 0) {
          return false;
        }
      }
    }

    return count === 0;
  }

  validParenthesis(s) {
    let result = new Set();
    let minRemoved = Infinity;

    const dfs = (str, index, removed) => {
      if (index === str.length) {
        if (this.isValid(str)) {
          if (removed < minRemoved) {
            result = new Set([str]);
            minRemoved = removed;
          } else if (removed === minRemoved) {
            result.add(str);
          }
        }

        return;
      }

      if (str[index] !== "(" && str[index] !== ")") {
        dfs(str, index + 1, removed);
        return;
      }

      dfs(str.slice(0, index) + str.slice(index + 1), index, removed + 1);

      dfs(str, index + 1, removed);
    };

    dfs(s, 0, 0);

    return [...result].sort();
  }
}
