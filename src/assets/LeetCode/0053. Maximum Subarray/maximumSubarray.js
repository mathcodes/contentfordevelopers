// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// function maxSubArray(nums) {
//   let prev = -Infinity;

//   return nums.reduce((high, num) => {
//     prev = Math.max(num, prev + num);
//     return Math.max(high, prev);
//   }, nums[0]);
// };


const maxSubArray = (nums) => {
  let solution = nums[0]; // define my solution by default will be the first varaiable  

  for (let i = 1; i < nums.length; i++) {
    // we could create a cache array that stores our solution elements in order not to mutate the array(or the inputs)
    // my numbers at i is going ot be the max of the two possibilities: nums[i] OR nums[i] + nums[i-1]
    console.log("nums[i]: ", nums[i]);
    nums[i] = Math.max(nums[i], nums[i] + nums[i-1]); 
    console.log("nums[i]: ", nums[i]);
    // and as we go through we can say that our solution is either the solution OR nums[i]
    console.log("solution ", solution);
    solution = Math.max(solution, nums[i]);
    console.log("solution ", solution);
  }
  return solution;
}

maxSubArray([100, -2, 3, -3, 0, 9, -8, 2])