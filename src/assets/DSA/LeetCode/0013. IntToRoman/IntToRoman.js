var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b)
    let quadruplets = [];
    let n = nums.length;
    
    for(let i = 0; i < n - 3; i++) {
        if(i > 0 && nums[i] == nums[i-1]) {
            while(nums[i] == nums[i-1]) {
                i++;
            }
        }
        for(let j = i + 1; j < n - 2; j++) {
            if(j > i + 1 && nums[j] == nums[j-1]) {
                while(nums[j] == nums[j-1]) {
                    j++;
                }
            }
            searchPairs(nums, target, i, j, quadruplets);
        }
    }
    return quadruplets;
};

function searchPairs(nums, target, first, second, quadruplets) {
    let n = nums.length;
    let left = second + 1;
    let right = n - 1;
    
    while(left < right) {
        let currentSum = nums[first] + nums[second] + nums[left] + nums[right];
        
        if(currentSum == target) {
            quadruplets.push([nums[first], nums[second], nums[left], nums[right]]);
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