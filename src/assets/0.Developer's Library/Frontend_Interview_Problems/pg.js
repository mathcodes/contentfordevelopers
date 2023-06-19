var lengthOfLongestSubstringKDistinct = function(s, k) {
  let START = 0;
  let stringMAP = new Map();
  let MAX = 0;

  for(let END = 0; END < s.length; END++){
    let rightCHAR = s[END]

    if(!stringMAP.get(rightCHAR)) stringMAP.set(rightCHAR, 1);
    else stringMAP.get(rightCHAR, stringMAP.get(rightCHAR)+1);

    while (stringMAP.size > k) {
      let leftCHAR = s[START];

      if(stringMAP.get(leftCHAR) > 1) stringMAP.set(leftCHAR, stringMAP.get(leftCHAR) -1);
      else stringMAP.delete(leftCHAR);

      START++;
    }
    MAX = Math.max(MAX, (END - START) + 1)
  }
  return MAX
}


var sortedSquares = function(nums) {
  // SETUP VARIABLES 
  // result array with same length, all zeros
  const result = new Array(nums.length).fill(0);
  let RIGHT = nums.length - 1;
  let LEFT = 0;
  let resultIndex = nums.length - 1;

  // WHILE LOOP
  // check while left is <= right we have to check which is bigger
  // the set values for leftVal and rightVal = the squared values
  while (LEFT <= RIGHT) {
    let leftVal = Math.pow(nums[LEFT], 2);
    let rightVal = Math.pow(nums[RIGHT], 2);
    // IF ELSE STATEMENT 
    // Then as long as leftVal < rightVal, the resultIndex = rightVal, 
    // otherwise = leftVal
    if (leftVal < rightVal) {
      result[resultIndex] = rightVal;
      RIGHT--;
    } else {
      result[resultIndex] = leftVal;
      LEFT++;
    }
    // decremeent resultIndex and return
    resultIndex--;
  }
  // RETURN 
  return result;
}

var sortedSquares = function(nums) {
    // SETUP VARIABLES 
  // result array with same length, all zeros
  const result = new Array(nums.length).fill(0);
  let right = nums.length - 1;
  let left = 0;
  let resultIndex = nums.length - 1;

  // WHILE LOOP
  while(left <= right){
    left leftValue = Math.pow(nums[left], 2)
    left rightValue = Math.pow(nums[right], 2)

    if (leftValue < rightValue){
      result[resultIndex]
    }
  }
  // check while left is <= right we have to check which is bigger
  // the set values for leftVal and rightVal = the squared values
    // IF ELSE STATEMENT 
    // Then as long as leftVal < rightVal, the resultIndex = rightVal, 
    // otherwise = leftVal

    // decremeent resultIndex and return
  // RETURN 
}