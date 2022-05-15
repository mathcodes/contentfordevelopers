/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let minDiff = Number.MAX_SAFE_INTEGER, res
  for (let i = 0; i < nums.length; i++) {
      let left = i + 1, right = nums.length - 1
      while (left < right) {
          let tmp = nums[left] + nums[i] + nums[right]
          if (Math.abs(tmp - target) < minDiff) {
              res = tmp
              minDiff = Math.abs(tmp - target) 
          }
              
          if (tmp === target) {
              return target
          }
          else if (tmp < target)
              left++
          else
              right--
      }
  }
  return res
};