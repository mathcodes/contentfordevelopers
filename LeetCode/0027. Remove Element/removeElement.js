var removeElement = function(nums, val) {
  var count = 0;
  var start = 0;

  for(i=0; i<nums.length; i++){

      if(nums[i] == val) {
          nums.splice(i,1);
          i--;
      }

  }
  console.log(nums);
};


 

 