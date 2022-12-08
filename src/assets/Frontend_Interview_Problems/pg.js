// SETUP
var sortedSquares = function(nums) {
  let RIGHT = nums.length - 1;
  let LEFT = 0;
  let resultIndex = nums.length - 1;
  const result = new Array(nums.length).fill(0);

  while (LEFT <= RIGHT) {
    let leftVal = Math.pow(nums[LEFT], 2);
    let rightVal = Math.pow(nums[RIGHT], 2);

    if (leftVal < rightVal) {
      result[resultIndex] = rightVal;
      RIGHT--;
    } else {
      result[resultIndex] = leftVal;
      LEFT++;
    }
    resultIndex--;
  }
  return result;
}

console.log(sortedSquares([0, -2, -5, 9, 8, -8]))