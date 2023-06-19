// My best, using Set():
var removeDuplicates = function(nums) {
	let withoutdup=new Set(nums);
	
	return withoutdup;
};

// OR 
// splice when consecutive items are equal and restart at same i (using i-- in the if block/statement)for comparison of same with next new item
// FOR LOOP{IF{SPLICE}}
var removeDuplicates = function(nums) {
  for (let i = 1; i <= nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
          nums.splice(i, 1);
          i--;
      }
  };
};