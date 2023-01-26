export const LeetCodeSolutions = [{
  "id": 1,
  "title": "Two Sum",
  "content": "Given an array of integers, return indices of the two numbers such that they add up to a specific target.\r \ \  You may assume that each input would have exactly one solution, and you may not use the same element twice.\r \ \  Example:\r \ \  Given nums = [2, 7, 11, 15], target = 9,\r \ \  Because nums[0] + nums[1] = 2 + 7 = 9,\r \ \  return [0, 1].",
  "javascript": "var twoSum = function(nums, target) {\r \ \  const map = new Map();\r \ \ \ \   for (let i = 0; i < nums.length; i++) {\r \ \ \ \ \ \ \ \ \ const complement = target - nums[i];\r \ \ \ \ \ \ \ \ \ if (map.has(complement)) {\r \ \ \ \ \ \ \ \ \ \ \ return [map.get(complement), i];\r \ \ \ \ \ \ \ \  }\r \ \ \ \ \ \ \ \  map.set(nums[i], i);\r \ \ \ \ \  }\r };",
  "python": "class Solution:\r \ \  def twoSum(self, nums: List[int], target: int) -> List[int]:\r \ \  map = {}\r \ \  for i in range(len(nums)):\r \ \  complement = target - nums[i]\r \ \  if complement in map:\r \ \  return [map[complement], i]\r \ \  map[nums[i]] = i",
  "java": "class Solution {\r \ \  public int[] twoSum(int[] nums, int target) {\r \ \  Map<Integer, Integer> map = new HashMap<>();\r \ \  for (int i = 0; i < nums.length; i++) {\r \ \  int complement = target - nums[i];\r \ \  if (map.containsKey(complement)) {\r \ \  return new int[] { map.get(complement), i };\r \ \  }\r \ \  map.put(nums[i], i);\r \ \  }\r \ \  throw new IllegalArgumentException(\"No two sum solution\");\r \ \  }\r \ \ }",
  "c++": "class Solution {\r \ \  public:\r \ \  vector<int> twoSum(vector<int>& nums, int target) {\r \ \  unordered_map<int, int> map;\r \ \  for (int i = 0; i < nums.size(); i++) {\r \ \  int complement = target - nums[i];\r \ \  if (map.find(complement) != map.end()) {\r \ \  return { map[complement], i };\r \ \  }\r \ \  map[nums[i]] = i;\r \ \  }\r \ \  throw runtime_error(\"No two sum solution\");\r \ \  }\r \ \ };",
  'Time_Complexity': "O(n)",
  'Space_Complexity': "O(n)",
  'image':'https://raw.githubusercontent.com/mathcodes/contentfordevelopers/main/src/assets/LeetCode/0001.TwoSum/1.twoSum.png'
},
{
  "id": 2,
  "title": "Add Two Numbers",
  "content": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.\r \ \  You may assume the two numbers do not contain any leading zero, except the number 0 itself.\r \ \  Example:\r \ \  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)\r \ \  Output: 7 -> 0 -> 8\r \ \  Explanation: 342 + 465 = 807.",
  "javascript": `var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;
    while (p != null || q != null) {
      let x = (p != null) ? p.val : 0;
      let y = (q != null) ? q.val : 0;
      let sum = carry + x + y;
      carry = Math.floor(sum / 10);
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
      if (p != null) p = p.next;
      if (q != null) q = q.next;
    }
    if (carry > 0) {
      curr.next = new ListNode(carry);
    }
    return dummyHead.next;
  };`,
  "python": "class Solution:\r \ \  def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:\r \ \  dummyHead = ListNode(0)\r \ \  p = l1\r \ \  q = l2\r \ \  curr = dummyHead\r \ \  carry = 0\r \ \  while p or q:\r \ \  x = p.val if p else 0\r \ \  y = q.val if q else 0\r \ \  sum = carry + x + y\r \ \  carry = sum // 10\r \ \  curr.next = ListNode(sum % 10)\r \ \  curr = curr.next\r \ \  if p:\r \ \  p = p.next\r \ \  if q:\r \ \  q = q.next\r \ \  if carry > 0:\r \ \  curr.next = ListNode(carry)\r \ \  return dummyHead.next",
  "java": "class Solution {\r \ \  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\r \ \  ListNode dummyHead = new ListNode(0);\r \ \  ListNode p = l1, q = l2, curr = dummyHead;\r \ \  int carry = 0;\r \ \  while (p != null || q != null) {\r \ \  int x = (p != null) ? p.val : 0;\r \ \  int y = (q != null) ? q.val : 0;\r \ \  int sum = carry + x + y;\r \ \  carry = sum / 10;\r \ \  curr.next = new ListNode(sum % 10);\r \ \  curr = curr.next;\r \ \  if (p != null) p = p.next;\r \ \  if (q != null) q = q.next;\r \ \  }\r \ \  if (carry > 0) {\r \ \  curr.next = new ListNode(carry);\r \ \  }\r \ \  return dummyHead.next;\r \ \  }\r \ \ }",
  "c++": "class Solution {\r \ \  public:\r \ \  ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\r \ \  ListNode* dummyHead = new ListNode(0);\r \ \  ListNode* p = l1, * q = l2, * curr = dummyHead;\r \ \  int carry = 0;\r \ \  while (p != nullptr || q != nullptr) {\r \ \  int x = (p != nullptr) ? p->val : 0;\r \ \  int y = (q != nullptr) ? q->val : 0;\r \ \  int sum = carry + x + y;\r \ \  carry = sum / 10;\r \ \  curr->next = new ListNode(sum % 10);\r \ \  curr = curr->next;\r \ \  if (p != nullptr) p = p->next;\r \ \  if (q != nullptr) q = q->next;\r \ \  }\r \ \  if (carry > 0) {\r \ \  curr->next = new ListNode(carry);\r \ \  }\r \ \  return dummyHead->next;\r \ \  }\r \ \ };",
  'Time_Complexity': "O(max(m,n))",
  'Space_Complexity': "O(max(m,n))",
},

{
  "id": 3,
  "title": "Longest Substring Without Repeating Characters",
  "content": "Given a string, find the length of the longest substring without repeating characters.",
  "javascript": `var lengthOfLongestSubstring = function (s) {
    let n = s.length;
    let ans = 0;
    let map = new Map();
    for (let j = 0, i = 0; j < n; j++) {
      if (map.has(s[j])) {
        i = Math.max(map.get(s[j]), i);
      }
      ans = Math.max(ans, j - i + 1);
      map.set(s[j], j + 1);
    }
    return ans;
  };`,
  "python": "class Solution:\r \ \  def lengthOfLongestSubstring(self, s: str) -> int:\r \ \  n = len(s)\r \ \  ans = 0\r \ \  i = 0\r \ \  j = 0\r \ \  map = {}\r \ \  while j < n:\r \ \  if s[j] in map:\r \ \  i = max(map[s[j]], i)\r \ \  ans = max(ans, j - i + 1)\r \ \  map[s[j]] = j + 1\r \ \  j += 1\r \ \  return ans",
  "java": "class Solution {\r \ \  public int lengthOfLongestSubstring(String s) {\r \ \  int n = s.length(), ans = 0;\r \ \  Map<Character, Integer> map = new HashMap<>();\r \ \  for (int j = 0, i = 0; j < n; j++) {\r \ \  if (map.containsKey(s.charAt(j))) {\r \ \  i = Math.max(map.get(s.charAt(j)), i);\r \ \  }\r \ \  ans = Math.max(ans, j - i + 1);\r \ \  map.put(s.charAt(j), j + 1);\r \ \  }\r \ \  return ans;\r \ \  }\r \ \ }",
  "c++": "class Solution {\r \ \  public:\r \ \  int lengthOfLongestSubstring(string s) {\r \ \  int n = s.length(), ans = 0;\r \ \  unordered_map<char, int> map;\r \ \  for (int j = 0, i = 0; j < n; j++) {\r \ \  if (map.find(s[j]) != map.end()) {\r \ \  i = max(map[s[j]], i);\r \ \  }\r \ \  ans = max(ans, j - i + 1);\r \ \  map[s[j]] = j + 1;\r \ \  }\r \ \  return ans;\r \ \  }\r \ \ };",
  'Time_Complexity': "O(n)",
  'Space_Complexity': "O(n)",
},
{
  "id": 4,
  "title": "Median of Two Sorted Arrays",
  'content': "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
  "javascript": "var findMedianSortedArrays = function(nums1, nums2) {\r \ \  let m = nums1.length;\r \ \  let n = nums2.length;\r \ \  if (m > n) {\r \ \  let temp = nums1;\r \ \  nums1 = nums2;\r \ \  nums2 = temp;\r \ \  let tmp = m;\r \ \  m = n;\r \ \  n = tmp;\r \ \  }\r \ \  let iMin = 0, iMax = m, halfLen = Math.floor((m + n + 1) / 2);\r \ \  while (iMin <= iMax) {\r \ \  let i = Math.floor((iMin + iMax) / 2);\r \ \  let j = halfLen - i;\r \ \  if (i < iMax && nums2[j - 1] > nums1[i]) {\r \ \  iMin = i + 1;\r \ \  } else if (i > iMin && nums1[i - 1] > nums2[j]) {\r \ \  iMax = i - 1;\r \ \  } else {\r \ \  let maxLeft = 0;\r \ \  if (i === 0) {\r \ \  maxLeft = nums2[j - 1];\r \ \  } else if (j === 0) {\r \ \  maxLeft = nums1[i - 1];\r \ \  } else {\r \ \  maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);\r \ \  }\r \ \  if ((m + n) % 2 === 1) {\r \ \  return maxLeft;\r \ \  }\r \ \  let minRight = 0;\r \ \  if (i === m) {\r \ \  minRight = nums2[j];\r \ \  } else if (j === n) {\r \ \  minRight = nums1[i];\r \ \  } else {\r \ \  minRight = Math.min(nums2[j], nums1[i]);\r \ \  }\r \ \  return (maxLeft + minRight) / 2;\r \ \  }\r \ \  }\r \ \ };",
  "python": "class Solution:\r \ \  def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:\r \ \  m = len(nums1)\r \ \  n = len(nums2)\r \ \  if m > n:\r \ \  nums1, nums2, m, n = nums2, nums1, n, m\r \ \  if n == 0:\r \ \  raise ValueError\r \ \  imin, imax, half_len = 0, m, (m + n + 1) // 2\r \ \  while imin <= imax:\r \ \  i = (imin + imax) // 2\r \ \  j = half_len - i\r \ \  if i < m and nums2[j-1] > nums1[i]:\r \ \  imin = i + 1\r \ \  elif i > 0 and nums1[i-1] > nums2[j]:\r \ \  imax = i - 1\r \ \  else:\r \ \  if i == 0: max_of_left = nums2[j-1]\r \ \  elif j == 0: max_of_left = nums1[i-1]\r \ \  else: max_of_left = max(nums1[i-1], nums2[j-1])\r \ \  if (m + n) % 2 == 1:\r \ \  return max_of_left\r \ \  if i == m: min_of_right = nums2[j]\r \ \  elif j == n: min_of_right = nums1[i]\r \ \  else: min_of_right = min(nums1[i], nums2[j])\r \ \  return (max_of_left + min_of_right) / 2.0",
  "java": "class Solution {\r \ \  public double findMedianSortedArrays(int[] nums1, int[] nums2) {\r \ \  int m = nums1.length;\r \ \  int n = nums2.length;\r \ \  if (m > n) {\r \ \  int[] temp = nums1;\r \ \  nums1 = nums2;\r \ \  nums2 = temp;\r \ \  int tmp = m;\r \ \  m = n;\r \ \  n = tmp;\r \ \  }\r \ \  int iMin = 0, iMax = m, halfLen = (m + n + 1) / 2;\r \ \  while (iMin <= iMax) {\r \ \  int i = (iMin + iMax) / 2;\r \ \  int j = halfLen - i;\r \ \  if (i < iMax && nums2[j - 1] > nums1[i]) {\r \ \  iMin = i + 1;\r \ \  } else if (i > iMin && nums1[i - 1] > nums2[j]) {\r \ \  iMax = i - 1;\r \ \  } else {\r \ \  int maxLeft = 0;\r \ \  if (i == 0) {\r \ \  maxLeft = nums2[j - 1];\r \ \  } else if (j == 0) {\r \ \  maxLeft = nums1[i - 1];\r \ \  } else {\r \ \  maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);\r \ \  }\r \ \  if ((m + n) % 2 == 1) {\r \ \  return maxLeft;\r \ \  }\r \ \  int minRight = 0;\r \ \  if (i == m) {\r \ \  minRight = nums2[j];\r \ \  } else if (j == n) {\r \ \  minRight = nums1[i];\r \ \  } else {\r \ \  minRight = Math.min(nums2[j], nums1[i]);\r \ \  }\r \ \  return (maxLeft + minRight) / 2.0;\r \ \  }\r \ \  }\r \ \  return 0.0;\r \ \  }\r \ \ }",
  "c++": "class Solution {\r \ \  public:\r \ \  double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\r \ \  int m = nums1.size();\r \ \  int n = nums2.size();\r \ \  if (m > n) {\r \ \  vector<int> temp = nums1;\r \ \  nums1 = nums2;\r \ \  nums2 = temp;\r \ \  int tmp = m;\r \ \  m = n;\r \ \  n = tmp;\r \ \  }\r \ \  int iMin = 0, iMax = m, halfLen = (m + n + 1) / 2;\r \ \  while (iMin <= iMax) {\r \ \  int i = (iMin + iMax) / 2;\r \ \  int j = halfLen - i;\r \ \  if (i < iMax && nums2[j - 1] > nums1[i]) {\r \ \  iMin = i + 1;\r \ \  } else if (i > iMin && nums1[i - 1] > nums2[j]) {\r \ \  iMax = i - 1;\r \ \  } else {\r \ \  int maxLeft = 0;\r \ \  if (i == 0) {\r \ \  maxLeft = nums2[j - 1];\r \ \  } else if (j == 0) {\r \ \  maxLeft = nums1[i - 1];\r \ \  } else {\r \ \  maxLeft = max(nums1[i - 1], nums2[j - 1]);\r \ \  }\r \ \  if ((m + n) % 2 == 1) {\r \ \  return maxLeft;\r \ \  }\r \ \  int minRight = 0;\r \ \  if (i == m) {\r \ \  minRight = nums2[j];\r \ \  } else if (j == n) {\r \ \  minRight = nums1[i];\r \ \  } else {\r \ \  minRight = min(nums2[j], nums1[i]);\r \ \  }\r \ \  return (maxLeft + minRight) / 2.0;\r \ \  }\r \ \  }\r \ \  return 0.0;\r \ \  }\r \ \ };",
  "Time_Complexity": "O(log(min(m,n)))",
  "Space_Complexity": "O(1)"
},
{
  "id": 5,
  "title": "Longest Palindromic Substring",
  "content": "Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.",
  "javascript": "var longestPalindrome = function(s) {\r \ \  let start = 0;\r \ \  let end = 0;\r \ \  for (let i = 0; i < s.length; i++) {\r \ \  let len1 = expandAroundCenter(s, i, i);\r \ \  let len2 = expandAroundCenter(s, i, i + 1);\r \ \  let len = Math.max(len1, len2);\r \ \  if (len > end - start) {\r \ \  start = i - Math.floor((len - 1) / 2);\r \ \  end = i + Math.floor(len / 2);\r \ \  }\r \ \  }\r \ \  return s.substring(start, end + 1);\r \ \  };\r \ \  var expandAroundCenter = function(s, left, right) {\r \ \  let L = left;\r \ \  let R = right;\r \ \  while (L >= 0 && R < s.length && s[L] === s[R]) {\r \ \  L--;\r \ \  R++;\r \ \  }\r \ \  return R - L - 1;\r \ \  };",
  "java": "class Solution {\r \ \  public String longestPalindrome(String s) {\r \ \  int start = 0;\r \ \  int end = 0;\r \ \  for (int i = 0; i < s.length(); i++) {\r \ \  int len1 = expandAroundCenter(s, i, i);\r \ \  int len2 = expandAroundCenter(s, i, i + 1);\r \ \  int len = Math.max(len1, len2);\r \ \  if (len > end - start) {\r \ \  start = i - (len - 1) / 2;\r \ \  end = i + len / 2;\r \ \  }\r \ \  }\r \ \  return s.substring(start, end + 1);\r \ \  }\r \ \  private int expandAroundCenter(String s, int left, int right) {\r \ \  int L = left;\r \ \  int R = right;\r \ \  while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {\r \ \  L--;\r \ \  R++;\r \ \  }\r \ \  return R - L - 1;\r \ \  }\r \ \ }",
  "c++": "class Solution {\r \ \  public:\r \ \  string longestPalindrome(string s) {\r \ \  int start = 0;\r \ \  int end = 0;\r \ \  for (int i = 0; i < s.length(); i++) {\r \ \  int len1 = expandAroundCenter(s, i, i);\r \ \  int len2 = expandAroundCenter(s, i, i + 1);\r \ \  int len = max(len1, len2);\r \ \  if (len > end - start) {\r \ \  start = i - (len - 1) / 2;\r \ \  end = i + len / 2;\r \ \  }\r \ \  }\r \ \  return s.substr(start, end - start + 1);\r \ \  }\r \ \  private:\r \ \  int expandAroundCenter(string s, int left, int right) {\r \ \  int L = left;\r \ \  int R = right;\r \ \  while (L >= 0 && R < s.length() && s[L] == s[R]) {\r \ \  L--;\r \ \  R++;\r \ \  }\r \ \  return R - L - 1;\r \ \  }\r \ \ };",
  "Time_Complexity": "O(n^2)",
  "Space_Complexity": "O(1)"
},
{
  "id": 6,
  "title": "ZigZag Conversion",
  "content": "The string \"PAYPALISHIRING\" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)\r \ \ \n\r \ \ \nP   A   H   N\r \ \ \nA P L S I I G\r \ \ \nY   I   R\r \ \ \nAnd then read line by line: \"PAHNAPLSIIGYIR\"\r \ \ \nWrite the code that will take a string and make this conversion given a number of rows:\r \ \ \n\r \ \ \nstring convert(string s, int numRows);\r \ \ \nExample 1:\r \ \ \n\r \ \ \nInput: s = \"PAYPALISHIRING\", numRows = 3\r \ \ \nOutput: \"PAHNAPLSIIGYIR\"\r \ \ \nExample 2:\r \ \ \n\r \ \ \nInput: s = \"PAYPALISHIRING\", numRows = 4\r \ \ \nOutput[...]: \"PINALSIGYAHRPI\"\r \ \ \nExplanation:\r \ \ \n\r \ \ \nP     I    N\r \ \ \nA   L S  I G\r \ \ \nY A   H R\r \ \ \nP     I",
  "javascript": "var convert = function(s, numRows) {\r \ \  if (numRows === 1) return s;\r \ \  let rows = [];\r \ \  for (let i = 0; i < Math.min(numRows, s.length); i++) {\r \ \  rows.push(\"\");\r \ \  }\r \ \  let curRow = 0;\r \ \  let goingDown = false;\r \ \  for (let c of s) {\r \ \  rows[curRow] += c;\r \ \  if (curRow === 0 || curRow === numRows - 1) {\r \ \  goingDown = !goingDown;\r \ \  }\r \ \  curRow += goingDown ? 1 : -1;\r \ \  }\r \ \  let ret = \"\";\r \ \  for (let row of rows) {\r \ \  ret += row;\r \ \  }\r \ \  return ret;\r \ \  };",
  "java": "class Solution {\r \ \  public String convert(String s, int numRows) {\r \ \  if (numRows == 1) {\r \ \  return s;\r \ \  }\r \ \  List<StringBuilder> rows = new ArrayList();\r \ \  for (int i = 0; i < Math.min(numRows, s.length()); i++) {\r \ \  rows.add(new StringBuilder());\r \ \  }\r \ \  int curRow = 0;\r \ \  boolean goingDown = false;\r \ \  for (char c : s.toCharArray()) {\r \ \  rows.get(curRow).append(c);\r \ \  if (curRow == 0 || curRow == numRows - 1) {\r \ \  goingDown = !goingDown;\r \ \  }\r \ \  curRow += goingDown ? 1 : -1;\r \ \  }\r \ \  StringBuilder ret = new StringBuilder();\r \ \  for (StringBuilder row : rows) {\r \ \  ret.append(row);\r \ \  }\r \ \  return ret.toString();\r \ \  }\r \ \ }",
  "c++": "class Solution {\r \ \  public:\r \ \  string convert(string s, int numRows) {\r \ \  if (numRows == 1) {\r \ \  return s;\r \ \  }\r \ \  vector<string> rows(min(numRows, int(s.length())));\r \ \  int curRow = 0;\r \ \  bool goingDown = false;\r \ \  for (char c : s) {\r \ \  rows[curRow] += c;\r \ \  if (curRow == 0 || curRow == numRows - 1) {\r \ \  goingDown = !goingDown;\r \ \  }\r \ \  curRow += goingDown ? 1 : -1;\r \ \  }\r \ \  string ret;\r \ \  for (string row : rows) {\r \ \  ret += row;\r \ \  }\r \ \  return ret;\r \ \  }\r \ \ };",
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(n)"
},
{
  "id": 7,
  "title": "Reverse Integer",
  "content": "Given a 32-bit signed integer, reverse digits of an integer.\r \ \ \n\r \ \ \nExample 1:\r \ \ \n\r \ \ \nInput: 123\r \ \ \nOutput: 321\r \ \ \nExample 2:\r \ \ \n\r \ \ \nInput: -123\r \ \ \nOutput: -321\r \ \ \nExample 3:\r \ \ \n\r \ \ \nInput: 120\r \ \ \nOutput: 21\r \ \ \nNote:\r \ \ \nAssume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.",
  "javascript": "var reverse = function(x) {\r \ \  let rev = 0;\r \ \  while (x !== 0) {\r \ \  let pop = x % 10;\r \ \  x = parseInt(x / 10);\r \ \  if (rev > 214748364 || (rev === 214748364 && pop > 7)) {\r \ \  return 0;\r \ \  }\r \ \  if (rev < -214748364 || (rev === -214748364 && pop < -8)) {\r \ \  return 0;\r \ \  }\r \ \  rev = rev * 10 + pop;\r \ \  }\r \ \  return rev;\r \ \  };",
  "java": "class Solution {\r \ \  public int reverse(int x) {\r \ \  int rev = 0;\r \ \  while (x != 0) {\r \ \  int pop = x % 10;\r \ \  x /= 10;\r \ \  if (rev > Integer.MAX_VALUE/10 || (rev == Integer.MAX_VALUE / 10 && pop > 7)) {\r \ \  return 0;\r \ \  }\r \ \  if (rev < Integer.MIN_VALUE/10 || (rev == Integer.MIN_VALUE / 10 && pop < -8)) {\r \ \  return 0;\r \ \  }\r \ \  rev = rev * 10 + pop;\r \ \  }\r \ \  return rev;\r \ \  }\r \ \ }",
  "c++": "class Solution {\r \ \  public:\r \ \  int reverse(int x) {\r \ \  int rev = 0;\r \ \  while (x != 0) {\r \ \  int pop = x % 10;\r \ \  x /= 10;\r \ \  if (rev > INT_MAX/10 || (rev == INT_MAX / 10 && pop > 7)) {\r \ \  return 0;\r \ \  }\r \ \  if (rev < INT_MIN/10 || (rev == INT_MIN / 10 && pop < -8)) {\r \ \  return 0;\r \ \  }\r \ \  rev = rev * 10 + pop;\r \ \  }\r \ \  return rev;\r \ \  }\r \ \ };",
  "Time_Complexity": "O(log(x))",
  "Space_Complexity": "O(1)"
},
{
  "id": 8,
  "title": "String to Integer (atoi)",
  "content": `Implement atoi which converts a string to an integer.  

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.`
  ,
  "javascript": "var myAtoi = function(str) {\r \ \  let result = 0;\r \ \  let sign = 1;\r \ \  let i = 0;\r \ \  while (str[i] === ' ') {\r \ \  i++;\r \ \  }\r \ \  if (str[i] === '+' || str[i] === '-') {\r \ \  sign = str[i] === '+' ? 1 : -1;\r \ \  i++;\r \ \  }\r \ \  while (str[i] >= '0' && str[i] <= '9') {\r \ \  result = result * 10 + (str[i] - '0');\r \ \  if (result > 2147483648) {\r \ \  return sign === 1 ? 2147483647 : -2147483648;\r \ \  }\r \ \  i++;\r \ \  }\r \ \  return result * sign;\r \ \  };",
  "java": "class Solution {\r \ \  public int myAtoi(String str) {\r \ \  int result = 0;\r \ \  int sign = 1;\r \ \  int i = 0;\r \ \  while (str.charAt(i) == ' ') {\r \ \  i++;\r \ \  }\r \ \  if (str.charAt(i) == '+' || str.charAt(i) == '-') {\r \ \  sign = str.charAt(i) == '+' ? 1 : -1;\r \ \  i++;\r \ \  }\r \ \  while (str.charAt(i) >= '0' && str.charAt(i) <= '9') {\r \ \  result = result * 10 + (str.charAt(i) - '0');\r \ \  if (result > 2147483648L) {\r \ \  return sign == 1 ? 2147483647 : -2147483648;\r \ \  }\r \ \  i++;\r \ \  }\r \ \  return result * sign;\r \ \  }\r \ \ }",
  "c++": "class Solution {\r \ \  public:\r \ \  int myAtoi(string str) {\r \ \  int result = 0;\r \ \  int sign = 1;\r \ \  int i = 0;\r \ \  while (str[i] == ' ') {\r \ \  i++;\r \ \  }\r \ \  if (str[i] == '+' || str[i] == '-') {\r \ \  sign = str[i] == '+' ? 1 : -1;\r \ \  i++;\r \ \  }\r \ \  while (str[i] >= '0' && str[i] <= '9') {\r \ \  result = result * 10 + (str[i] - '0');\r \ \  if (result > 2147483648L) {\r \ \  return sign == 1 ? 2147483647 : -2147483648;\r \ \  }\r \ \  i++;\r \ \  }\r \ \  return result * sign;\r \ \  }\r \ \ };",
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(1)"
},
{
  "id": 9,
  "title": "Palindrome Number",
  "content": `Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.`
  ,
  "javascript": "var isPalindrome = function(x) {\r \ \  if (x < 0) {\r \ \  return false;\r \ \  }\r \ \  let rev = 0;\r \ \  let num = x;\r \ \  while (num > 0) {\r \ \  rev = rev * 10 + num % 10;\r \ \  num = Math.floor(num / 10);\r \ \  }\r \ \  return rev === x;\r \ \  };",
  "java": "class Solution {\r \ \  public boolean isPalindrome(int x) {\r \ \  if (x < 0) {\r \ \  return false;\r \ \  }\r \ \  int rev = 0;\r \ \  int num = x;\r \ \  while (num > 0) {\r \ \  rev = rev * 10 + num % 10;\r \ \  num /= 10;\r \ \  }\r \ \  return rev == x;\r \ \  }\r \ \ }",
  "c++": "class Solution {\r \ \  public:\r \ \  bool isPalindrome(int x) {\r \ \  if (x < 0) {\r \ \  return false;\r \ \  }\r \ \  int rev = 0;\r \ \  int num = x;\r \ \  while (num > 0) {\r \ \  rev = rev * 10 + num % 10;\r \ \  num /= 10;\r \ \  }\r \ \  return rev == x;\r \ \  }\r \ \ };",
  "Time_Complexity": "O(log(x))",
  "Space_Complexity": "O(1)",
}
]