var lengthOfLongestSubstring = function (s) {
  let used = [];
  let currSubStr = "";
  let biggestSubString = "";

  for (let i = 0; i < s.length; i++) { // for loop to itereate through the string
    if (used[s[i]] === undefined) {// 1. This code checks if the current letter of the string is undefined
      used[s[i]] = true; // 2. If it is, it sets the value of used[s[i]] to true
      currSubStr += `${s[i]}`; // 3. Then it adds the current letter to the currentSubstring variable
    } else {
      if (currSubStr.length > biggestSubString.length) { // 4. This code checks if the length of the currentSubstring is greater than the length of the biggestSubString
       biggestSubString = currSubStr;// 5. If it is, then the biggestSubString is set to the currentSubstring
      }
      const firstApp = currSubStr.indexOf(s[i]); // 6. This code takes a string, and finds the first appearance of a letter in the string
      currSubStr = currSubStr.substring(firstApp + 1); // 7. It then takes the substring of the string, starting at the index of the first appearance of the letter
      currSubStr += `${s[i]}`; // 8. 
    }
  }
  if (currSubStr.length > biggestSubString.length) // 9. This code checks if the length of the currentSubstring is greater than the length of the biggestSubString
   biggestSubString = currSubStr; // 10. 
  return biggestSubString.length; // 11. This returns the length of the biggestSubString
};

console.log(lengthOfLongestSubstring("abcabcdbb"));
lengthOfLongestSubstring("abcabcdbb");