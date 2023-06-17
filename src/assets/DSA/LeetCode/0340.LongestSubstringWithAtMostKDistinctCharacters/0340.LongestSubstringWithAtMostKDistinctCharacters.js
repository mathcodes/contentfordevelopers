var lengthOfLongestSubstringKDistinct = function(s, k) {
  // SETUP VARIABLES
  let START = 0;
  const SOFAR = new Map();
  let MAX = 0;

  // ITERATE OVER s, our string, set END = 0
  for (let END = 0; END < s.length; END++){
    // pull out our rightCHAR
    let rightCHAR = s[END];

    // if our Map does not containt the rightCHAR, then we want to set it to 1
    if(!SOFAR.get(rightCHAR)) SOFAR.set(rightCHAR, 1);
    // if it does containt the rightCHAR, then we want ot increment it by 1
    else SOFAR.set(rightCHAR, SOFAR.get(rightCHAR) + 1);

    // NOW check the size (# of keys we have in SOFAR) and while it is > k
    // THEN we have to decrement the START and move it to the right one
    while(SOFAR.size > k) {
      // so lets get our leftCHAR which = s[START]
      let leftCHAR = s[START];

      //SO IF > 1 leftCHAR we want to decrement (or DELETE) followed by increment our window START
      if(SOFAR.get(leftCHAR) > 1) SOFAR.set(leftCHAR, SOFAR.get(leftCHAR) - 1);
      else SOFAR.delete(leftCHAR);

      START++;
    }
    // calculate MAX using Math.max
    MAX = Math.max(MAX, (END - START) + 1)
  }
  // return MAX
  return MAX;
}
