var sortedSquares = function(nums) {
  return nums
      .map(num => Math.pow(num, 2))
      .sort((numOne, numTwo) => numOne - numTwo);
};
 
sortedSquares([1, 2, 3]); // returns [ 1, 4, 9 ]
sortedSquares([-1, 2]); // returns [ 1, 4 ]
sortedSquares([132, -342, 453]); // returns [ 17424, 116964, 205209 ]
sortedSquares([13]); // returns [ 169 ]



