// "id": 1,
// "title": "Two Sum

class Solution {
  public int[] twoSum(int[] nums, int target) {
     Map<Integer, Integer> map = new HashMap<>();
   for (int i = 0; i < nums.length; i++) {
     int complement = target - nums[i];
   if (map.containsKey(complement)) {
     return new int[] { map.get(complement), i };
   }
   map.put(nums[i], i);
   }
   throw new IllegalArgumentException(\"No two sum solution\");
   }
}

// "id": 2,
// "title": "Add Two Numbers

class Solution {
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummyHead = new ListNode(0);
    ListNode p = l1, q = l2, curr = dummyHead;
    int carry = 0;
    while (p != null || q != null) {
      int x = (p != null) ? p.val : 0;
      int y = (q != null) ? q.val : 0;
      int sum = carry + x + y;
      carry = sum / 10;
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
      if (p != null)
        p = p.next;
      if (q != null)
        q = q.next;
    }
    if (carry > 0) {
      curr.next = new ListNode(carry);
    }
    return dummyHead.next;
  }
}

// "id": 3,
// "title": "Longest Substring Without Repeating Characters

class Solution {
  public int lengthOfLongestSubstring(String s) {
    int n = s.length(), ans = 0;
    Map<Character, Integer> map = new HashMap<>();
    for (int j = 0, i = 0; j < n; j++) {
      if (map.containsKey(s.charAt(j))) {
        i = Math.max(map.get(s.charAt(j)), i);
      }
      ans = Math.max(ans, j - i + 1);
      map.put(s.charAt(j), j + 1);
    }
    return ans;
  }
}

// "id": 4,
// "title": "Median of Two Sorted Arrays

class Solution {
  public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    int m = nums1.length;
    int n = nums2.length;
    if (m > n) {
      int[] temp = nums1;
      nums1 = nums2;
      nums2 = temp;
      int tmp = m;
      m = n;
      n = tmp;
    }
    int iMin = 0, iMax = m, halfLen = (m + n + 1) / 2;
    while (iMin <= iMax) {
      int i = (iMin + iMax) / 2;
      int j = halfLen - i;
      if (i < iMax && nums2[j - 1] > nums1[i]) {
        iMin = i + 1;
      } else if (i > iMin && nums1[i - 1] > nums2[j]) {
        iMax = i - 1;
      } else {
        int maxLeft = 0;
        if (i == 0) {
          maxLeft = nums2[j - 1];
        } else if (j == 0) {
          maxLeft = nums1[i - 1];
        } else {
          maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
        }
        if ((m + n) % 2 == 1) {
          return maxLeft;
        }
        int minRight = 0;
        if (i == m) {
          minRight = nums2[j];
        } else if (j == n) {
          minRight = nums1[i];
        } else {
          minRight = Math.min(nums2[j], nums1[i]);
        }
        return (maxLeft + minRight) / 2.0;
      }
    }
    return 0.0;
  }
}

// "id": 5,
// "title": "Longest Palindromic Substring

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

// "id": 6,
// "title": "ZigZag Conversion

class Solution {
  public String convert(String s, int numRows) {
    if (numRows == 1) {
      return s;
    }
    List<StringBuilder> rows = new ArrayList();
    for (int i = 0; i < Math.min(numRows, s.length()); i++) {
      rows.add(new StringBuilder());
    }
    int curRow = 0;
    boolean goingDown = false;
    for (char c : s.toCharArray()) {
      rows.get(curRow).append(c);
      if (curRow == 0 || curRow == numRows - 1) {
        goingDown = !goingDown;
      }
      curRow += goingDown ? 1 : -1;
    }
    StringBuilder ret = new StringBuilder();
    for (StringBuilder row : rows) {
      ret.append(row);
    }
    return ret.toString();
  }
}

// "id": 7,
// "title": "Reverse Integer

class Solution {
  public int reverse(int x) {
    int rev = 0;
    while (x != 0) {
      int pop = x % 10;
      x /= 10;
      if (rev > Integer.MAX_VALUE / 10 || (rev == Integer.MAX_VALUE / 10 && pop > 7)) {
        return 0;
      }
      if (rev < Integer.MIN_VALUE / 10 || (rev == Integer.MIN_VALUE / 10 && pop < -8)) {
        return 0;
      }
      rev = rev * 10 + pop;
    }
    return rev;
  }
}

// "id": 8,
// "title": "String to Integer (atoi)

class Solution {
  public int myAtoi(String str) {
    int result = 0;
    int sign = 1;
    int i = 0;
    while (str.charAt(i) == ' ') {
      i++;
    }
    if (str.charAt(i) == '+' || str.charAt(i) == '-') {
      sign = str.charAt(i) == '+' ? 1 : -1;
      i++;
    }
    while (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
      result = result * 10 + (str.charAt(i) - '0');
      if (result > 2147483648L) {
        return sign == 1 ? 2147483647 : -2147483648;
      }
      i++;
    }
    return result * sign;
  }
}

// "id": 9,
// "title": "Palindrome Number

class Solution {
  public boolean isPalindrome(int x) {
    if (x < 0) {
      return false;
    }
    int rev = 0;
    int num = x;
    while (num > 0) {
      rev = rev * 10 + num % 10;
      num /= 10;
    }
    return rev == x;
  }
}
