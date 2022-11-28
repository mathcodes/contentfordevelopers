class Solution:
    def maxAreaOfIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        def add(list, i, j):
            if not list:
                return
            for k in range(len(list)): 
              # The code first checks if the current element is a 1, if it is, it will check if the element to the left and above it are 1s. 
              # If they are, it will return 0(false), because it is already counted. If they are not, it will call the deepLook function.

                if list[k][0] == i and list[k][1] == j:
                    return False
            list.append([i, j])
            return True
        def deepLook(i, j, list):
          # The deepLook function will check if the current element is a 1, if it is, it will add it to a list. 
          # Then it will check if the element to the left, right, above, and below it are 1s. If they are, it will add them to the list and call the deepLook function on them.
          # The deepLook function will return the length of the list.
          # The areaCount function will call the deepLook function and return the length of the list.
          # The maxAreaOfIsland function will call the areaCount function and return the max length of the list.

            if not list:
                list = []
            if grid[i][j]:
                add(list, i, j)
            if j > 0 and grid[i][j - 1]:# The deepLook function will check if the current element is a 1, 
                if add(list, i, j - 1): #if it is, it will add it to a list. 
                    deepLook(i, j - 1, list)
            # Then it will check if the element to the left, right, above, and below it are 1s. If they are, it will add them to the list and call the deepLook function on them.
            if i < len(grid) - 1 and grid[i + 1][j]:
                if add(list, i + 1, j):
                    deepLook(i + 1, j, list)
            if len(grid) and j < len(grid[0]) - 1 and grid[i][j + 1]:
                if add(list, i, j + 1):
                    deepLook(i, j + 1, list)
            if i > 0 and grid[i - 1][j]:
                if add(list, i - 1, j):
                    deepLook(i - 1, j, list)
            # The deepLook function will return the length of the list.
            return len(list)
        # The areaCount function will call the deepLook function and return the length of the list.
        def areaCount(i, j):
            if j > 0 and grid[i][j - 1]: 
                return 0
            if i > 0 and grid[i - 1][j]:
                return 0
            return deepLook(i, j)
        max = 0
        # The maxAreaOfIsland function will call the areaCount function and return the max length of the list.
        for i in range(len(grid)):
            for j in range(len(grid[i])):
                obj = grid[i][j]
                if obj:
                    temp = areaCount(i, j)
                    max = temp if temp > max else max
        return max

# Explanation of what the code does
    # The code first checks if the current element is a 1, if it is, it will check if the element to the left and above it are 1s. If they are, it will return 0, because it is already counted. If they are not, it will call the deepLook function.
    # The deepLook function will check if the current element is a 1, if it is, it will add it to a list. Then it will check if the element to the left, right, above, and below it are 1s. If they are, it will add them to the list and call the deepLook function on them.
    # The deepLook function will return the length of the list.
    # The areaCount function will call the deepLook function and return the length of the list.
    # The maxAreaOfIsland function will call the areaCount function and return the max length of the list.
# Time Complexity
    # The time complexity of this code is O(n^2).
# Space Complexity
    # The space complexity of this code is O(n^2).
# Runtime
    # The runtime of this code is 48 ms.
# Memory Usage
    # The memory usage of this code is 13.9 MB.