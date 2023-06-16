
def jump(nums):
    n = len(nums)  # Get the length of the input array
    jumps = [float('inf')] * n  # Create a list to store minimum jumps required for each index, initialized with infinity
    jumps[0] = 0  # Set the minimum jumps required to reach the first index as 0

    for i in range(1, n):  # Iterate from the second index to the last index
        for j in range(i):  # Iterate through the indices from 0 to i-1
            if j + nums[j] >= i:  # Check if we can jump from index j to index i
                jumps[i] = min(jumps[i], jumps[j] + 1)  # Update the minimum jumps required for index i if a shorter path is found

    return jumps[n - 1]  # Return the minimum jumps required to reach the last index


# Test the function with sample input
nums = [2, 3, 1, 1, 4]
nums2 = [1, 4, 1, 1, 1, 1, 1, 1, 1, 1]
nums3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
nums4 = [0, 2, 3]

min_jumps = jump(nums)
min_jumps2 = jump(nums2)
min_jumps3 = jump(nums3)
min_jumps4 = jump(nums4)
print(min_jumps)
print(min_jumps2)
print(min_jumps3)
print(min_jumps4)
