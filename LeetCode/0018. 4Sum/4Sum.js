var fourSum = function(nums, target) {
  nums.sort((a,b) => a-b)

  let qdrplts = [];
  let numsLength= nums.length;
  
  for(let i = 0; i < numsLength- 3; i++) {

      if(i > 0 && nums[i] == nums[i-1]) {
          while(nums[i] == nums[i-1]) {
              i++;
          }
      }

      for(let j = i + 1; j < numsLength- 2; j++) {

          if(j > i + 1 && nums[j] == nums[j-1]) {
              while(nums[j] == nums[j-1]) {
                  j++;
              }
          }

          searchPairs(nums, target, i, j, qdrplts);
      }
  }
  return qdrplts;
};

function searchPairs(nums, target, first, second, qdrplts) {
  let numsLength= nums.length;
  let left = second + 1;
  let right = numsLength- 1;

  
  while(left < right) {
      let currentSum = nums[first] + nums[second] + nums[left] + nums[right];
      
      if(currentSum == target) {

          qdrplts.push([nums[first], nums[second], nums[left], nums[right]]);

          left++;
          right--;
          while(nums[left] == nums[left-1]) {
              left++;
          }
          while(nums[right] == nums[right+1]) {
              right--;
          }
      }
      else if(currentSum < target) {
          left++;
          while(nums[left] == nums[left-1]) {
              left++;
          }
      }
      else {
          right--;
          while(nums[right] == nums[right+1]) {
              right--;
          }
      }
  }
}