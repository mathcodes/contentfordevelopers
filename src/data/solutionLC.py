# export const LeetCodeSolutions = [
#   {
#   "id": 1,
#   "title": "Two Sum",
#   "content": "Given an array of integers, return indices of the two numbers such that\r they add up to a specific target.\r \ \  You may assume that each input would have exactly one solution, and you may not use the same element twice.\r \ \  Example:\r \ \  Given nums = [2, 7, 11, 15], target = 9,\r \ \  Because nums[0] + nums[1] = 2 + 7 = 9,\r \ \  return [0, 1].",
#   "javascript": "var twoSum = function(nums, target) {\r \ \  const map = new Map();\r \ \ \ \   for (let i = 0; i < nums.length; i++) {\r \ \ \ \ \ \ \ \ \ const complement = target - nums[i];\r \ \ \ \ \ \ \ \ \ if (map.has(complement)) {\r \ \ \ \ \ \ \ \ \ \ \ return [map.get(complement), i];\r \ \ \ \ \ \ \ \  }\r \ \ \ \ \ \ \ \  map.set(nums[i], i);\r \ \ \ \ \  }\r };",
#   "python": "class Solution:\r \ \  def twoSum(self, nums: List[int], target: int) -> List[int]:\r \ \  map = {}\r \ \  for i in range(len(nums)):\r \ \  complement = target - nums[i]\r \ \  if complement in map:\r \ \  return [map[complement], i]\r \ \  map[nums[i]] = i",
#   "java": "class Solution {\r \ \  public int[] twoSum(int[] nums, int target) {\r \ \  Map<Integer, Integer> map = new HashMap<>();\r \ \  for (int i = 0; i < nums.length; i++) {\r \ \  int complement = target - nums[i];\r \ \  if (map.containsKey(complement)) {\r \ \  return new int[] { map.get(complement), i };\r \ \  }\r \ \  map.put(nums[i], i);\r \ \  }\r \ \  throw new IllegalArgumentException(\"No two sum solution\");\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  vector<int> twoSum(vector<int>& nums, int target) {\r \ \  unordered_map<int, int> map;\r \ \  for (int i = 0; i < nums.size(); i++) {\r \ \  int complement = target - nums[i];\r \ \  if (map.find(complement) != map.end()) {\r \ \  return { map[complement], i };\r \ \  }\r \ \  map[nums[i]] = i;\r \ \  }\r \ \  throw runtime_error(\"No two sum solution\");\r \ \  }\r \ \ };",
#   'Time_Complexity': "O(n)",
#   'Space_Complexity': "O(n)",
#   'image':'https://raw.githubusercontent.com/mathcodes/contentfordevelopers/main/src/assets/LeetCode/0001.TwoSum/1.twoSum.png',
#   'video':'https://www.youtube.com/watch?v=_EDDhOtvH1Y'
# },
# {
#   "id": 2,
#   "title": "Add Two Numbers",
#   "content": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.\r \ \  You may assume the two numbers do not contain any leading zero, except the number 0 itself.\r \ \  Example:\r \ \  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)\r \ \  Output: 7 -> 0 -> 8\r \ \  Explanation: 342 + 465 = 807.",
#   "javascript": `var addTwoNumbers = function(l1, l2) {

#     let array1 = []
#     let array2 = []

#     while(l1!==null){
#         array1.push(l1.val)
#         l1 = l1.next
#     }

#     while(l2!==null){
#         array2.push(l2.val)
#         l2 = l2.next
#     }

#     let num1 = array1.reverse().join('')
#     let num2 = array2.reverse().join('')


#     let resNumber = BigInt(num1) + BigInt(num2)
#     let arr3 = String(resNumber).split('').reverse()

#     let newHead = new ListNode('')
#     let newPointer = newHead

#     for(let i=0;i<arr3.length;i++){
#         let node = new ListNode(arr3[i])
#         newPointer.next=node
#         newPointer = node
#     }

#     return newHead.next

#   };


# // The current implementation of the function has a time complexity of O(n + m + k), where n is the length of l1, m is the length of l2, and k is the length of the result list. The space complexity is O(n + m + k) as well, due to the use of the two arrays and the result list.

# // To optimize for time and space, we can avoid using the two arrays to store the values of l1 and l2, and instead add the corresponding values directly while iterating through the linked lists. This would reduce the space complexity to O(k), where k is the length of the result list, and the time complexity to O(max(n, m) + k), which is better than the original implementation.

# // Here's an optimized implementation:

# var addTwoNumbers = function(l1, l2) {
#     let carry = 0
#     let newHead = new ListNode('')
#     let newPointer = newHead

#     while(l1 || l2 || carry) {
#       let val1 = l1 ? l1.val : 0
#       let val2 = l2 ? l2.val : 0
#       let sum = val1 + val2 + carry

#       carry = sum > 9 ? 1 : 0
#       let digit = sum % 10

#       let newNode = new ListNode(digit)
#       newPointer.next = newNode
#       newPointer = newNode

#       l1 = l1 ? l1.next : null
#       l2 = l2 ? l2.next : null
#     }

#     return newHead.next
#   }


# //   In this implementation, we use a single while loop to iterate through both l1 and l2 simultaneously, adding the corresponding values and keeping track of the carry. We create the new nodes and add them to the result list as we go. This way, we don't need to store the values of l1 and l2 separately in arrays, and can directly add them to the result list.
# `,
#   "python": "class Solution:\r \ \  def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:\r \ \  dummyHead = ListNode(0)\r \ \  p = l1\r \ \  q = l2\r \ \  curr = dummyHead\r \ \  carry = 0\r \ \  while p or q:\r \ \  x = p.val if p else 0\r \ \  y = q.val if q else 0\r \ \  sum = carry + x + y\r \ \  carry = sum // 10\r \ \  curr.next = ListNode(sum % 10)\r \ \  curr = curr.next\r \ \  if p:\r \ \  p = p.next\r \ \  if q:\r \ \  q = q.next\r \ \  if carry > 0:\r \ \  curr.next = ListNode(carry)\r \ \  return dummyHead.next",
#   "java": "class Solution {\r \ \  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\r \ \  ListNode dummyHead = new ListNode(0);\r \ \  ListNode p = l1, q = l2, curr = dummyHead;\r \ \  int carry = 0;\r \ \  while (p != null || q != null) {\r \ \  int x = (p != null) ? p.val : 0;\r \ \  int y = (q != null) ? q.val : 0;\r \ \  int sum = carry + x + y;\r \ \  carry = sum / 10;\r \ \  curr.next = new ListNode(sum % 10);\r \ \  curr = curr.next;\r \ \  if (p != null) p = p.next;\r \ \  if (q != null) q = q.next;\r \ \  }\r \ \  if (carry > 0) {\r \ \  curr.next = new ListNode(carry);\r \ \  }\r \ \  return dummyHead.next;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\r \ \  ListNode* dummyHead = new ListNode(0);\r \ \  ListNode* p = l1, * q = l2, * curr = dummyHead;\r \ \  int carry = 0;\r \ \  while (p != nullptr || q != nullptr) {\r \ \  int x = (p != nullptr) ? p->val : 0;\r \ \  int y = (q != nullptr) ? q->val : 0;\r \ \  int sum = carry + x + y;\r \ \  carry = sum / 10;\r \ \  curr->next = new ListNode(sum % 10);\r \ \  curr = curr->next;\r \ \  if (p != nullptr) p = p->next;\r \ \  if (q != nullptr) q = q->next;\r \ \  }\r \ \  if (carry > 0) {\r \ \  curr->next = new ListNode(carry);\r \ \  }\r \ \  return dummyHead->next;\r \ \  }\r \ \ };",
#   'Time_Complexity': "O(max(m,n))",
#   'Space_Complexity': "O(max(m,n))",
#   'image':'https://raw.githubusercontent.com/mathcodes/contentfordevelopers/main/src/assets/LeetCode/0002.AddTwoNumbers/1.addTwoNumbers.png',
# },

# {
#   "id": 3,
#   "title": "Longest Substring Without Repeating Characters",
#   "content": "Given a string, find the length of the longest substring without repeating characters.",
#   "javascript": `var lengthOfLongestSubstring = function (s) {
#     let n = s.length;
#     let ans = 0;
#     let map = new Map();
#     for (let j = 0, i = 0; j < n; j++) {
#       if (map.has(s[j])) {
#         i = Math.max(map.get(s[j]), i);
#       }
#       ans = Math.max(ans, j - i + 1);
#       map.set(s[j], j + 1);
#     }
#     return ans;
#   };`,
#   "python": "class Solution:\r \ \  def lengthOfLongestSubstring(self, s: str) -> int:\r \ \  n = len(s)\r \ \  ans = 0\r \ \  i = 0\r \ \  j = 0\r \ \  map = {}\r \ \  while j < n:\r \ \  if s[j] in map:\r \ \  i = max(map[s[j]], i)\r \ \  ans = max(ans, j - i + 1)\r \ \  map[s[j]] = j + 1\r \ \  j += 1\r \ \  return ans",
#   "java": "class Solution {\r \ \  public int lengthOfLongestSubstring(String s) {\r \ \  int n = s.length(), ans = 0;\r \ \  Map<Character, Integer> map = new HashMap<>();\r \ \  for (int j = 0, i = 0; j < n; j++) {\r \ \  if (map.containsKey(s.charAt(j))) {\r \ \  i = Math.max(map.get(s.charAt(j)), i);\r \ \  }\r \ \  ans = Math.max(ans, j - i + 1);\r \ \  map.put(s.charAt(j), j + 1);\r \ \  }\r \ \  return ans;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  int lengthOfLongestSubstring(string s) {\r \ \  int n = s.length(), ans = 0;\r \ \  unordered_map<char, int> map;\r \ \  for (int j = 0, i = 0; j < n; j++) {\r \ \  if (map.find(s[j]) != map.end()) {\r \ \  i = max(map[s[j]], i);\r \ \  }\r \ \  ans = max(ans, j - i + 1);\r \ \  map[s[j]] = j + 1;\r \ \  }\r \ \  return ans;\r \ \  }\r \ \ };",
#   'Time_Complexity': "O(n)",
#   'Space_Complexity': "O(n)",
# },
# {
#   "id": 4,
#   "title": "Median of Two Sorted Arrays",
#   'content': "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
#   "javascript": "var findMedianSortedArrays = function(nums1, nums2) {\r \ \  let m = nums1.length;\r \ \  let n = nums2.length;\r \ \  if (m > n) {\r \ \  let temp = nums1;\r \ \  nums1 = nums2;\r \ \  nums2 = temp;\r \ \  let tmp = m;\r \ \  m = n;\r \ \  n = tmp;\r \ \  }\r \ \  let iMin = 0, iMax = m, halfLen = Math.floor((m + n + 1) / 2);\r \ \  while (iMin <= iMax) {\r \ \  let i = Math.floor((iMin + iMax) / 2);\r \ \  let j = halfLen - i;\r \ \  if (i < iMax && nums2[j - 1] > nums1[i]) {\r \ \  iMin = i + 1;\r \ \  } else if (i > iMin && nums1[i - 1] > nums2[j]) {\r \ \  iMax = i - 1;\r \ \  } else {\r \ \  let maxLeft = 0;\r \ \  if (i === 0) {\r \ \  maxLeft = nums2[j - 1];\r \ \  } else if (j === 0) {\r \ \  maxLeft = nums1[i - 1];\r \ \  } else {\r \ \  maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);\r \ \  }\r \ \  if ((m + n) % 2 === 1) {\r \ \  return maxLeft;\r \ \  }\r \ \  let minRight = 0;\r \ \  if (i === m) {\r \ \  minRight = nums2[j];\r \ \  } else if (j === n) {\r \ \  minRight = nums1[i];\r \ \  } else {\r \ \  minRight = Math.min(nums2[j], nums1[i]);\r \ \  }\r \ \  return (maxLeft + minRight) / 2;\r \ \  }\r \ \  }\r \ \ };",
#   "python": "class Solution:\r \ \  def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:\r \ \  m = len(nums1)\r \ \  n = len(nums2)\r \ \  if m > n:\r \ \  nums1, nums2, m, n = nums2, nums1, n, m\r \ \  if n == 0:\r \ \  raise ValueError\r \ \  imin, imax, half_len = 0, m, (m + n + 1) // 2\r \ \  while imin <= imax:\r \ \  i = (imin + imax) // 2\r \ \  j = half_len - i\r \ \  if i < m and nums2[j-1] > nums1[i]:\r \ \  imin = i + 1\r \ \  elif i > 0 and nums1[i-1] > nums2[j]:\r \ \  imax = i - 1\r \ \  else:\r \ \  if i == 0: max_of_left = nums2[j-1]\r \ \  elif j == 0: max_of_left = nums1[i-1]\r \ \  else: max_of_left = max(nums1[i-1], nums2[j-1])\r \ \  if (m + n) % 2 == 1:\r \ \  return max_of_left\r \ \  if i == m: min_of_right = nums2[j]\r \ \  elif j == n: min_of_right = nums1[i]\r \ \  else: min_of_right = min(nums1[i], nums2[j])\r \ \  return (max_of_left + min_of_right) / 2.0",
#   "java": "class Solution {\r \ \  public double findMedianSortedArrays(int[] nums1, int[] nums2) {\r \ \  int m = nums1.length;\r \ \  int n = nums2.length;\r \ \  if (m > n) {\r \ \  int[] temp = nums1;\r \ \  nums1 = nums2;\r \ \  nums2 = temp;\r \ \  int tmp = m;\r \ \  m = n;\r \ \  n = tmp;\r \ \  }\r \ \  int iMin = 0, iMax = m, halfLen = (m + n + 1) / 2;\r \ \  while (iMin <= iMax) {\r \ \  int i = (iMin + iMax) / 2;\r \ \  int j = halfLen - i;\r \ \  if (i < iMax && nums2[j - 1] > nums1[i]) {\r \ \  iMin = i + 1;\r \ \  } else if (i > iMin && nums1[i - 1] > nums2[j]) {\r \ \  iMax = i - 1;\r \ \  } else {\r \ \  int maxLeft = 0;\r \ \  if (i == 0) {\r \ \  maxLeft = nums2[j - 1];\r \ \  } else if (j == 0) {\r \ \  maxLeft = nums1[i - 1];\r \ \  } else {\r \ \  maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);\r \ \  }\r \ \  if ((m + n) % 2 == 1) {\r \ \  return maxLeft;\r \ \  }\r \ \  int minRight = 0;\r \ \  if (i == m) {\r \ \  minRight = nums2[j];\r \ \  } else if (j == n) {\r \ \  minRight = nums1[i];\r \ \  } else {\r \ \  minRight = Math.min(nums2[j], nums1[i]);\r \ \  }\r \ \  return (maxLeft + minRight) / 2.0;\r \ \  }\r \ \  }\r \ \  return 0.0;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\r \ \  int m = nums1.size();\r \ \  int n = nums2.size();\r \ \  if (m > n) {\r \ \  vector<int> temp = nums1;\r \ \  nums1 = nums2;\r \ \  nums2 = temp;\r \ \  int tmp = m;\r \ \  m = n;\r \ \  n = tmp;\r \ \  }\r \ \  int iMin = 0, iMax = m, halfLen = (m + n + 1) / 2;\r \ \  while (iMin <= iMax) {\r \ \  int i = (iMin + iMax) / 2;\r \ \  int j = halfLen - i;\r \ \  if (i < iMax && nums2[j - 1] > nums1[i]) {\r \ \  iMin = i + 1;\r \ \  } else if (i > iMin && nums1[i - 1] > nums2[j]) {\r \ \  iMax = i - 1;\r \ \  } else {\r \ \  int maxLeft = 0;\r \ \  if (i == 0) {\r \ \  maxLeft = nums2[j - 1];\r \ \  } else if (j == 0) {\r \ \  maxLeft = nums1[i - 1];\r \ \  } else {\r \ \  maxLeft = max(nums1[i - 1], nums2[j - 1]);\r \ \  }\r \ \  if ((m + n) % 2 == 1) {\r \ \  return maxLeft;\r \ \  }\r \ \  int minRight = 0;\r \ \  if (i == m) {\r \ \  minRight = nums2[j];\r \ \  } else if (j == n) {\r \ \  minRight = nums1[i];\r \ \  } else {\r \ \  minRight = min(nums2[j], nums1[i]);\r \ \  }\r \ \  return (maxLeft + minRight) / 2.0;\r \ \  }\r \ \  }\r \ \  return 0.0;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(log(min(m,n)))",
#   "Space_Complexity": "O(1)"
# },
# {
#   "id": 5,
#   "title": "Longest Palindromic Substring",
#   "content": "Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.",
#   "javascript": "var longestPalindrome = function(s) {\r \ \  let start = 0;\r \ \  let end = 0;\r \ \  for (let i = 0; i < s.length; i++) {\r \ \  let len1 = expandAroundCenter(s, i, i);\r \ \  let len2 = expandAroundCenter(s, i, i + 1);\r \ \  let len = Math.max(len1, len2);\r \ \  if (len > end - start) {\r \ \  start = i - Math.floor((len - 1) / 2);\r \ \  end = i + Math.floor(len / 2);\r \ \  }\r \ \  }\r \ \  return s.substring(start, end + 1);\r \ \  };\r \ \  var expandAroundCenter = function(s, left, right) {\r \ \  let L = left;\r \ \  let R = right;\r \ \  while (L >= 0 && R < s.length && s[L] === s[R]) {\r \ \  L--;\r \ \  R++;\r \ \  }\r \ \  return R - L - 1;\r \ \  };",
#   "java": "class Solution {\r \ \  public String longestPalindrome(String s) {\r \ \  int start = 0;\r \ \  int end = 0;\r \ \  for (int i = 0; i < s.length(); i++) {\r \ \  int len1 = expandAroundCenter(s, i, i);\r \ \  int len2 = expandAroundCenter(s, i, i + 1);\r \ \  int len = Math.max(len1, len2);\r \ \  if (len > end - start) {\r \ \  start = i - (len - 1) / 2;\r \ \  end = i + len / 2;\r \ \  }\r \ \  }\r \ \  return s.substring(start, end + 1);\r \ \  }\r \ \  private int expandAroundCenter(String s, int left, int right) {\r \ \  int L = left;\r \ \  int R = right;\r \ \  while (L >= 0 && R < s.length() && s.charAt(L) == s.charAt(R)) {\r \ \  L--;\r \ \  R++;\r \ \  }\r \ \  return R - L - 1;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  string longestPalindrome(string s) {\r \ \  int start = 0;\r \ \  int end = 0;\r \ \  for (int i = 0; i < s.length(); i++) {\r \ \  int len1 = expandAroundCenter(s, i, i);\r \ \  int len2 = expandAroundCenter(s, i, i + 1);\r \ \  int len = max(len1, len2);\r \ \  if (len > end - start) {\r \ \  start = i - (len - 1) / 2;\r \ \  end = i + len / 2;\r \ \  }\r \ \  }\r \ \  return s.substr(start, end - start + 1);\r \ \  }\r \ \  private:\r \ \  int expandAroundCenter(string s, int left, int right) {\r \ \  int L = left;\r \ \  int R = right;\r \ \  while (L >= 0 && R < s.length() && s[L] == s[R]) {\r \ \  L--;\r \ \  R++;\r \ \  }\r \ \  return R - L - 1;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(n^2)",
#   "Space_Complexity": "O(1)",
#   "image": "https://raw.githubusercontent.com/mathcodes/contentfordevelopers/main/src/assets/LeetCode/0005.%20Longest%20Palindromic%20Substring/longestPalindromeLG.png",
# },
# {
#   "id": 6,
#   "title": "ZigZag Conversion",
#   "content": "The string \"PAYPALISHIRING\" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)\r \ \ \n\r \ \ \nP   A   H   N\r \ \ \nA P L S I I G\r \ \ \nY   I   R\r \ \ \nAnd then read line by line: \"PAHNAPLSIIGYIR\"\r \ \ \nWrite the code that will take a string and make this conversion given a number of rows:\r \ \ \n\r \ \ \nstring convert(string s, int numRows);\r \ \ \nExample 1:\r \ \ \n\r \ \ \nInput: s = \"PAYPALISHIRING\", numRows = 3\r \ \ \nOutput: \"PAHNAPLSIIGYIR\"\r \ \ \nExample 2:\r \ \ \n\r \ \ \nInput: s = \"PAYPALISHIRING\", numRows = 4\r \ \ \nOutput[...]: \"PINALSIGYAHRPI\"\r \ \ \nExplanation:\r \ \ \n\r \ \ \nP     I    N\r \ \ \nA   L S  I G\r \ \ \nY A   H R\r \ \ \nP     I",
#   "javascript": "var convert = function(s, numRows) {\r \ \  if (numRows === 1) return s;\r \ \  let rows = [];\r \ \  for (let i = 0; i < Math.min(numRows, s.length); i++) {\r \ \  rows.push(\"\");\r \ \  }\r \ \  let curRow = 0;\r \ \  let goingDown = false;\r \ \  for (let c of s) {\r \ \  rows[curRow] += c;\r \ \  if (curRow === 0 || curRow === numRows - 1) {\r \ \  goingDown = !goingDown;\r \ \  }\r \ \  curRow += goingDown ? 1 : -1;\r \ \  }\r \ \  let ret = \"\";\r \ \  for (let row of rows) {\r \ \  ret += row;\r \ \  }\r \ \  return ret;\r \ \  };",
#   "java": "class Solution {\r \ \  public String convert(String s, int numRows) {\r \ \  if (numRows == 1) {\r \ \  return s;\r \ \  }\r \ \  List<StringBuilder> rows = new ArrayList();\r \ \  for (int i = 0; i < Math.min(numRows, s.length()); i++) {\r \ \  rows.add(new StringBuilder());\r \ \  }\r \ \  int curRow = 0;\r \ \  boolean goingDown = false;\r \ \  for (char c : s.toCharArray()) {\r \ \  rows.get(curRow).append(c);\r \ \  if (curRow == 0 || curRow == numRows - 1) {\r \ \  goingDown = !goingDown;\r \ \  }\r \ \  curRow += goingDown ? 1 : -1;\r \ \  }\r \ \  StringBuilder ret = new StringBuilder();\r \ \  for (StringBuilder row : rows) {\r \ \  ret.append(row);\r \ \  }\r \ \  return ret.toString();\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  string convert(string s, int numRows) {\r \ \  if (numRows == 1) {\r \ \  return s;\r \ \  }\r \ \  vector<string> rows(min(numRows, int(s.length())));\r \ \  int curRow = 0;\r \ \  bool goingDown = false;\r \ \  for (char c : s) {\r \ \  rows[curRow] += c;\r \ \  if (curRow == 0 || curRow == numRows - 1) {\r \ \  goingDown = !goingDown;\r \ \  }\r \ \  curRow += goingDown ? 1 : -1;\r \ \  }\r \ \  string ret;\r \ \  for (string row : rows) {\r \ \  ret += row;\r \ \  }\r \ \  return ret;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(n)",
#   "Space_Complexity": "O(n)"
# },
# {
#   "id": 7,
#   "title": "Reverse Integer",
#   "content": "Given a 32-bit signed integer, reverse digits of an integer.\r \ \ \n\r \ \ \nExample 1:\r \ \ \n\r \ \ \nInput: 123\r \ \ \nOutput: 321\r \ \ \nExample 2:\r \ \ \n\r \ \ \nInput: -123\r \ \ \nOutput: -321\r \ \ \nExample 3:\r \ \ \n\r \ \ \nInput: 120\r \ \ \nOutput: 21\r \ \ \nNote:\r \ \ \nAssume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.",
#   "javascript": "var reverse = function(x) {\r \ \  let rev = 0;\r \ \  while (x !== 0) {\r \ \  let pop = x % 10;\r \ \  x = parseInt(x / 10);\r \ \  if (rev > 214748364 || (rev === 214748364 && pop > 7)) {\r \ \  return 0;\r \ \  }\r \ \  if (rev < -214748364 || (rev === -214748364 && pop < -8)) {\r \ \  return 0;\r \ \  }\r \ \  rev = rev * 10 + pop;\r \ \  }\r \ \  return rev;\r \ \  };",
#   "java": "class Solution {\r \ \  public int reverse(int x) {\r \ \  int rev = 0;\r \ \  while (x != 0) {\r \ \  int pop = x % 10;\r \ \  x /= 10;\r \ \  if (rev > Integer.MAX_VALUE/10 || (rev == Integer.MAX_VALUE / 10 && pop > 7)) {\r \ \  return 0;\r \ \  }\r \ \  if (rev < Integer.MIN_VALUE/10 || (rev == Integer.MIN_VALUE / 10 && pop < -8)) {\r \ \  return 0;\r \ \  }\r \ \  rev = rev * 10 + pop;\r \ \  }\r \ \  return rev;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  int reverse(int x) {\r \ \  int rev = 0;\r \ \  while (x != 0) {\r \ \  int pop = x % 10;\r \ \  x /= 10;\r \ \  if (rev > INT_MAX/10 || (rev == INT_MAX / 10 && pop > 7)) {\r \ \  return 0;\r \ \  }\r \ \  if (rev < INT_MIN/10 || (rev == INT_MIN / 10 && pop < -8)) {\r \ \  return 0;\r \ \  }\r \ \  rev = rev * 10 + pop;\r \ \  }\r \ \  return rev;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(log(x))",
#   "Space_Complexity": "O(1)"
# },
# {
#   "id": 8,
#   "title": "String to Integer (atoi)",
#   "content": `Implement atoi which converts a string to an integer.

# The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

# The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

# If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

# If no valid conversion could be performed, a zero value is returned.

# Note:

# Only the space character ' ' is considered as whitespace character.
# Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.`
#   ,
#   "javascript": "var myAtoi = function(str) {\r \ \  let result = 0;\r \ \  let sign = 1;\r \ \  let i = 0;\r \ \  while (str[i] === ' ') {\r \ \  i++;\r \ \  }\r \ \  if (str[i] === '+' || str[i] === '-') {\r \ \  sign = str[i] === '+' ? 1 : -1;\r \ \  i++;\r \ \  }\r \ \  while (str[i] >= '0' && str[i] <= '9') {\r \ \  result = result * 10 + (str[i] - '0');\r \ \  if (result > 2147483648) {\r \ \  return sign === 1 ? 2147483647 : -2147483648;\r \ \  }\r \ \  i++;\r \ \  }\r \ \  return result * sign;\r \ \  };",
#   "java": "class Solution {\r \ \  public int myAtoi(String str) {\r \ \  int result = 0;\r \ \  int sign = 1;\r \ \  int i = 0;\r \ \  while (str.charAt(i) == ' ') {\r \ \  i++;\r \ \  }\r \ \  if (str.charAt(i) == '+' || str.charAt(i) == '-') {\r \ \  sign = str.charAt(i) == '+' ? 1 : -1;\r \ \  i++;\r \ \  }\r \ \  while (str.charAt(i) >= '0' && str.charAt(i) <= '9') {\r \ \  result = result * 10 + (str.charAt(i) - '0');\r \ \  if (result > 2147483648L) {\r \ \  return sign == 1 ? 2147483647 : -2147483648;\r \ \  }\r \ \  i++;\r \ \  }\r \ \  return result * sign;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  int myAtoi(string str) {\r \ \  int result = 0;\r \ \  int sign = 1;\r \ \  int i = 0;\r \ \  while (str[i] == ' ') {\r \ \  i++;\r \ \  }\r \ \  if (str[i] == '+' || str[i] == '-') {\r \ \  sign = str[i] == '+' ? 1 : -1;\r \ \  i++;\r \ \  }\r \ \  while (str[i] >= '0' && str[i] <= '9') {\r \ \  result = result * 10 + (str[i] - '0');\r \ \  if (result > 2147483648L) {\r \ \  return sign == 1 ? 2147483647 : -2147483648;\r \ \  }\r \ \  i++;\r \ \  }\r \ \  return result * sign;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(n)",
#   "Space_Complexity": "O(1)"
# },
# {
#   "id": 9,
#   "title": "Palindrome Number",
#   "content": `Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

# Example 1:

# Input: 121
# Output: true
# Example 2:

# Input: -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
# Example 3:

# Input: 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.`
#   ,
#   "javascript": "var isPalindrome = function(x) {\r \ \  if (x < 0) {\r \ \  return false;\r \ \  }\r \ \  let rev = 0;\r \ \  let num = x;\r \ \  while (num > 0) {\r \ \  rev = rev * 10 + num % 10;\r \ \  num = Math.floor(num / 10);\r \ \  }\r \ \  return rev === x;\r \ \  };",
#   "java": "class Solution {\r \ \  public boolean isPalindrome(int x) {\r \ \  if (x < 0) {\r \ \  return false;\r \ \  }\r \ \  int rev = 0;\r \ \  int num = x;\r \ \  while (num > 0) {\r \ \  rev = rev * 10 + num % 10;\r \ \  num /= 10;\r \ \  }\r \ \  return rev == x;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  bool isPalindrome(int x) {\r \ \  if (x < 0) {\r \ \  return false;\r \ \  }\r \ \  int rev = 0;\r \ \  int num = x;\r \ \  while (num > 0) {\r \ \  rev = rev * 10 + num % 10;\r \ \  num /= 10;\r \ \  }\r \ \  return rev == x;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(log(x))",
#   "Space_Complexity": "O(1)",
# },
# {
#   "id": 58,
#   "title": "Length of Last Word",
#   "content": 'Given a string s consists of upper/lower-case alphabets and empty space characters \' \', return the length of last word in the string.',
#   "javascript": "var lengthOfLastWord = function(s) {\r \ \  let count = 0;\r \ \  for (let i = s.length - 1; i >= 0; i--) {\r \ \  if (s[i] === ' ') {\r \ \  if (count > 0) {\r \ \  return count;\r \ \  }\r \ \  } else {\r \ \  count++;\r \ \  }\r \ \  }\r \ \  return count;\r \ \  };",
#   "java": "class Solution {\r \ \  public int lengthOfLastWord(String s) {\r \ \  int count = 0;\r \ \  for (int i = s.length() - 1; i >= 0; i--) {\r \ \  if (s.charAt(i) == ' ') {\r \ \  if (count > 0) {\r \ \  return count;\r \ \  }\r \ \  } else {\r \ \  count++;\r \ \  }\r \ \  }\r \ \  return count;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  int lengthOfLastWord(string s) {\r \ \  int count = 0;\r \ \  for (int i = s.length() - 1; i >= 0; i--) {\r \ \  if (s[i] == ' ') {\r \ \  if (count > 0) {\r \ \  return count;\r \ \  }\r \ \  } else {\r \ \  count++;\r \ \  }\r \ \  }\r \ \  return count;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(n)",
#   "Space_Complexity": "O(1)",
# },
# {
#   "id": 53,
#   "title": "Maximum Subarray",
#   "content": `Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
#   "javascript": '

# const maxSubArray = (nums) => {
#   let solution = nums[0];

#   for (let i = 1; i < nums.length; i++) {

#     console.log("nums[i]: ", nums[i]);
#     nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
#     console.log("nums[i]: ", nums[i]);

#     console.log("solution ", solution);
#     solution = Math.max(solution, nums[i]);
#     console.log("solution ", solution);
#   }
#   return solution;
# }

# maxSubArray([100, -2, 3, -3, 0, 9, -8, 2])
# ',
#   "java": "class Solution {\r \ \  public int maxSubArray(int[] nums) {\r \ \  int solution = nums[0];\r \ \  for (int i = 1; i < nums.length; i++) {\r \ \  nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);\r \ \  solution = Math.max(solution, nums[i]);\r \ \  }\r \ \  return solution;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  int maxSubArray(vector<int>& nums) {\r \ \  int solution = nums[0];\r \ \  for (int i = 1; i < nums.size(); i++) {\r \ \  nums[i] = max(nums[i], nums[i] + nums[i-1]);\r \ \  solution = max(solution, nums[i]);\r \ \  }\r \ \  return solution;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(n)",
#   "Space_Complexity": "O(1)"
# },
# {
#   "id": 54,
#   "title": "Spiral Matrix",
#   "content": "Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
#   "javascript": "var spiralOrder = function(matrix) {\r \ \  if (matrix.length === 0) {\r \ \  return [];\r \ \  }\r \ \  let result = [];\r \ \  let rowBegin = 0;\r \ \  let rowEnd = matrix.length - 1;\r \ \  let colBegin = 0;\r \ \  let colEnd = matrix[0].length - 1;\r \ \  while (rowBegin <= rowEnd && colBegin <= colEnd) {\r \ \  for (let i = colBegin; i <= colEnd; i++) {\r \ \  result.push(matrix[rowBegin][i]);\r \ \  }\r \ \  rowBegin++;\r \ \  for (let i = rowBegin; i <= rowEnd; i++) {\r \ \  result.push(matrix[i][colEnd]);\r \ \  }\r \ \  colEnd--;\r \ \  if (rowBegin <= rowEnd) {\r \ \  for (let i = colEnd; i >= colBegin; i--) {\r \ \  result.push(matrix[rowEnd][i]);\r \ \  }\r \ \  }\r \ \  rowEnd--;\r \ \  if (colBegin <= colEnd) {\r \ \  for (let i = rowEnd; i >= rowBegin; i--) {\r \ \  result.push(matrix[i][colBegin]);\r \ \  }\r \ \  }\r \ \  colBegin++;\r \ \  }\r \ \  return result;\r \ \  };",
#   "java": "class Solution {\r \ \  public List<Integer> spiralOrder(int[][] matrix) {\r \ \  List<Integer> result = new ArrayList<>();\r \ \  if (matrix.length == 0) {\r \ \  return result;\r \ \  }\r \ \  int rowBegin = 0;\r \ \  int rowEnd = matrix.length - 1;\r \ \  int colBegin = 0;\r \ \  int colEnd = matrix[0].length - 1;\r \ \  while (rowBegin <= rowEnd && colBegin <= colEnd) {\r \ \  for (int i = colBegin; i <= colEnd; i++) {\r \ \  result.add(matrix[rowBegin][i]);\r \ \  }\r \ \  rowBegin++;\r \ \  for (int i = rowBegin; i <= rowEnd; i++) {\r \ \  result.add(matrix[i][colEnd]);\r \ \  }\r \ \  colEnd--;\r \ \  if (rowBegin <= rowEnd) {\r \ \  for (int i = colEnd; i >= colBegin; i--) {\r \ \  result.add(matrix[rowEnd][i]);\r \ \  }\r \ \  }\r \ \  rowEnd--;\r \ \  if (colBegin <= colEnd) {\r \ \  for (int i = rowEnd; i >= rowBegin; i--) {\r \ \  result.add(matrix[i][colBegin]);\r \ \  }\r \ \  }\r \ \  colBegin++;\r \ \  }\r \ \  return result;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  vector<int> spiralOrder(vector<vector<int>>& matrix) {\r \ \  vector<int> result;\r \ \  if (matrix.size() == 0) {\r \ \  return result;\r \ \  }\r \ \  int rowBegin = 0;\r \ \  int rowEnd = matrix.size() - 1;\r \ \  int colBegin = 0;\r \ \  int colEnd = matrix[0].size() - 1;\r \ \  while (rowBegin <= rowEnd && colBegin <= colEnd) {\r \ \  for (int i = colBegin; i <= colEnd; i++) {\r \ \  result.push_back(matrix[rowBegin][i]);\r \ \  }\r \ \  rowBegin++;\r \ \  for (int i = rowBegin; i <= rowEnd; i++) {\r \ \  result.push_back(matrix[i][colEnd]);\r \ \  }\r \ \  colEnd--;\r \ \  if (rowBegin <= rowEnd) {\r \ \  for (int i = colEnd; i >= colBegin; i--) {\r \ \  result.push_back(matrix[rowEnd][i]);\r \ \  }\r \ \  }\r \ \  rowEnd--;\r \ \  if (colBegin <= colEnd) {\r \ \  for (int i = rowEnd; i >= rowBegin; i--) {\r \ \  result.push_back(matrix[i][colBegin]);\r \ \  }\r \ \  }\r \ \  colBegin++;\r \ \  }\r \ \  return result;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(m*n)",
#   "Space_Complexity": "O(1)"

# },

# {
#   "id": 55,
#   "title": "Jump Game",
#   "content": "Given an array of non-negative integers, you are initially positioned at the first index of the array.
#   "javascript": "var canJump = function(nums) {\r \ \  let max = 0;\r \ \  for (let i = 0; i < nums.length; i++) {\r \ \  if (i > max) {\r \ \  return false;\r \ \  }\r \ \  max = Math.max(max, i + nums[i]);\r \ \  }\r \ \  return true;\r \ \  };",
#   "java": "class Solution {\r \ \  public boolean canJump(int[] nums) {\r \ \  int max = 0;\r \ \  for (int i = 0; i < nums.length; i++) {\r \ \  if (i > max) {\r \ \  return false;\r \ \  }\r \ \  max = Math.max(max, i + nums[i]);\r \ \  }\r \ \  return true;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  bool canJump(vector<int>& nums) {\r \ \  int max = 0;\r \ \  for (int i = 0; i < nums.size(); i++) {\r \ \  if (i > max) {\r \ \  return false;\r \ \  }\r \ \  max = max(max, i + nums[i]);\r \ \  }\r \ \  return true;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(n)",
#   "Space_Complexity": "O(1)"
# },
# {
#   "id": 56,
#   "title": "Merge Intervals",
#   "content": "Given a collection of intervals, merge all overlapping intervals.
#   "javascript": "var merge = function(intervals) {\r \ \  if (intervals.length <= 1) {\r \ \  return intervals;\r \ \  }\r \ \  intervals.sort((a, b) => a[0] - b[0]);\r \ \  let result = [];\r \ \  let prev = intervals[0];\r \ \  for (let i = 1; i < intervals.length; i++) {\r \ \  let curr = intervals[i];\r \ \  if (prev[1] >= curr[0]) {\r \ \  prev[1] = Math.max(prev[1], curr[1]);\r \ \  } else {\r \ \  result.push(prev);\r \ \  prev = curr;\r \ \  }\r \ \  }\r \ \  result.push(prev);\r \ \  return result;\r \ \  };",
#   "java": "class Solution {\r \ \  public List<Interval> merge(List<Interval> intervals) {\r \ \  if (intervals.size() <= 1) {\r \ \  return intervals;\r \ \  }\r \ \  Collections.sort(intervals, (a, b) -> Integer.compare(a.start, b.start));\r \ \  List<Interval> result = new ArrayList<>();\r \ \  Interval prev = intervals.get(0);\r \ \  for (int i = 1; i < intervals.size(); i++) {\r \ \  Interval curr = intervals.get(i);\r \ \  if (prev.end >= curr.start) {\r \ \  prev.end = Math.max(prev.end, curr.end);\r \ \  } else {\r \ \  result.add(prev);\r \ \  prev = curr;\r \ \  }\r \ \  }\r \ \  result.add(prev);\r \ \  return result;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  vector<Interval> merge(vector<Interval>& intervals) {\r \ \  if (intervals.size() <= 1) {\r \ \  return intervals;\r \ \  }\r \ \  sort(intervals.begin(), intervals.end(), [](Interval a, Interval b) {\r \ \  return a.start < b.start;\r \ \  });\r \ \  vector<Interval> result;\r \ \  Interval prev = intervals[0];\r \ \  for (int i = 1; i < intervals.size(); i++) {\r \ \  Interval curr = intervals[i];\r \ \  if (prev.end >= curr.start) {\r \ \  prev.end = max(prev.end, curr.end);\r \ \  } else {\r \ \  result.push_back(prev);\r \ \  prev = curr;\r \ \  }\r \ \  }\r \ \  result.push_back(prev);\r \ \  return result;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(nlogn)",
#   "Space_Complexity": "O(1)"
# },
# {
#   "id": 57,
#   "title": "Insert Interval",
#   "content": "Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
#   "javascript": "var insert = function(intervals, newInterval) {\r \ \  let result = [];\r \ \  let i = 0;\r \ \  while (i < intervals.length && intervals[i][1] < newInterval[0]) {\r \ \  result.push(intervals[i]);\r \ \  i++;\r \ \  }\r \ \  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {\r \ \  newInterval[0] = Math.min(newInterval[0], intervals[i][0]);\r \ \  newInterval[1] = Math.max(newInterval[1], intervals[i][1]);\r \ \  i++;\r \ \  }\r \ \  result.push(newInterval);\r \ \  while (i < intervals.length) {\r \ \  result.push(intervals[i]);\r \ \  i++;\r \ \  }\r \ \  return result;\r \ \  };",
#   "java": "class Solution {\r \ \  public List<Interval> insert(List<Interval> intervals, Interval newInterval) {\r \ \  List<Interval> result = new ArrayList<>();\r \ \  int i = 0;\r \ \  while (i < intervals.size() && intervals.get(i).end < newInterval.start) {\r \ \  result.add(intervals.get(i));\r \ \  i++;\r \ \  }\r \ \  while (i < intervals.size() && intervals.get(i).start <= newInterval.end) {\r \ \  newInterval.start = Math.min(newInterval.start, intervals.get(i).start);\r \ \  newInterval.end = Math.max(newInterval.end, intervals.get(i).end);\r \ \  i++;\r \ \  }\r \ \  result.add(newInterval);\r \ \  while (i < intervals.size()) {\r \ \  result.add(intervals.get(i));\r \ \  i++;\r \ \  }\r \ \  return result;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  vector<Interval> insert(vector<Interval>& intervals, Interval newInterval) {\r \ \  vector<Interval> result;\r \ \  int i = 0;\r \ \  while (i < intervals.size() && intervals[i].end < newInterval.start) {\r \ \  result.push_back(intervals[i]);\r \ \  i++;\r \ \  }\r \ \  while (i < intervals.size() && intervals[i].start <= newInterval.end) {\r \ \  newInterval.start = min(newInterval.start, intervals[i].start);\r \ \  newInterval.end = max(newInterval.end, intervals[i].end);\r \ \  i++;\r \ \  }\r \ \  result.push_back(newInterval);\r \ \  while (i < intervals.size()) {\r \ \  result.push_back(intervals[i]);\r \ \  i++;\r \ \  }\r \ \  return result;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(n)",
#   "Space_Complexity": "O(1)"
# },
# {
#   "id": 58,
#   "title": "Length of Last Word",
#   "content": "Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
#   "javascript": "var lengthOfLastWord = function(s) {\r \ \  let count = 0;\r \ \  for (let i = s.length - 1; i >= 0; i--) {\r \ \  if (s[i] === ' ' && count > 0) {\r \ \  break;\r \ \  } else if (s[i] !== ' ') {\r \ \  count++;\r \ \  }\r \ \  }\r \ \  return count;\r \ \  };",
#   "java": "class Solution {\r \ \  public int lengthOfLastWord(String s) {\r \ \  int count = 0;\r \ \  for (int i = s.length() - 1; i >= 0; i--) {\r \ \  if (s.charAt(i) == ' ' && count > 0) {\r \ \  break;\r \ \  } else if (s.charAt(i) != ' ') {\r \ \  count++;\r \ \  }\r \ \  }\r \ \  return count;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  int lengthOfLastWord(string s) {\r \ \  int count = 0;\r \ \  for (int i = s.length() - 1; i >= 0; i--) {\r \ \  if (s[i] == ' ' && count > 0) {\r \ \  break;\r \ \  } else if (s[i] != ' ') {\r \ \  count++;\r \ \  }\r \ \  }\r \ \  return count;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(n)",
#   "Space_Complexity": "O(1)"
# },
# {
#   "id": 59,
#   "title": "Spiral Matrix II",
#   "content": "Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
#   "javascript": "var generateMatrix = function(n) {\r \ \  let result = new Array(n).fill(0).map(() => new Array(n).fill(0));\r \ \  let startRow = 0;\r \ \  let endRow = n - 1;\r \ \  let startCol = 0;\r \ \  let endCol = n - 1;\r \ \  let count = 1;\r \ \  while (startRow <= endRow && startCol <= endCol) {\r \ \  for (let i = startCol; i <= endCol; i++) {\r \ \  result[startRow][i] = count;\r \ \  count++;\r \ \  }\r \ \  startRow++;\r \ \  for (let i = startRow; i <= endRow; i++) {\r \ \  result[i][endCol] = count;\r \ \  count++;\r \ \  }\r \ \  endCol--;\r \ \  for (let i = endCol; i >= startCol; i--) {\r \ \  result[endRow][i] = count;\r \ \  count++;\r \ \  }\r \ \  endRow--;\r \ \  for (let i = endRow; i >= startRow; i--) {\r \ \  result[i][startCol] = count;\r \ \  count++;\r \ \  }\r \ \  startCol++;\r \ \  }\r \ \  return result;\r \ \  };",
#   "java": "class Solution {\r \ \  public int[][] generateMatrix(int n) {\r \ \  int[][] result = new int[n][n];\r \ \  int startRow = 0;\r \ \  int endRow = n - 1;\r \ \  int startCol = 0;\r \ \  int endCol = n - 1;\r \ \  int count = 1;\r \ \  while (startRow <= endRow && startCol <= endCol) {\r \ \  for (int i = startCol; i <= endCol; i++) {\r \ \  result[startRow][i] = count;\r \ \  count++;\r \ \  }\r \ \  startRow++;\r \ \  for (int i = startRow; i <= endRow; i++) {\r \ \  result[i][endCol] = count;\r \ \  count++;\r \ \  }\r \ \  endCol--;\r \ \  for (int i = endCol; i >= startCol; i--) {\r \ \  result[endRow][i] = count;\r \ \  count++;\r \ \  }\r \ \  endRow--;\r \ \  for (int i = endRow; i >= startRow; i--) {\r \ \  result[i][startCol] = count;\r \ \  count++;\r \ \  }\r \ \  startCol++;\r \ \  }\r \ \  return result;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  vector<vector<int>> generateMatrix(int n) {\r \ \  vector<vector<int>> result(n, vector<int>(n, 0));\r \ \  int startRow = 0;\r \ \  int endRow = n - 1;\r \ \  int startCol = 0;\r \ \  int endCol = n - 1;\r \ \  int count = 1;\r \ \  while (startRow <= endRow && startCol <= endCol) {\r \ \  for (int i = startCol; i <= endCol; i++) {\r \ \  result[startRow][i] = count;\r \ \  count++;\r \ \  }\r \ \  startRow++;\r \ \  for (int i = startRow; i <= endRow; i++) {\r \ \  result[i][endCol] = count;\r \ \  count++;\r \ \  }\r \ \  endCol--;\r \ \  for (int i = endCol; i >= startCol; i--) {\r \ \  result[endRow][i] = count;\r \ \  count++;\r \ \  }\r \ \  endRow--;\r \ \  for (int i = endRow; i >= startRow; i--) {\r \ \  result[i][startCol] = count;\r \ \  count++;\r \ \  }\r \ \  startCol++;\r \ \  }\r \ \  return result;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(n^2)",
#   "Space_Complexity": "O(n^2)"
# },
# {
#   "id": 60,
#   "title": "Permutation Sequence",
#   "content": "The set [1,2,3,...,n] contains a total of n! unique permutations.
#   "javascript": "var getPermutation = function(n, k) {\r \ \  let result = '';\r \ \  let nums = [];\r \ \  let factorial = 1;\r \ \  for (let i = 1; i <= n; i++) {\r \ \  nums.push(i);\r \ \  factorial *= i;\r \ \  }\r \ \  k--;\r \ \  for (let i = 1; i <= n; i++) {\r \ \  factorial = factorial / (n - i);\r \ \  let index = Math.floor(k / factorial);\r \ \  result += nums[index];\r \ \  nums.splice(index, 1);\r \ \  k = k % factorial;\r \ \  }\r \ \  return result;\r \ \  };",
#   "java": "class Solution {\r \ \  public String getPermutation(int n, int k) {\r \ \  String result = '';\r \ \  List<Integer> nums = new ArrayList<>();\r \ \  int factorial = 1;\r \ \  for (int i = 1; i <= n; i++) {\r \ \  nums.add(i);\r \ \  factorial *= i;\r \ \  }\r \ \  k--;\r \ \  for (int i = 1; i <= n; i++) {\r \ \  factorial = factorial / (n - i);\r \ \  int index = k / factorial;\r \ \  result += nums.get(index);\r \ \  nums.remove(index);\r \ \  k = k % factorial;\r \ \  }\r \ \  return result;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  string getPermutation(int n, int k) {\r \ \  string result = '';\r \ \  vector<int> nums;\r \ \  int factorial = 1;\r \ \  for (int i = 1; i <= n; i++) {\r \ \  nums.push_back(i);\r \ \  factorial *= i;\r \ \  }\r \ \  k--;\r \ \  for (int i = 1; i <= n; i++) {\r \ \  factorial = factorial / (n - i);\r \ \  int index = k / factorial;\r \ \  result += to_string(nums[index]);\r \ \  nums.erase(nums.begin() + index);\r \ \  k = k % factorial;\r \ \  }\r \ \  return result;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(n)",
#   "Space_Complexity": "O(n)"
# },
# {
#   "id": 61,
#   "title": "Rotate List",
#   "content": "Given a linked list, rotate the list to the right by k places, where k is non-negative.
#   "javascript": "var rotateRight = function(head, k) {\r \ \  if (!head || !head.next) return head;\r \ \  let length = 1;\r \ \  let tail = head;\r \ \  while (tail.next) {\r \ \  tail = tail.next;\r \ \  length++;\r \ \  }\r \ \  tail.next = head;\r \ \  k = k % length;\r \ \  let newTail = head;\r \ \  for (let i = 0; i < length - k - 1; i++) {\r \ \  newTail = newTail.next;\r \ \  }\r \ \  let newHead = newTail.next;\r \ \  newTail.next = null;\r \ \  return newHead;\r \ \  };",
#   "java": "class Solution {\r \ \  public ListNode rotateRight(ListNode head, int k) {\r \ \  if (head == null || head.next == null) return head;\r \ \  int length = 1;\r \ \  ListNode tail = head;\r \ \  while (tail.next != null) {\r \ \  tail = tail.next;\r \ \  length++;\r \ \  }\r \ \  tail.next = head;\r \ \  k = k % length;\r \ \  ListNode newTail = head;\r \ \  for (int i = 0; i < length - k - 1; i++) {\r \ \  newTail = newTail.next;\r \ \  }\r \ \  ListNode newHead = newTail.next;\r \ \  newTail.next = null;\r \ \  return newHead;\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  ListNode* rotateRight(ListNode* head, int k) {\r \ \  if (!head || !head->next) return head;\r \ \  int length = 1;\r \ \  ListNode* tail = head;\r \ \  while (tail->next) {\r \ \  tail = tail->next;\r \ \  length++;\r \ \  }\r \ \  tail->next = head;\r \ \  k = k % length;\r \ \  ListNode* newTail = head;\r \ \  for (int i = 0; i < length - k - 1; i++) {\r \ \  newTail = newTail->next;\r \ \  }\r \ \  ListNode* newHead = newTail->next;\r \ \  newTail->next = NULL;\r \ \  return newHead;\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(n)",
#   "Space_Complexity": "O(1)"
# },
# {
#   "id": 62,
#   "title": "Unique Paths",
#   "content": "A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
#   "javascript": "var uniquePaths = function(m, n) {\r \ \  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));\r \ \  for (let i = 0; i < m; i++) {\r \ \  dp[i][0] = 1;\r \ \  }\r \ \  for (let j = 0; j < n; j++) {\r \ \  dp[0][j] = 1;\r \ \  }\r \ \  for (let i = 1; i < m; i++) {\r \ \  for (let j = 1; j < n; j++) {\r \ \  dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\r \ \  }\r \ \  }\r \ \  return dp[m - 1][n - 1];\r \ \  };",
#   "java": "class Solution {\r \ \  public int uniquePaths(int m, int n) {\r \ \  int[][] dp = new int[m][n];\r \ \  for (int i = 0; i < m; i++) {\r \ \  dp[i][0] = 1;\r \ \  }\r \ \  for (int j = 0; j < n; j++) {\r \ \  dp[0][j] = 1;\r \ \  }\r \ \  for (int i = 1; i < m; i++) {\r \ \  for (int j = 1; j < n; j++) {\r \ \  dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\r \ \  }\r \ \  }\r \ \  return dp[m - 1][n - 1];\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  int uniquePaths(int m, int n) {\r \ \  vector<vector<int>> dp(m, vector<int>(n, 0));\r \ \  for (int i = 0; i < m; i++) {\r \ \  dp[i][0] = 1;\r \ \  }\r \ \  for (int j = 0; j < n; j++) {\r \ \  dp[0][j] = 1;\r \ \  }\r \ \  for (int i = 1; i < m; i++) {\r \ \  for (int j = 1; j < n; j++) {\r \ \  dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\r \ \  }\r \ \  }\r \ \  return dp[m - 1][n - 1];\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(mn)",
#   "Space_Complexity": "O(mn)"
# },

# {
#   "id": 63,
#   "title": "Unique Paths II",
#   "content": "A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
#   "javascript": "var uniquePathsWithObstacles = function(obstacleGrid) {\r \ \  let m = obstacleGrid.length;\r \ \  let n = obstacleGrid[0].length;\r \ \  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));\r \ \  for (let i = 0; i < m; i++) {\r \ \  if (obstacleGrid[i][0] === 1) break;\r \ \  dp[i][0] = 1;\r \ \  }\r \ \  for (let j = 0; j < n; j++) {\r \ \  if (obstacleGrid[0][j] === 1) break;\r \ \  dp[0][j] = 1;\r \ \  }\r \ \  for (let i = 1; i < m; i++) {\r \ \  for (let j = 1; j < n; j++) {\r \ \  if (obstacleGrid[i][j] === 1) {\r \ \  dp[i][j] = 0;\r \ \  } else {\r \ \  dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\r \ \  }\r \ \  }\r \ \  }\r \ \  return dp[m - 1][n - 1];\r \ \  };",
#   "java": "class Solution {\r \ \  public int uniquePathsWithObstacles(int[][] obstacleGrid) {\r \ \  int m = obstacleGrid.length;\r \ \  int n = obstacleGrid[0].length;\r \ \  int[][] dp = new int[m][n];\r \ \  for (int i = 0; i < m; i++) {\r \ \  if (obstacleGrid[i][0] == 1) break;\r \ \  dp[i][0] = 1;\r \ \  }\r \ \  for (int j = 0; j < n; j++) {\r \ \  if (obstacleGrid[0][j] == 1) break;\r \ \  dp[0][j] = 1;\r \ \  }\r \ \  for (int i = 1; i < m; i++) {\r \ \  for (int j = 1; j < n; j++) {\r \ \  if (obstacleGrid[i][j] == 1) {\r \ \  dp[i][j] = 0;\r \ \  } else {\r \ \  dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\r \ \  }\r \ \  }\r \ \  }\r \ \  return dp[m - 1][n - 1];\r \ \  }\r \ \ }",
#   "c++": "class Solution {\r \ \  public:\r \ \  int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {\r \ \  int m = obstacleGrid.size();\r \ \  int n = obstacleGrid[0].size();\r \ \  vector<vector<int>> dp(m, vector<int>(n, 0));\r \ \  for (int i = 0; i < m; i++) {\r \ \  if (obstacleGrid[i][0] == 1) break;\r \ \  dp[i][0] = 1;\r \ \  }\r \ \  for (int j = 0; j < n; j++) {\r \ \  if (obstacleGrid[0][j] == 1) break;\r \ \  dp[0][j] = 1;\r \ \  }\r \ \  for (int i = 1; i < m; i++) {\r \ \  for (int j = 1; j < n; j++) {\r \ \  if (obstacleGrid[i][j] == 1) {\r \ \  dp[i][j] = 0;\r \ \  } else {\r \ \  dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\r \ \  }\r \ \  }\r \ \  }\r \ \  return dp[m - 1][n - 1];\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(mn)",
#   "Space_Complexity": "O(mn)"
# },
# {
#   "id": 64,
#   "title": "Minimum Path Sum",
#   "content": "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

#   "javascript": "var minPathSum = function(grid) {\r \ \  let m = grid.length;\r \ \  let n = grid[0].length;\r \ \  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));\r \ \  dp[0][0] = grid[0][0];\r \ \  for (let i = 1; i < m; i++) {\r \ \  dp[i][0] = dp[i - 1][0] + grid[i][0];\r \ \  }\r \ \  for (let j = 1; j < n; j++) {\r \ \  dp[0][j] = dp[0][j - 1] + grid[0][j];\r \ \  }\r \ \  for (let i = 1; i < m; i++) {\r \ \  for (let j = 1; j < n; j++) {\r \ \  dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];\r \ \  }\r \ \  }\r \ \  return dp[m - 1][n - 1];\r \ \  };",
#   "java": "class Solution {\r \ \  public int minPathSum(int[][] grid) {\r \ \  int m = grid.length;\r \ \  int n = grid[0].length;\r \ \  int[][] dp = new int[m][n];\r \ \  dp[0][0] = grid[0][0];\r \ \  for (int i = 1; i < m; i++) {\r \ \  dp[i][0] = dp[i - 1][0] + grid[i][0];\r \ \  }\r \ \  for (int j = 1; j < n; j++) {\r \ \  dp[0][j] = dp[0][j - 1] + grid[0][j];\r \ \  }\r \ \  for (int i = 1; i < m; i++) {\r \ \  for (int j = 1; j < n; j++) {\r \ \  dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];\r \ \  }\r \ \  }\r \ \  return dp[m - 1][n - 1];\r \ \  }\r \ \ }",

#   "c++": "class Solution {\r \ \  public:\r \ \  int minPathSum(vector<vector<int>>& grid) {\r \ \  int m = grid.size();\r \ \  int n = grid[0].size();\r \ \  vector<vector<int>> dp(m, vector<int>(n, 0));\r \ \  dp[0][0] = grid[0][0];\r \ \  for (int i = 1; i < m; i++) {\r \ \  dp[i][0] = dp[i - 1][0] + grid[i][0];\r \ \  }\r \ \  for (int j = 1; j < n; j++) {\r \ \  dp[0][j] = dp[0][j - 1] + grid[0][j];\r \ \  }\r \ \  for (int i = 1; i < m; i++) {\r \ \  for (int j = 1; j < n; j++) {\r \ \  dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];\r \ \  }\r \ \  }\r \ \  return dp[m - 1][n - 1];\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(mn)",
#   "Space_Complexity": "O(mn)"
# },

# {
#   "id": 70,
#   "title": "Climbing Stairs",
#   "content": "You are climbing a stair case. It takes n steps to reach to the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

# Note: Given n will be a positive integer.


#   "javascript": "var climbStairs = function(n) {\r \ \  let dp = new Array(n + 1).fill(0);\r \ \  dp[0] = 1;\r \ \  dp[1] = 1;\r \ \  for (let i = 2; i <= n; i++) {\r \ \  dp[i] = dp[i - 1] + dp[i - 2];\r \ \  }\r \ \  return dp[n];\r \ \  };",
#   "java": "class Solution {\r \ \  public int climbStairs(int n) {\r \ \  int[] dp = new int[n + 1];\r \ \  dp[0] = 1;\r \ \  dp[1] = 1;\r \ \  for (int i = 2; i <= n; i++) {\r \ \  dp[i] = dp[i - 1] + dp[i - 2];\r \ \  }\r \ \  return dp[n];\r \ \  }\r \ \ }",


#   "c++": "class Solution {\r \ \  public:\r \ \  int climbStairs(int n) {\r \ \  vector<int> dp(n + 1, 0);\r \ \  dp[0] = 1;\r \ \  dp[1] = 1;\r \ \  for (int i = 2; i <= n; i++) {\r \ \  dp[i] = dp[i - 1] + dp[i - 2];\r \ \  }\r \ \  return dp[n];\r \ \  }\r \ \ };",
#   "Time_Complexity": "O(n)",
#   "Space_Complexity": "O(n)"

# },
# {

#   "id": 72,
#   "title": "Edit Distance",

#   "content": "Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

# You have the following 3 operations permitted on a word:

# Insert a character
# Delete a character

# Replace a character

# Example 1:

# Input: word1 = \"horse\", word2 = \"ros\"
# Output: 3
# Explanation:
# horse -> rorse (replace 'h' with 'r')
# rorse -> rose (remove 'r')
# rose -> ros (remove 'e')

# Example 2:

# Input: word1 = \"intention\", word2 = \"execution\"
# Output: 5
# Explanation:
# intention -> inention (remove 't')
# inention -> enention (replace 'i' with 'e')
# enention -> exention (replace 'n' with 'x')
# exention -> exection (replace 'n' with 'c')
# ",


# "javascript":

# "var minDistance = function(word1, word2) {\r \ \  let m = word1.length;\r \ \  let n = word2.length;\r \ \  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));\r \ \  for (let i = 0; i <= m; i++) {\r \ \  dp[i][0] = i;\r \ \  }\r \ \  for (let j = 0; j <= n; j++) {\r \ \  dp[0][j] = j;\r \ \  }\r \ \  for (let i = 1; i <= m; i++) {\r \ \  for (let j = 1; j <= n; j++) {\r \ \  if (word1[i - 1] === word2[j - 1]) {\r \ \  dp[i][j] = dp[i - 1][j - 1];\r \ \  } else {\r \ \  dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;\r \ \  }\r \ \  }\r \ \  }\r \ \  return dp[m][n];\r \ \  };",

# "java": "class Solution {\r \ \  public int minDistance(String word1, String word2) {\r \ \  int m = word1.length();\r \ \  int n = word2.length();\r \ \  int[][] dp = new int[m + 1][n + 1];\r \ \  for (int i = 0; i <= m; i++) {\r \ \  dp[i][0] = i;\r \ \  }\r \ \  for (int j = 0; j <= n; j++) {\r \ \  dp[0][j] = j;\r \ \  }\r \ \  for (int i = 1; i <= m; i++) {\r \ \  for (int j = 1; j <= n; j++) {\r \ \  if (word1.charAt(i - 1) == word2.charAt(j - 1)) {\r \ \  dp[i][j] = dp[i - 1][j - 1];\r \ \  } else {\r \ \  dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;\r \ \  }\r \ \  }\r \ \  }\r \ \  return dp[m][n];\r \ \  }\r \ \ }",

# "c++": "class Solution {\r \ \  public:\r \ \  int minDistance(string word1, string word2) {\r \ \  int m = word1.size();\r \ \  int n = word2.size();\r \ \  vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\r \ \  for (int i = 0; i <= m; i++) {\r \ \  dp[i][0] = i;\r \ \  }\r \ \  for (int j = 0; j <= n; j++) {\r \ \  dp[0][j] = j;\r \ \  }\r \ \  for (int i = 1; i <= m; i++) {\r \ \  for (int j = 1; j <= n; j++) {\r \ \  if (word1[i - 1] == word2[j - 1]) {\r \ \  dp[i][j] = dp[i - 1][j - 1];\r \ \  } else {\r \ \  dp[i][j] = min(dp[i - 1][j - 1], min(dp[i - 1][j], dp[i][j - 1])) + 1;\r \ \  }\r \ \  }\r \ \  }\r \ \  return dp[m][n];\r \ \  }\r \ \ };",

# "Time_Complexity": "O(mn)",
# "Space_Complexity": "O(mn)"

# },
# {

#   "id": 73,
#   "title": "Unique Paths II",

#   "content": "A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

# The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

# Now consider if some obstacles are added to the grids. How many unique paths would there be?

# An obstacle and space is marked as 1 and 0 respectively in the grid.

# Example 1:

# Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
# Output: 2
# Explanation:
# There is one obstacle in the middle of the 3x3 grid above.
# There are two ways to reach the bottom-right corner:
# 1. Right -> Right -> Down -> Down
# 2. Down -> Down -> Right -> Right

# Example 2:

# Input: obstacleGrid = [[0,1],[0,0]]
# Output: 1
# ",

# "javascript":

# "var uniquePathsWithObstacles = function(obstacleGrid) {\r \ \  let m = obstacleGrid.length;\r \ \  let n = obstacleGrid[0].length;\r \ \  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));\r \ \  for (let i = 0; i < m; i++) {\r \ \  if (obstacleGrid[i][0] === 0) {\r \ \  dp[i][0] = 1;\r \ \  } else {\r \ \  break;\r \ \  }\r \ \  }\r \ \  for (let j = 0; j < n; j++) {\r \ \  if (obstacleGrid[0][j] === 0) {\r \ \  dp[0][j] = 1;\r \ \  } else {\r \ \  break;\r \ \  }\r \ \  }\r \ \  for (let i = 1; i < m; i++) {\r \ \  for (let j = 1; j < n; j++) {\r \ \  if (obstacleGrid[i][j] === 0) {\r \ \  dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\r \ \  }\r \ \  }\r \ \  }\r \ \  return dp[m - 1][n - 1];\r \ \  };",

# "python": "class Solution:\r \ \  def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:\r \ \  m = len(obstacleGrid)\r \ \  n = len(obstacleGrid[0])\r \ \  dp = [[0] * n for _ in range(m)]\r \ \  for i in range(m):\r \ \  if obstacleGrid[i][0] == 0:\r \ \  dp[i][0] = 1\r \ \  else:\r \ \  break\r \ \  for j in range(n):\r \ \  if obstacleGrid[0][j] == 0:\r \ \  dp[0][j] = 1\r \ \  else:\r \ \  break\r \ \  for i in range(1, m):\r \ \  for j in range(1, n):\r \ \  if obstacleGrid[i][j] == 0:\r \ \  dp[i][j] = dp[i - 1][j] + dp[i][j - 1]\r \ \  return dp[m - 1][n - 1]",
# "c++": "class Solution {\r \ \  public:\r \ \  int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {\r \ \  int m = obstacleGrid.size();\r \ \  int n = obstacleGrid[0].size();\r \ \  vector<vector<int>> dp(m, vector<int>(n, 0));\r \ \  for (int i = 0; i < m; i++) {\r \ \  if (obstacleGrid[i][0] == 0) {\r \ \  dp[i][0] = 1;\r \ \  } else {\r \ \  break;\r \ \  }\r \ \  }\r \ \  for (int j = 0; j < n; j++) {\r \ \  if (obstacleGrid[0][j] == 0) {\r \ \  dp[0][j] = 1;\r \ \  } else {\r \ \  break;\r \ \  }\r \ \  }\r \ \  for (int i = 1; i < m; i++) {\r \ \  for (int j = 1; j < n; j++) {\r \ \  if (obstacleGrid[i][j] == 0) {\r \ \  dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\r \ \  }\r \ \  }\r \ \  }\r \ \  return dp[m - 1][n - 1];\r \ \  }\r \ \ };",
# "java": "class Solution {\r \ \  public int uniquePathsWithObstacles(int[][] obstacleGrid) {\r \ \  int m = obstacleGrid.length;\r \ \  int n = obstacleGrid[0].length;\r \ \  int[][] dp = new int[m][n];\r \ \  for (int i = 0; i < m; i++) {\r \ \  if (obstacleGrid[i][0] == 0) {\r \ \  dp[i][0] = 1;\r \ \  } else {\r \ \  break;\r \ \  }\r \ \  }\r \ \  for (int j = 0; j < n; j++) {\r \ \  if (obstacleGrid[0][j] == 0) {\r \ \  dp[0][j] = 1;\r \ \  } else {\r \ \  break;\r \ \  }\r \ \  }\r \ \  for (int i = 1; i < m; i++) {\r \ \  for (int j = 1; j < n; j++) {\r \ \  if (obstacleGrid[i][j] == 0) {\r \ \  dp[i][j] = dp[i - 1][j] + dp[i][j - 1];\r \ \  }\r \ \  }\r \ \  }\r \ \  return dp[m - 1][n - 1];\r \ \  }\r \ \ }",
# "ruby": "def unique_path_with_obstacles(obstacle_grid)\r \ \  m = obstacle_grid.length\r \ \  n = obstacle_grid[0].length\r \ \  dp = Array.new(m) { Array.new(n, 0) }\r \ \  for i in 0...m\r \ \  if obstacle_grid[i][0] == 0\r \ \  dp[i][0] = 1\r \ \  else\r \ \  break\r \ \  end\r \ \  end\r \ \  for j in 0...n\r \ \  if obstacle_grid[0][j] == 0\r \ \  dp[0][j] = 1\r \ \  else\r \ \  break\r \ \  end\r \ \  end\r \ \  for i in 1...m\r \ \  for j in 1...n\r \ \  if obstacle_grid[i][j] == 0\r \ \  dp[i][j] = dp[i - 1][j] + dp[i][j - 1]\r \ \  end\r \ \  end\r \ \  end\r \ \  dp[m - 1][n - 1]\r \ \  end",
# "swift": "class Solution {\r \ \  func uniquePathsWithObstacles(_ obstacleGrid: [[Int]]) -> Int {\r \ \  let m = obstacleGrid.count\r \ \  let n = obstacleGrid[0].count\r \ \  var dp = Array(repeating: Array(repeating: 0, count: n), count: m)\r \ \  for i in 0..<m {\r \ \  if obstacleGrid[i][0] == 0 {\r \ \  dp[i][0] = 1\r \ \  } else {\r \ \  break\r \ \  }\r \ \  }\r \ \  for j in 0..<n {\r \ \  if obstacleGrid[0][j] == 0 {\r \ \  dp[0][j] = 1\r \ \  } else {\r \ \  break\r \ \  }\r \ \  }\r \ \  for i in 1..<m {\r \ \  for j in 1..<n {\r \ \  if obstacleGrid[i][j] == 0 {\r \ \  dp[i][j] = dp[i - 1][j] + dp[i][j - 1]\r \ \  }\r \ \  }\r \ \  }\r \ \  return dp[m - 1][n - 1]\r \ \  }\r \ \ }",
# Time Complexity: O(mn) Space Complexity: O(mn)

# },

# {

#     "id": "75",
#     "title": "Sort Colors",
#     "content": "Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.\r \ \ Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.\r \ \ Note:\r \ \ You are not suppose to use the library's sort function for this problem.\r \ \ click to show follow up.\r \ \ Follow up:\r \ \ A rather straight forward solution is a two-pass algorithm using counting sort.\r \ \ First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.\r \ \ Could you come up with an one-pass algorithm using only constant space?",

#     "difficulty": "Medium",
#     "javascript":
# "var sortColors = function(nums) {\r \ \  let i = 0;\r \ \  let j = 0;\r \ \  let k = nums.length - 1;\r \ \  while (j <= k) {\r \ \  if (nums[j] === 0) {\r \ \  swap(nums, i, j);\r \ \  i++;\r \ \  j++;\r \ \  } else if (nums[j] === 1) {\r \ \  j++;\r \ \  } else {\r \ \  swap(nums, j, k);\r \ \  k--;\r \ \  }\r \ \  }\r \ \  function swap(nums, i, j) {\r \ \  let temp = nums[i];\r \ \  nums[i] = nums[j];\r \ \  nums[j] = temp;\r \ \  }\r \ \  }",
# "python": "def sort_colors(nums):\r \ \  i = 0\r \ \  j = 0\r \ \  k = len(nums) - 1\r \ \  while j <= k:\r \ \  if nums[j] == 0:\r \ \  nums[i], nums[j] = nums[j], nums[i]\r \ \  i += 1\r \ \  j += 1\r \ \  elif nums[j] == 1:\r \ \  j += 1\r \ \  else:\r \ \  nums[j], nums[k] = nums[k], nums[j]\r \ \  k -= 1",
# "java"
# : "public class Solution {\r \ \  public void sortColors(int[] nums) {\r \ \  int i = 0;\r \ \  int j = 0;\r \ \  int k = nums.length - 1;\r \ \  while (j <= k) {\r \ \  if (nums[j] == 0) {\r \ \  swap(nums, i, j);\r \ \  i++;\r \ \  j++;\r \ \  } else if (nums[j] == 1) {\r \ \  j++;\r \ \  } else {\r \ \  swap(nums, j, k);\r \ \  k--;\r \ \  }\r \ \  }\r \ \  }\r \ \  private void swap(int[] nums, int i, int j) {\r \ \  int temp = nums[i];\r \ \  nums[i] = nums[j];\r \ \  nums[j] = temp;\r \ \  }\r \ \ }",
# "c++":
# "void sortColors(vector<int>& nums) {\r \ \  int i = 0;\r \ \  int j = 0;\r \ \  int k = nums.size() - 1;\r \ \  while (j <= k) {\r \ \  if (nums[j] == 0) {\r \ \  swap(nums, i, j);\r \ \  i++;\r \ \  j++;\r \ \  } else if (nums[j] == 1) {\r \ \  j++;\r \ \  } else {\r \ \  swap(nums, j, k);\r \ \  k--;\r \ \  }\r \ \  }\r \ \  }\r \ \  void swap(vector<int>& nums, int i, int j) {\r \ \  int temp = nums[i];\r \ \  nums[i] = nums[j];\r \ \  nums[j] = temp;\r \ \  }",
# Time Complexity: O(n) Space Complexity: O(1)

# },

# {
#   "id": "76",
#   "title": "Minimum Window Substring",
#   "content": "Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).\r \ \ For example,\r \ \ S = \"ADOBECODEBANC\"\r \ \ T = \"ABC\"\r \ \ Minimum window is \"BANC\".\r \ \ Note:\r \ \ If there is no such window in S that covers all characters in T, return the emtpy string \"\".\r \ \ If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.",
#   "difficulty": "Hard",
#   "javascript": "var minWindow = function(s, t) {\r \ \  let map = {};\r \ \  for (let i = 0; i < t.length; i++) {\r \ \  if (map[t[i]] === undefined) {\r \ \  map[t[i]] = 1;\r \ \  } else {\r \ \  map[t[i]]++;\r \ \  }\r \ \  }\r \ \  let count = t.length;\r \ \  let start = 0;\r \ \  let end = 0;\r \ \  let min = Number.MAX_VALUE;\r \ \  let minStart = 0;\r \ \  while (end < s.length) {\r \ \  if (map[s[end]] !== undefined) {\r \ \  map[s[end]]--;\r \ \  if (map[s[end]] >= 0) {\r \ \  count--;\r \ \  }\r \ \  }\r \ \  while (count === 0) {\r \ \  if (end - start + 1 < min) {\r \ \  min = end - start + 1;\r \ \  minStart = start;\r \ \  }\r \ \  if (map[s[start]] !== undefined) {\r \ \  map[s[start]]++;\r \ \  if (map[s[start]] > 0) {\r \ \  count++;\r \ \  }\r \ \  }\r \ \  start++;\r \ \  }\r \ \  end++;\r \ \  }\r \ \  if (min === Number.MAX_VALUE) {\r \ \  return \"\";\r \ \  }\r \ \  return s.substring(minStart, minStart + min);\r \ \  }",
#   "python": "def min_window(s, t):\r \ \  map = {}\r \ \  for i in range(len(t)):\r \ \  if t[i] not in map:\r \ \  map[t[i]] = 1\r \ \  else:\r \ \  map[t[i]] += 1\r \ \  count = len(t)\r \ \  start = 0\r \ \  end = 0\r \ \  min = float('inf')\r \ \  min_start = 0\r \ \  while end < len(s):\r \ \  if s[end] in map:\r \ \  map[s[end]] -= 1\r \ \  if map[s[end]] >= 0:\r \ \  count -= 1\r \ \  while count == 0:\r \ \  if end - start + 1 < min:\r \ \  min = end - start + 1\r \ \  min_start = start\r \ \  if s[start] in map:\r \ \  map[s[start]] += 1\r \ \  if map[s[start]] > 0:\r \ \  count += 1\r \ \  start += 1\r \ \  end += 1\r \ \  if min == float('inf'):\r \ \  return \"\"\r \ \  return s[min_start:min_start + min]",
#   Time Complexity: O(n) Space Complexity: O(n)`
# }
# ]


# class Node {
#   constructor(value) {
#     this.value = value;
#     this.left = null;
#     this.right = null;
#   }
# }

# // Example binary tree
# const tree = new Node(1);
# tree.left = new Node(2);
# tree.right = new Node(3);
# tree.left.left = new Node(4);
# tree.left.right = new Node(5);

# function climbBinaryTree(node) {
#   if (node === null) {
#     return; // Base case: Reached a leaf node or an empty tree
#   }

#   console.log(node.value); // Print the value of the current node

#   climbBinaryTree(node.left); // Recursively climb the left subtree
#   climbBinaryTree(node.right); // Recursively climb the right subtree
# }

# climbBinaryTree(tree);

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# Example binary tree
tree = Node(1)
tree.left = Node(2)
tree.right = Node(3)
tree.left.left = Node(4)
tree.left.right = Node(5)

def climb_binary_tree(node):
    if node is None:
        return  # Base case: Reached a leaf node or an empty tree

    print(node.value)  # Print the value of the current node

    climb_binary_tree(node.left)  # Recursively climb the left subtree
    climb_binary_tree(node.right)  # Recursively climb the right subtree

climb_binary_tree(tree)
