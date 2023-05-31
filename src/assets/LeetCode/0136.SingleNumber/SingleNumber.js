/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // Initialize a variable 'result' to 0.
  let result = 0
  // Loop through the array 'nums', for each element do the following:
  for (let i = 0;i < nums.length; i ++) {
    console.log("i: ", i)
    console.log("nums[i]: ", nums[i])
    // a. Perform XOR (^) operation between 'result' and the current element 'nums[i]'
    // b. Store the result of the XOR operation in 'result'.
    result ^= nums[i];
    console.log("result ^ nums[i]: ", result ^ nums[i])
    console.log("result: ", result)
  }
  // Return 'result'.
  return result
  };


singleNumber([5,5,1,2,3,1,3,6,2])