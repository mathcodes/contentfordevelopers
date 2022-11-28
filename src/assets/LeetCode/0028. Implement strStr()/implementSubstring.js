var strStr = function(haystack, needle) {
  // edge case
  if(needle==="") return 0
  // stopping point for loop needs to be so that needle fits into the remaining part of the haystack, so we make the stopping point haystack.length-needle
  for(let i=0; i <= haystack.length-needle.length;i++){
      //check if we match
      let j=0
      for (j;j<needle.length;j++){
          if(needle[j]!==haystack[i+j]) break
      }
      // if match return i
      if(j==needle.length) return i
  }
  return -1
};