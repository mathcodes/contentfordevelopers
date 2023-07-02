// var sortedSquares = function(nums) {
//   return nums
//       .map(num => Math.pow(num, 2))
//       .sort((numOne, numTwo) => numOne - numTwo);
// };
 
// sortedSquares([1, 2, 3]); // returns [ 1, 4, 9 ]
// sortedSquares([-1, 2]); // returns [ 1, 4 ]
// sortedSquares([132, -342, 453]); // returns [ 17424, 116964, 205209 ]
// sortedSquares([13]); // returns [ 169 ]

// QUICKER WAY
var sortedSquares = function(nums) {
  // SETUP VARIABLES 
  // result array with same length, all zeros
  const result = new Array(nums.length).fill(0);
  let RIGHT = nums.length - 1;
  let LEFT = 0;
  let resultIndex = nums.length - 1;

  // WHILE LOOP
  // check while left is <= right we have to check which is bigger
  // the set values for leftVal and rightVal = the squared values
  while (LEFT <= RIGHT) {
    let leftVal = Math.pow(nums[LEFT], 2);
    let rightVal = Math.pow(nums[LEFT], 2);
    // IF ELSE STATEMENT 
    // Then as long as leftVal < rightVal, the resultIndex = rightVal, 
    // otherwise = leftVal
    if (leftVal < rightVal) {
      result[resultIndex] = rightVal;
      RIGHT--;
    } else {
      result[resultIndex] = leftVal;
      LEFT++;
    }
    // decremeent resultIndex and return
    resultIndex--;
  }
  // RETURN 
  return result;
}

