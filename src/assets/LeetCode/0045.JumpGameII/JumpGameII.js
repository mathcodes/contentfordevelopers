// Function to calculate the minimum number of jumps required to reach the last index
function jump(nums) {
  const n = nums.length; // Get the length of the input array
  const jumps = new Array(n).fill(Infinity); // Create an array to store minimum jumps required for each index, initialized with Infinity
  jumps[0] = 0; // Set the minimum jumps required to reach the first index as 0

  // Loop through each index from the second index to the last index
  for (let i = 1; i < n; i++) {
    // Loop through the indices from 0 to i-1
    for (let j = 0; j < i; j++) {
      // Check if we can jump from index j to index i
      if (j + nums[j] >= i) {
        // Update the minimum jumps required for index i if a shorter path is found
        jumps[i] = Math.min(jumps[i], jumps[j] + 1);
      }
    }
  }

  return jumps[n - 1]; // Return the minimum jumps required to reach the last index
}

// Test the function with sample input
const nums = [2, 3, 1, 1, 4];
const nums2 = [2, 1, 0, 1, 4];

const minJumps = jump(nums);
const minJumps2 = jump(nums2);

console.log(minJumps);
console.log(minJumps2);
