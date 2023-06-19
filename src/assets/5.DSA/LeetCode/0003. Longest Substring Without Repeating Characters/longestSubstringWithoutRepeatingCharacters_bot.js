// Instructions: Given a string, find the length of the longest substring without repeating characters.",



var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let ans = 0;
  let map = new Map();
  for (let j = 0, i = 0; j < n; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]), i);
    }
    ans = Math.max(ans, j - i + 1);
    map.set(s[j], j + 1);
  }
  return ans;
};  

console.log(lengthOfLongestSubstring("abcabcdbb")); // 4
