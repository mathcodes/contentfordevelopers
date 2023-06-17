def searchRange(nums, target):
    left = 0  # Pointer to the left end of the array
    right = len(nums) - 1  # Pointer to the right end of the array
    start = -1  # The starting position of the target value
    end = -1  # The ending position of the target value

    # Binary search to find the leftmost position of the target
    while left <= right:
        mid = (left + right) // 2  # Middle index of the current range
        if nums[mid] == target:
            start = mid  # Found a potential starting position
            right = mid - 1  # Continue searching towards the left
        elif nums[mid] < target:
            left = mid + 1  # Target is in the right half
        else:
            right = mid - 1  # Target is in the left half

    left = 0  # Reset the left pointer
    right = len(nums) - 1  # Reset the right pointer

    # Binary search to find the rightmost position of the target
    while left <= right:
        mid = (left + right) // 2  # Middle index of the current range
        if nums[mid] == target:
            end = mid  # Found a potential ending position
            left = mid + 1  # Continue searching towards the right
        elif nums[mid] < target:
            left = mid + 1  # Target is in the right half
        else:
            right = mid - 1  # Target is in the left half

    return [start, end]  # Return the starting and ending position of the target value


# Test the function
nums = [5, 7, 7, 8, 8, 10]  # Sorted array
target = 8  # Target value to find
print(searchRange(nums, target))  # Output: [3, 4] (starting and ending position of 8 in the array)

# The time complexity of the above algorithm is O(log n) since we are using binary search to find the target value.
# The space complexity of the above algorithm is O(1) since we are not using any extra space.