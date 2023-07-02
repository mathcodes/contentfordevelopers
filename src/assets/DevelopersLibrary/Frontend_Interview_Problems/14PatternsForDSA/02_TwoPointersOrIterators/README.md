## Two Pointers or Iterators

The Two Pointers pattern involves using two pointers or iterators that traverse through the data structure together until one or both of the pointers fulfill a certain condition. This pattern is commonly used when searching for pairs in a sorted array or linked list, where each element needs to be compared with other elements.

By using two pointers, you can avoid the inefficiency of continuously looping back through the array to find the answer. With a single iterator, the time and space complexity would be O(n²) in the worst case scenario.

The Two Pointers pattern allows for a more efficient solution with better time and space complexity.

### Identifying the Two Pointers Method

A problem that can be solved using the Two Pointers pattern typically involves sorted arrays or linked lists. The goal is usually to find a set of elements that satisfy certain constraints. This set can be a pair, a triplet, or even a subarray.

Some common problems that can be solved using the Two Pointers method include:

- Squaring a sorted array
- Finding triplets that sum to zero
- Comparing strings that contain backspaces

Using the Two Pointers method can lead to optimized solutions with improved time and space complexity.

<details>
<summary><strong>Squaring a Sorted Array</strong></summary>

Given a sorted array of integers, the task is to square each element of the array and return the new sorted array. The Two Pointers method can be applied to solve this problem more efficiently.

```javascript
/**
 * Squaring a Sorted Array
 * @param {number[]} nums - Sorted array of integers
 * @returns {number[]} - New sorted array with squared elements
 */
const squareSortedArray = function(nums) {
  const n = nums.length;   // Get the length of the input array
  let left = 0;   // Initialize the left pointer
  let right = n - 1;   // Initialize the right pointer
  let result = Array(n);   // Array to store the squared elements

  // Iterate from the end of the result array
  for (let i = n - 1; i >= 0; i--) {

    const leftSquare = nums[left] ** 2;   // Square the element at the left pointer
    const rightSquare = nums[right] ** 2;   // Square the element at the right pointer

    // Compare the squared elements and assign the larger value to the result array
    if (leftSquare > rightSquare) {
      result[i] = leftSquare;   // Assign the left squared element to the result array
      left++;   // Move the left pointer to the right
    } else {
      result[i] = rightSquare;   // Assign the right squared element to the result array
      right--;   // Move the right pointer to the left
    }
  }

  return result;   // Return the array with the squared elements
};

// Test the function
const sortedArray = [-4, -2, -1, 0, 3, 5, 7];
const squaredArray = squareSortedArray(sortedArray);
console.log(squaredArray);  // Output: [0, 1, 4, 9, 16, 25, 49]
```

The `squareSortedArray` function squares each element of the given sorted array using two pointers (`left` and `right`). The pointers move from opposite ends of the array towards the middle, comparing the squares of the elements and storing them in the `result` array in descending order.

By utilizing the Two Pointers pattern, the function achieves a time complexity of O(n) and a space complexity of O(n), where `n` is the length of the input array.

</details>

<details>
<summary><strong>Finding Triplets that Sum to Zero</strong></summary>

Given an array of integers, you need to find all unique triplets in the array that sum up to zero.

```javascript
/**
 * Finding Triplets that Sum to Zero
 * @param {number[]} nums - Array of integers
 * @returns {number[][]} - Array of unique triplets that sum up to zero
 */
const threeSum = function(nums) {
  const result = [];   // Array to store the triplets
  const n = nums.length;   // Length of the input array
  nums.sort((a, b) => a - b);   // Sort the input array in ascending order

  // Iterate through the array, skipping the last two elements as we need at least three elements to form a triplet
  for (let i = 0; i < n - 2; i++) {

    // Skip the current iteration if the current number is equal to the previous number to avoid duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;   // Pointer for the element to the right of the current number
    let right = n - 1;   // Pointer for the element at the end of the array

    // Move the left and right pointers towards each other
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];   // Calculate the sum of the three elements

      // If the sum is zero, we found a triplet that adds up to zero
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);   // Add the triplet to the result array

        // Skip the elements with the same value to avoid duplicates in the result
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

         // Skip the elements with the same value to avoid duplicates in the result
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;   // Move the left pointer to the right
        right--;   // Move the right pointer to the left
      }

      // If the sum is less than zero, we need a larger element, so we move the left pointer to the right
      else if (sum < 0) {
        left++;
      }

      // If the sum is greater than zero, we need a smaller element, so we move the right pointer to the left
      else {
        right--;
      }
    }
  }

  return result;   // Return the array of triplets with a sum of 0
};


// Test the function
const nums = [-1, 0, 1, 2, -1, -4];
const triplets = threeSum(nums);
console.log(triplets);  // Output: [[-1, -1, 2], [-1, 0, 1]]
```


The `threeSum` function finds unique triplets in the given array `nums` that sum up to zero. It utilizes the Two Pointers pattern to efficiently search for the triplets. The function starts with a sorted array, and with each iteration, it moves two pointers (`left` and `right`) towards the center until it finds a triplet that sums up to zero.
</details>

<details>
<summary><strong>Comparing Strings that Contain Backspaces</strong></summary>


Given two strings `S` and `T`, you need to compare them after processing any backspaces. A backspace character "#" means to remove the previous character.

```javascript
/**
 * Comparing Strings that Contain Backspaces
 * @param {string} S - The first string
 * @param {string} T - The second string
 * @returns {boolean} - True if the strings are equal after processing backspaces, False otherwise
 */
const backspaceCompare = function(S, T) {
  function processString(str) {
    const result = [];

    for (const char of str) {
      if (char === "#") {
        result.pop(); // Remove the last element from the result array if the character is a backspace
      } else {
        result.push(char); // Push the character into the result array if it is not a backspace
      }
    }
    return result.join("");   // Join the characters in the array to form the final processed string
  }

  const processedS = processString(S);   // Process the string S
  const processedT = processString(T);   // Process the string T

  return processedS === processedT;   // Compare the processed strings for equality
};

// Test the function
const S = "ab#c";
const T = "ad#c";
console.log(backspaceCompare(S, T));  // Output: true

const X = "ab##";
const Y = "c#d#";
console.log(backspaceCompare(X, Y));  // Output: true

const P = "a##c";
const Q = "#a#c";
console.log(backspaceCompare(P, Q));  // Output: true

const M = "a#c";
const N = "b";
console.log(backspaceCompare(M, N));  // Output: false
```

The `backspaceCompare` function compares two strings `S` and `T` after processing backspaces. It iterates through each string, processes the backspaces, and stores the resulting strings. Finally, it compares the processed strings to determine if they are equal.
</details>
