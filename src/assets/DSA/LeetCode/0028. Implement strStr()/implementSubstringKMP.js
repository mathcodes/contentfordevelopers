/*
aabaaab
table=[0]

ITERATION 1:
initially i=1 and j=0:
aabaaab
ji
so j+=1 and table[i]=j=1:
table=[0,1]
j=1

ITERATION 2:
i=2 and j=1:
aabaaab
 ji
In this case j > 0 so:
aabaaab
j i       ... not equal and j=o so last option in while loop
table=[0,1,0]
and we increment i
so i=3 and j=0
aabaaab
j  i      .... equal to first option, incr j, add 1 to table and increment i
table=[0,1,0,1]

aabaaab
 j  i      .... equal to first option, incr j, add j(2) to table and increment i
table=[0,1,0,1,2]

aabaaab
  j  i      .... mismatch
  so take the value of table at j-1 = 1
aabaaab
 j   i     ... match after decrementing j, so we incr j, add 2 to table and increment i
 table=[0,1,0,1,2,2]

 LAST ITERATION, j=i so add 3 and we've gone through the entire string
table=[0,1,0,1,2,2,3]
*/


    // let prefixTable = [];
    // prefixTable[0] = 0;
    // for(let i = 1; i < s.length; i++){
    //     let j = prefixTable[i - 1];
    //     while(j > 0 && s[i] != s[j]){
    //         j = prefixTable[j - 1];
    //     }
    //     if(s[i] == s[j]){
    //         j++;
    //     }
    //     prefixTable[i] = j;
    // }
    // return prefixTable;
// }

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//Time complexity = O(n+m) - we take linear time to make the prefix table, and then we take linear time on the order of n to go through while loop
// n = length of haystack
// m = length of needle

// Space complexity O(M) - we need to build up this prefix table which will have its length = length of needle

var strStr = function(haystack, needle){
  if(needle==="") return 0
  const prefixTable=buildPrefixTable(needle)
  let i=0
  let j=0
  while(i<haystack.length&&j<needle.length){
      if (haystack[i]===needle[j]){
          i+=1
          j+=1
      } else if (j>0) {
          j=prefixTable[j-1]
      } else {
          i+=1
      }
  }
  return j===needle.length ? i-j : -1;
};

function buildPrefixTable(s){
const table = [0];
let i = 1 // represents the index of the current character in the string
let j = 0 // length of repeating prefix and suffix
while(i<s.length) { // continues until i reaches the end of the string
  // while inside the loop we care about three cases:
  if(s[i]===s[j]){ // 1) if character at index i is equal to the character at index j
    j+=1; // increment j
    table[i]=j
    i+=1
  } else if (j>0){ // 2) if they do not match and j > 0
    j=table[j-1]
  } else { // 3) if j is 0
    table[i]=0
    i+=1
  }
}
return table;
}