function maxSumSubarray(arr, num) {
  // variables
  let maxSum = 0
  let maxTemporarySum = 0
  
  // edge cases
  if (arr.length < num) return null

  // first loop
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  // store the first sum
  maxTemporarySum = maxSum

  // second loop
  for (let i = num; i < arr.length; i++) {
    maxTemporarySum += - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, maxTemporarySum)
  }

  // return the max sum
  return maxSum
}

console.log(maxSumSubarray([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSumSubarray([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSumSubarray([4, 2, 1, 6], 1)) // 6
console.log(maxSumSubarray([4, 2, 1, 6, 2], 4)) // 13

// Time Complexity: O(n)
// Space Complexity: O(1)