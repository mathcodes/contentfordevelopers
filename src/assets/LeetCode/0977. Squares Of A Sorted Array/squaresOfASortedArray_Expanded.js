var sortedSquares = function (nums) {
  return nums
    .map(
      num => {
        Math.pow(num, 2)
      })
    .sort(
      (numOne, numTwo) => {
        numOne - numTwo
      });
};

sortedSquares([1, 2, 3]); // returns [ 1, 4, 9 ]
sortedSquares([-1, 2]); // returns [ 1, 4 ]
sortedSquares([132, -342, 453]); // returns [ 17424, 116964, 205209 ]
sortedSquares([13]); // returns [ 169 ]



// Sort method in detail: Start with the basic (DEFAULT) use of the sort method where we simply pass in 
// the two values for comparison, and the sort method converts the elements into strings and sorts them 
// based on their sequences of UTF-16 code units values:
nums.sort(a, b)
// NOT WHAT WE WANT! We're dealing with numbers here, not strings. So we use another option provided to 
// us by the sort method. We can pass in the'a' and 'b' values into our own function and by returning 
// 'a-b', which sort uses to compare which one is bigger or if they are equal. The greater one goes 
// first between the two values, so one the mapping is complete, everything will be in order. So the 
// function alone looks like:
(a, b) => {a - b}
// and when we place is into the sort method. we have:
nums.sort((a, b) => {a - b})
// Break it up like above:
nums
  .sort( 
    (a, b) => {
      a - b
    })
// And replace 'a' and 'b' with 'numOne' and 'numTwo':
.sort(
  (numOne, numTwo) => {
    numOne - numTwo
  });