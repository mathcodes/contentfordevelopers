class Solution {
    public String longestPalindrome(String s) {
        int start = 0;
        int end = 0;
        for (int i = 0; i < s.length(); i++) {
            int len1 = expandAroundCenter(s, i, i);
            int len2 = expandAroundCenter(s, i, i + 1);
            int len = Math.max(len1, len2);
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        return s.substring(start, end + 1);
    }

    private int expandAroundCenter(String s, int left, int right) {
        int L = left;
        int R = right;
        while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {
            L--;
            R++;
        }
        return R - L - 1;
    }
}
// It uses a two-pointer approach, where it starts from each character in the input string and expand around the center by comparing the left and right pointers. The method expandAroundCenter takes two pointers left and right and it checks if the characters at these indices are the same, if so it increments the right pointer and decrements the left pointer.
// It returns the length of the palindrome substring by subtracting the left pointer from the right pointer.

// The outer loop goes through the string and for each character, it finds the longest palindrome substring centered at that character by calling the expandAroundCenter method.
// It then compares the length of the current palindrome substring with the previous one and updates the start and end index of the palindrome substring if the current one is longer.
// Finally, it returns the substring between the start and end index.

// The time complexity of this algorithm is O(n^2) in the worst case and the space complexity is O(1) because we are not using any additional data structure.

// This solution is optimal in terms of space complexity but it's time complexity can be improved by using dynamic programming or Manacher's Algorithm which is O(n). {
  
// }


// OPTIMIZED SOLUTION using Manacher's Algorithm


class Solution {
  public String longestPalindrome(String s) {
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < s.length(); i++) {
          sb.append("#");
          sb.append(s.charAt(i));
      }
      sb.append("#");
      String str = sb.toString();

      int[] p = new int[str.length()];
      int center = 0, right = 0;
      for (int i = 0; i < str.length(); i++) {
          int mirror = 2 * center - i;
          if (i < right) {
              p[i] = Math.min(right - i, p[mirror]);
          }
          int a = i + (1 + p[i]), b = i - (1 + p[i]);
          while (a < str.length() && b >= 0 && str.charAt(a) == str.charAt(b)) {
              p[i]++;
              a++;
              b--;
          }
          if (i + p[i] > right) {
              center = i;
              right = i + p[i];
          }
      }

      int maxLen = 0, centerIndex = 0;
      for (int i = 0; i < p.length; i++) {
          if (p[i] > maxLen) {
              maxLen = p[i];
              centerIndex = i;
          }
      }

      int start = (centerIndex - maxLen) / 2;
      return s.substring(start, start + maxLen);
  }
}


// This code is a Java implementation of Manacher's algorithm for finding the longest palindrome substring in a given string.

// Manacher's algorithm is an optimized version of the two-pointer approach. It works by converting the original string into a new string with special characters inserted between each character, this way we can handle even and odd-length palindromes in the same way.

// The algorithm uses two pointers, center and right, to keep track of the current palindrome and its right boundary.
// It also uses an array p to store the length of the palindrome centered at each character.

// The outer loop iterates through the new string, for each character it finds the mirror index of that character with respect to the current center. If the current index is within the right boundary, it uses the mirror index to determine the initial value of the palindrome length.
// It then uses two pointers to expand around the center and update the palindrome length.
// If the current palindrome expands beyond the right boundary, it updates the center and right boundary.

// After the loop, the algorithm finds the maximum palindrome length and its center index, then it calculates the start index of the original palindrome substring and returns it.

// The time complexity of this algorithm is O(n) and the space complexity is O(n) where n is the length of the input string.
// This algorithm is a linear time and space solution for the problem of finding the longest palindrome substring, which is faster and more efficient than the previous solution.
