/**
 * @param {string[]} strs
 * @return {string}
 */
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
var longestCommonPrefix = function (strs) {
  let ans = strs[0],
    res = "";
  for (let i = 1; i < strs.length; i++) {
    // flower","flow","flight"
    for (let j = 0; j < ans.length; j++) {
      if (strs[i][j] == ans[j]) {
        res += ans[j];
      } else {
        break;
      }
    }
    ans = res;
    res = "";
  }
  return ans;
};
// strs = ["flower", "flow", "flight"];
strs = ["cir","car"];
console.log(longestCommonPrefix(strs));
// problem url :https://leetcode.com/problems/longest-common-prefix/description/