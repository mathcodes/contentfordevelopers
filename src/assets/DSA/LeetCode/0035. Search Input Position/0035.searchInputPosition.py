def searchInsert(nums, target):
    left = 0  # Pointer to the left end of the array
    right = len(nums) - 1  # Pointer to the right end of the array

    # Binary search to find the index or position to insert the target
    while left <= right:
        mid = (left + right) // 2  # Middle index of the current range
        if nums[mid] == target:
            return mid  # Target found, return the index
        elif nums[mid] < target:
            left = mid + 1  # Target is in the right half
        else:
            right = mid - 1  # Target is in the left half

    return left  # If the target was not found, return the position it should be inserted


# Test the function
nums = [1, 3, 5, 6]  # Sorted array
target = 5  # Target value to search for or insert
print(searchInsert(nums, target))  # Output: 2 (as 5 is found at index 2 in the array)

# Time Complexity: O(log N) - Binary search is used, so the time complexity is logarithmic.
# Space Complexity: O(1) - The space used is constant, as only a few variables are used.

