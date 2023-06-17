/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Instructions: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//   You may assume that each input would have exactly one solution, and you may not use the same element twice.
//   Example:
//   Given nums = [2, 7, 11, 15], target = 9,
//   Because nums[0] + nums[1] = 2 + 7 = 9,
//   return [0, 1].",

var twoSum = function (nums, target) {
  const seen = new Map([[nums[0], 0]]); // create a map of same length (1st p) to store the numbers we have seen so far
  for (let i = 1; i < nums.length; i++) { // iterate through the array
    if (seen.has(target - nums[i])) { // 
      return [seen.get(target - nums[i]), i];
    } else {
      seen.set(nums[i], i);
    }
  }
};

// basialy we use the differnce to find teh target by using the map to store the number we have seen so far
export const TwoSumSolution = `var twoSum = function (nums, target) {
  const seen = new Map([[nums[0], 0]]);
  for (let i = 1; i < nums.length; i++) {
    console.log(i);
    if (seen.has(target - nums[i])) {
      return [seen.get(target - nums[i]), i];
    } else {
      seen.set(nums[i], i);
    }
  }
};`

// 'Time_Complexity': "O(n)",
// 'Space_Complexity': "O(n)",
