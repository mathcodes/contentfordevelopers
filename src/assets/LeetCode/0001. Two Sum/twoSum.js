/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums, target) {
  const seen = new Map([[nums[0], 0]]);
  for (let i = 1; i < nums.length; i++) {
    console.log(i);
    if (seen.has(target - nums[i])) {
      return [seen.get(target - nums[i]), i];
    } else {
      seen.set(nums[i], i);
    }
  }
};