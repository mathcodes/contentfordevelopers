import java.util.HashMap;
import java.util.Map;

class Solution {
  public int[] twoSum(int[] nums, int target) {
      Map<Integer, Integer> map = new HashMap<>();
      // loop through the array
      for (int i = 0; i < nums.length; i++) {
          // calculate the complement of the current element
          int complement = target - nums[i];
          // check if the complement exists in the map
          if (map.containsKey(complement)) {
              // if so, return an array containing the index of complement in the map and the current index
              return new int[] { map.get(complement), i };
          }
          // put the current element and its index in the map
          map.put(nums[i], i);
      }
      // if no two-sum solution is found, throw an exception
      throw new IllegalArgumentException("No two sum solution");
  }
}
// This code is a Java solution to the problem of finding two numbers in an array that add up to a given target.
// It uses a HashMap to store the elements of the array as keys and their indices as values.
// It then loops through the array and for each element, it calculates its complement, which is the target minus the element.
// It checks if the complement exists in the HashMap, if so it returns an array containing the index of complement in the HashMap and the current index.
// It then puts the current element and its index in the HashMap.
// If no two-sum solution is found, the code throws an IllegalArgumentException.

// NOTES: The time complexity of this solution is O(n), where n is the size of the input array.

// The solution uses a single loop to iterate through the array once, and for each element, it performs a constant time (O(1)) check to see if the complement exists in the HashMap and a constant time (O(1)) put operation to insert the current element and its index into the HashMap.

// Thus, the time complexity of the solution is dominated by the single loop, which is O(n).

// The space complexity is O(n) as well, as we are using a HashMap to store the elements of the input array. The size of the HashMap will be at most n, where n is the size of the input array.

// It's worth noting that this solution is not suitable for very large arrays, as the space complexity is linear with respect to the input size.