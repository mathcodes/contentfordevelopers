// class Solution {
//   public int lengthOfLongestSubstring(String s) {
//       int n = s.length(), ans = 0;
//       Map<Character, Integer> map = new HashMap<>();

//       for (int j = 0, i = 0; j < n; j++) {
//           if (map.containsKey(s.charAt(j))) {
//               i = Math.max(map.get(s.charAt(j)), i);
//           }
//           ans = Math.max(ans, j - i + 1);
//           map.put(s.charAt(j), j + 1);
//       }
//       return ans;
//   }
// }
// This code is a Java solution to the problem of finding the length of the longest substring without repeating characters.

// It uses a sliding window approach, keeping track of the start and end index of the current substring using two pointers i and j. The HashMap is used to store the last index of each character in the current substring.

// The outer loop goes through the string and for each character, it checks whether the current character is already in the HashMap. If it is, it updates the start index i to the maximum of the current start index and the index of the repeated character in the HashMap.
// Then it updates the ans variable with the maximum between the current ans and the length of the current substring.
// Finally, it adds the current character and its index to the HashMap

// The time complexity of this solution is O(n), where n is the length of the input string. The solution uses a single loop to iterate through the string once, and for each character, it performs a constant time (O(1)) check to see if the character is already in the HashMap and a constant time (O(1)) put operation to insert the current character and its index into the HashMap.

// The space complexity is O(min(n, m)), where n is the length of the input string and m is the size of the character set. The size of the HashMap will be at most min(n, m), as it stores the last index of each character in the current substring.

// This solution is optimal in terms of time complexity, but its space complexity can be optimized by using an array of fixed size instead of a HashMap, in this way the space complexity will be O(m) where m is the size of the character set.


// // OPTIMAL SOLUTION

// This code is a Java solution to the problem of finding the length of the longest substring without repeating characters.

// It uses a sliding window approach, keeping track of the start and end index of the current substring using two pointers i and j. An array of fixed size is used to store the last index of each character in the current substring.

// The outer loop goes through the string and for each character, it updates the start index i to the maximum of the current start index and the index of the repeated character in the array.
// Then it updates the ans variable with the maximum between the current ans and the length of the current substring.
// Finally, it adds the current character and its index to the array

// The time complexity of this solution is O(n), where n is the length of the input string. The solution uses a single loop to iterate through the string once, and for each character, it performs a constant time (O(1)) check to see if the character is already in the array and a constant time (O(1)) put operation to insert the current character and its index into the array.

// The space complexity is O(m) where m is the size of the character set.

// This solution uses an array of fixed size instead of a HashMap, this allows us to avoid the space overhead of a HashMap and also the time complexity of looking up values in a HashMap. It is more space efficient and the time complexity is the same as the previous solution.

class Solution {
  public int lengthOfLongestSubstring(String s) {
      int n = s.length(), ans = 0;
      int[] index = new int[128]; // assuming ASCII characters
      
      for (int j = 0, i = 0; j < n; j++) {
          i = Math.max(index[s.charAt(j)], i);
          ans = Math.max(ans, j - i + 1);
          index[s.charAt(j)] = j + 1;
      }
      return ans;
  }
}
