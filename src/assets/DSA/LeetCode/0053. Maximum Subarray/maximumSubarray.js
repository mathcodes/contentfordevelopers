// // /**
// //  * @param {number[]} nums
// //  * @return {number}
// //  */
// // function maxSubArray(nums) {
// //   let prev = -Infinity;

// //   return nums.reduce((high, num) => {
// //     prev = Math.max(num, prev + num);
// //     return Math.max(high, prev);
// //   }, nums[0]);
// // };


const maxSubArray = (nums) => { // declare function with input of array
  let solution = nums[0]; // define my solution by default will be the first varaiable

  for (let i = 1; i < nums.length; i++) { // iterate through the array starting at index 1
    // we could create a cache array that stores our solution elements in order not to mutate the array(or the inputs)
    // my numbers at i is going ot be the max of the two possibilities: nums[i] OR nums[i] + nums[i-1]
    console.log("nums[i]: ", nums[i]); // 100
    // here we are saying that the current number is either the current number or the current number plus the previous number
    nums[i] = Math.max(nums[i], nums[i] + nums[i-1]); // 100
    console.log("nums[i]: ", nums[i]); // 100
    // and as we go through we can say that our solution is either the solution OR nums[i]
    console.log("solution ", solution);
    solution = Math.max(solution, nums[i]); // solution is either the solution or the current number
    console.log("solution ", solution);
  }
  return solution;
}

maxSubArray([100, -2, 3, -3, 0, 9, -8, 2])

// Here is an example of what i, nums, nums[i], and solution look like at each iteration in html table format:

// i | nums | nums[i] | solution
// 1 | [100, -2, 3, -3, 0, 9, -8, 2] | 100 | 100
// 2 | [100, -2, 3, -3, 0, 9, -8, 2] | -2 | 100
// 3 | [100, -2, 3, -3, 0, 9, -8, 2] | 3 | 100
// 4 | [100, -2, 3, -3, 0, 9, -8, 2] | -3 | 100
// 5 | [100, -2, 3, -3, 0, 9, -8, 2] | 0 | 100
// 6 | [100, -2, 3, -3, 0, 9, -8, 2] | 9 | 100
// 7 | [100, -2, 3, -3, 0, 9, -8, 2] | -8 | 100
// 8 | [100, -2, 3, -3, 0, 9, -8, 2] | 2 | 100

// Here is an example of what i, nums, nums[i], and solution look like at each iteration in HTML table format using header, ul and li tags... avoid using | as this is used in markdown, not html for creating columns:

// <table>
//   <thead>
//     <tr>
//       <th>i</th>
//       <th>nums</th>
//       <th>nums[i]</th>
//       <th>solution</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td>100</td>
//       <td>100</td>
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td>-2</td>
//       <td>100</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td>[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td>3</td>
//       <td>100</td>
//     </tr>
//     <tr>
//       <td>4</td>
//       <td>[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td>-3</td>
//       <td>100</td>
//     </tr>
//     <tr>
//       <td>5</td>
//       <td>[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td>0</td>
//       <td>100</td>
//     </tr>
//     <tr>
//       <td>6</td>
//       <td>[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td>9</td>
//       <td>100</td>
//     </tr>
//     <tr>
//       <td>7</td>
//       <td>[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td>-8</td>
//       <td>100</td>
//     </tr>
//     <tr>
//       <td>8</td>
//       <td>[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td>2</td>
//       <td>100</td>
//     </tr>
//   </tbody>
// </table>

//  recreate the table using tailwindcss giving it a unique modern color scheme and responsive design:

// <table class="table-auto">
//   <thead>
//     <tr>
//       <th class="px-4 py-2 bg-blue-500 text-white">i</th>
//       <th class="px-4 py-2 bg-blue-500 text-white">nums</th>
//       <th class="px-4 py-2 bg-blue-500 text-white">nums[i]</th>
//       <th class="px-4 py-2 bg-blue-500 text-white">solution</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td class="border px-4 py-2">1</td>
//       <td class="border px-4 py-2">[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td class="border px-4 py-2">100</td>
//       <td class="border px-4 py-2">100</td>
//     </tr>
//     <tr class="bg-gray-100">
//       <td class="border px-4 py-2">2</td>
//       <td class="border px-4 py-2">[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td class="border px-4 py-2">-2</td>
//       <td class="border px-4 py-2">100</td>
//     </tr>
//     <tr>
//       <td class="border px-4 py-2">3</td>
//       <td class="border px-4 py-2">[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td class="border px-4 py-2">3</td>
//       <td class="border px-4 py-2">100</td>
//     </tr>
//     <tr class="bg-gray-100">
//       <td class="border px-4 py-2">4</td>
//       <td class="border px-4 py-2">[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td class="border px-4 py-2">-3</td>
//       <td class="border px-4 py-2">100</td>
//     </tr>
//     <tr>
//       <td class="border px-4 py-2">5</td>
//       <td class="border px-4 py-2">[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td class="border px-4 py-2">0</td>
//       <td class="border px-4 py-2">100</td>
//     </tr>
//     <tr class="bg-gray-100">
//       <td class="border px-4 py-2">6</td>
//       <td class="border px-4 py-2">[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td class="border px-4 py-2">9</td>
//       <td class="border px-4 py-2">100</td>
//     </tr>
//     <tr>
//       <td class="border px-4 py-2">7</td>
//       <td class="border px-4 py-2">[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td class="border px-4 py-2">-8</td>
//       <td class="border px-4 py-2">100</td>
//     </tr>
//     <tr class="bg-gray-100">
//       <td class="border px-4 py-2">8</td>
//       <td class="border px-4 py-2">[100, -2, 3, -3, 0, 9, -8, 2]</td>
//       <td class="border px-4 py-2">2</td>
//       <td class="border px-4 py-2">100</td>
//     </tr>
//   </tbody>
// </table>










// ANOTHER SOLUTION WITH NOTES:

// SETUP: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


// var maxSubArray = function (nums) { // declare function with input of array
//   let maxSoFar = nums[0]; // declare variable to store max sum so far and set it to the first element in the array
//   let maxEndingHere = nums[0]; // declare variable to store max sum ending here and set it to the first element in the array
//   for (let i = 1; i < nums.length; i++) { // iterate through the array starting at index 1
//     maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]); // set maxEndingHere to the max of the current element or the current element plus the previous maxEndingHere
//     maxSoFar = Math.max(maxSoFar, maxEndingHere); // set maxSoFar to the max of the current maxSoFar or the current maxEndingHere
//   }
//   return maxSoFar; // return the maxSoFar
// }