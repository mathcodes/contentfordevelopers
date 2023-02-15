const solutions = [{
  "id": 5,
  "title": "Longest Palindromic Substring",
  "content": "https://leetcode.com/problems/longest-palindromic-substring/",
  "javascript": `

  var longestPalindrome = function(s) {
      let start = 0;
      let end = 0;

      for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
        start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
    }
      return s.substring(start, end + 1);
    };
      var expandAroundCenter = function(s, left, right) {
        let L = left;
        let R = right;
        while (L >= 0 && R < s.length && s[L] === s[R]) {
        L--;
        R++;
      }
      return R - L - 1;
    };`,
  "Time_Complexity": "O(n^2)",
  "Space_Complexity": "O(1)",
},
{
  "id": 6,
  "title": "Two Sum",
  "content": "https://leetcode.com/problems/two-sum/",
  "javascript": `
  var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
  }; `,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(n)",
},
{
  "id": 7,
  "title": "Three Sum",
  "content": "https://leetcode.com/problems/three-sum/",
  "javascript": `
  var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
    let sum = nums[i] + nums[j] + nums[k];
    if (sum === 0) {
    result.push([nums[i], nums[j], nums[k]]);
    while (j < k && nums[j] === nums[j + 1]) j++;
    while (j < k && nums[k] === nums[k - 1]) k--;
    j++;
    k--;
  } else if (sum < 0) {j++;} else {k--;}
}
}
  return result;
};`,
  "Time_Complexity": "O(n^2)",
  "Space_Complexity": "O(1)",
},
{
  "id": 8,
  "title": "Minimum Path Sum",
  "content": "https://leetcode.com/problems/minimum-path-sum/",
  "javascript": `
  var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (i === 0 && j === 0) continue;
        else if (i === 0) grid[i][j] += grid[i][j - 1];
        else if (j === 0) grid[i][j] += grid[i - 1][j];
        else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      }
    }
    return grid[m - 1][n - 1];
  }; `,
  "Time_Complexity": "O(mn)",
  "Space_Complexity": "O(1)",
},
{
  "id": 9,
  "title": "Maximum Subarray",
  "content": "https://leetcode.com/problems/maximum-subarray/",
  "javascript": `
  var maxSubArray = function(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};`,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(1)",
},
{
  "id": 10,
  "title": "Jump Game",
  "content": "https://leetcode.com/problems/jump-game/",
  "javascript": `
  var canJump = function (nums) {
    let lastPos = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      if (i + nums[i] >= lastPos) {
        lastPos = i;
      }
    }
    return lastPos === 0;
  }; `,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(1)",
},
{
  "id": 11,
  "title": "Merge Intervals",
  "content": "https://leetcode.com/problems/merge-intervals/",
  "javascript": `
  var merge = function(intervals) {
    if (!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= result[result.length - 1][1]) {
    result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
  } else {
    result.push(intervals[i]);
  }
}
  return result;
};`,
  "Time_Complexity": "O(nlogn)",
  "Space_Complexity": "O(n)",
},
{
  "id": 12,
  "title": "Valid Parentheses",
  "content": "https://leetcode.com/problems/valid-parentheses/",




  "javascript": `
  var isValid = function (s) {
    let stack = [];
    let map = new Map();
    map.set(')', '(');
    map.set('}', '{');
    map.set(']', '[');
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        stack.push(s[i]);
      } else {
        if (stack.length === 0 || stack.pop() !== map.get(s[i])) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }; `,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(n)",
},
{
  "id": 13,
  "title": "Letter Combinations of a Phone Number",
  "content": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
  "javascript": `
  var letterCombinations = function(digits) {
    if (!digits.length) return [];
    let map = new Map();
    map.set('2', ['a', 'b', 'c']);
  map.set('3', ['d', 'e', 'f']);
  map.set('4', ['g', 'h', 'i']);
  map.set('5', ['j', 'k', 'l']);
  map.set('6', ['m', 'n', 'o']);
  map.set('7', ['p', 'q', 'r', 's']);
  map.set('8', ['t', 'u', 'v']);
  map.set('9', ['w', 'x', 'y', 'z']);
  let result = [];
  let dfs = function(index, path) {
    if (index === digits.length) {
    result.push(path);
    return;
  }
  for (let i = 0; i < map.get(digits[index]).length; i++) {
    dfs(index + 1, path + map.get(digits[index])[i]);
  }
};
  dfs(0, '');
  return result;
};`,
  "Time_Complexity": "O(3^n * 4^m)",
  "Space_Complexity": "O(3^n * 4^m)",
},
{
  "id": 14,
  "title": "Remove Nth Node From End of List",
  "content": "https://leetcode.com/problems/remove-nth-node-from-end-of-list",
  "javascript": `
  var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    for (let i = 1; i <= n + 1; i++) {
      first = first.next;
    }
    while (first !== null) {
      first = first.next;
      second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
  }; `,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(1)",
},
{
  "id": 15,
  "title": "Implement strStr()",
  "content": "https://leetcode.com/problems/implement-strstr/",
  "javascript": `
  var strStr = function(haystack, needle) {
    if (needle === '') return 0;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
    return i;
  }
}
  return -1;
};`,
  "Time_Complexity": "O((n - k) * k)",
  "Space_Complexity": "O(1)",
},
{
  "id": 16,
  "title": "Valid Sudoku",
  "content": "https://leetcode.com/problems/valid-sudoku/",
  "javascript": `
  var isValidSudoku = function (board) {
    let rows = Array.from(Array(9), () => new Set());
    let cols = Array.from(Array(9), () => new Set());
    let boxes = Array.from(Array(9), () => new Set());
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let num = board[i][j];
        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (num !== '.') {
          if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
            return false;
          }
          rows[i].add(num);
          cols[j].add(num);
          boxes[boxIndex].add(num);
        }
      }
    }
    return true;
  }; `,
  "Time_Complexity": "O(1)",
  "Space_Complexity": "O(1)",
},
{
  "id": 17,
  "title": "Count and Say",
  "content": "https://leetcode.com/problems/count-and-say/",
  "javascript": `
  var countAndSay = function(n) {
    let result = '1';
  for (let i = 1; i < n; i++) {
    let count = 1;
    let str = '';\r \ \for(let j = 1; j <= result.length; j++) {
    if (result[j] !== result[j - 1]) {
    str += count.toString() + result[j - 1];
    count = 1;
  } else {
    count++;
  }
}
  result = str;
}
  return result;
}; `,
  "Time_Complexity": "O(2^n)",
  "Space_Complexity": "O(2^n)",
},
{
  "id": 18,
  "title": "Combination Sum",
  "content": "https://leetcode.com/problems/combination-sum/",
  "javascript": `
  var combinationSum = function (candidates, target) {
    let result = [];
    let dfs = function (sum, index, path) {
      if (sum === target) {
        result.push(path);
        return;
      }
      if (sum > target) return;
      for (let i = index; i < candidates.length; i++) {
        dfs(sum + candidates[i], i, path.concat(candidates[i]));
      }
    };
    dfs(0, 0, []);
    return result;
  }; `,
  "Time_Complexity": "O(n^target)",
  "Space_Complexity": "O(target)",
},
{
  "id": 19,
  "title": "Product of Array Except Self",
  "content": "https://leetcode.com/problems/product-of-array-except-self/",
  "javascript": `
  var productExceptSelf = function(nums) {
    let result = [];
    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return result;
};`,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(1)",
},
{
  "id": 20,
  "title": "Search in Rotated Sorted Array",
  "content": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
  "javascript": `
  var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] >= nums[left]) {
        if (target >= nums[left] && target < nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (target <= nums[right] && target > nums[mid]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        } \r \ \
      }
    }
    return -1;
  }; `,
  "Time_Complexity": "O(logn)",
  "Space_Complexity": "O(1)",
},
{
  "id": 21,
  "title": "Maximum Product Subarray",
  "content": "https://leetcode.com/problems/maximum-product-subarray/",
  "javascript": `
  var maxProduct = function(nums) {
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
    let maxTemp = maxSoFar;
    maxSoFar = Math.max(nums[i], Math.max(maxSoFar * nums[i], minSoFar * nums[i]));
    minSoFar = Math.min(nums[i], Math.min(maxTemp * nums[i], minSoFar * nums[i]));
    result = Math.max(result, maxSoFar);
  }
  return result;
};`,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(1)",
},
{
  "id": 22,
  "title": "Jump Game II",
  "content": "https://leetcode.com/problems/jump-game-ii/",
  "javascript": `
  var jump = function (nums) {
    let jumps = 0;
    let curEnd = 0;
    let curFarthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      curFarthest = Math.max(curFarthest, i + nums[i]);
      if (i === curEnd) {
        jumps++;
        curEnd = curFarthest;
      }
    }
    return jumps;
  }; `,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(1)",
},
{
  "id": 23,
  "title": "Spiral Matrix",
  "content": "https://leetcode.com/problems/spiral-matrix/",
  "javascript": `
  var spiralOrder = function(matrix) {
    if (!matrix.length) return [];
    let result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
    result.push(matrix[top][i]);
  }
  top++;
  for (let i = top; i <= bottom; i++) {
    result.push(matrix[i][right]);
  }
  right--;
  if (top <= bottom) {
    for (let i = right; i= left; i--) {
    result.push(matrix[bottom][i]);
  }
  bottom--; \r \ \
}
if (left <= right) {
  for (let i = bottom; i >= top; i--) {
  result.push(matrix[i][left]);
}
left++;
}
}
return result;
}; `,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(n)",
},
{
  "id": 24,
  "title": "Jump Game",
  "content": "https://leetcode.com/problems/jump-game/",
  "javascript": `
  var canJump = function (nums) {
    let lastPos = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
      if (i + nums[i] >= lastPos) {
        lastPos = i;
      }
    }
    return lastPos === 0;
  }; `,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(1)",
},
{
  "id": 25,
  "title": "Permutations",
  "content": "https://leetcode.com/problems/permutations/",
  "javascript": `
  var permute = function(nums) {
    let result = [];
    let used = Array(nums.length).fill(false);
    let dfs = function(path) {
    if (path.length === nums.length) {
    result.push(path.slice());
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;
    path.push(nums[i]);
    used[i] = true;
    dfs(path);
    path.pop();
    used[i] = false;
  }
};
  dfs([]);
  return result;
};`,
  "Time_Complexity": "O(n!)",
  "Space_Complexity": "O(n)",
},
{
  "id": 26,
  "title": "Maximum Subarray",
  "content": "https://leetcode.com/problems/maximum-subarray/",
  "javascript": `
  var maxSubArray = function (nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    for (let i = 1; i < nums.length; i++) {
      maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
  }; `,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(1)",
},
{
  "id": 27,
  "title": "Group Anagrams",
  "content": "https://leetcode.com/problems/group-anagrams/",
  "javascript": `
  var groupAnagrams = function(strs) {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split('').sort().join('');
  if (!map.has(sorted)) map.set(sorted, []);
  map.get(sorted).push(strs[i]);
}
  return Array.from(map.values()); \r \ \
}; `,
  "Time_Complexity": "O(nklogk)",
  "Space_Complexity": "O(nk)",
},
{
  "id": 28,
  "title": "Product of Two Integers",
  "content": "https://leetcode.com/problems/product-of-two-integers/",
  "javascript": `
  var getSum = function (a, b) {
    while (b !== 0) {
      let carry = a & b;
      a = a ^ b;
      b = carry << 1;
    }
    return a;
  };
  var negate = function (x) {
    return ~x + 1;
  };
  var multiply = function (a, b) {
    let result = 0;
    let sign = 1;
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      sign = -1;
    }
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
      if (b & 1) {
        result = getSum(result, a);
      }
      a <<= 1;
      b >>= 1;
    }
    if (sign === -1) {
      result = negate(result);
    }
    return result;
  }; `,
  "Time_Complexity": "O(logn)",
  "Space_Complexity": "O(1)",
},
{
  "id": 29,
  "title": "Add Two Numbers",
  "content": "https://leetcode.com/problems/add-two-numbers/",
  "javascript": `
  var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;
    while (p !== null || q !== null) {
    let x = (p !== null) ? p.val : 0;
    let y = (q !== null) ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
  curr.next = new ListNode(sum % 10);
  curr = curr.next;
  if (p !== null) p = p.next;
  if (q !== null) q = q.next;
}
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummyHead.next;
};`,
  "Time_Complexity":




    "O(max(m, n))",
  "Space_Complexity": "O(max(m, n))",
},
{
  "id": 30,
  "title": "Sqrt(x)",
  "content": "https://leetcode.com/problems/sqrtx/",
  "javascript": `
  var mySqrt = function (x) {
    if (x < 2) return x;
    let left = 2;
    let right = Math.floor(x / 2);
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let num = mid * mid;
      if (num === x) {
        return mid;
      } else if (num > x) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return right;
  }; `,
  "Time_Complexity": "O(logn)",
  "Space_Complexity": "O(1)",
},
{
  "id": 31,
  "title": "ZigZag Conversion",
  "content": "https://leetcode.com/problems/zigzag-conversion/",
  "javascript": `
  var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let rows = Array(numRows).fill('');
  let direction = -1;
  let row = 0;
  for (let i = 0; i < s.length; i++) {
    rows[row] += s[i];
    if (row === 0 || row === numRows - 1) direction = -direction;
    row += direction;
  }
  let result = '';
  for (let i = 0; i < numRows; i++) {
    result += rows[i];
  }
  return result;
};`,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(n)",
},
{
  "id": 32,
  "title": "Valid Parentheses",
  "content": "https://leetcode.com/problems/valid-parentheses/",
  "javascript": `
  var isValid = function (s) {
    let stack = [];
    let map = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        stack.push(s[i]);
      } else {
        let last = stack.pop();
        if (s[i] !== map[last]) {
          return false;
        }
      }
    }
    if (stack.length !== 0) {
      return false;
    }
    return true;
  }; `,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(n) ",
},
{
  "id": 33,
  "title": "Merge Intervals",
  "content": "https://leetcode.com/problems/merge-intervals/",
  "javascript": `
  var merge = function(intervals) {
    if (intervals.length === 0) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
    let last = result[result.length - 1];
    if (intervals[i][0] <= last[1]) {
    last[1] = Math.max(last[1], intervals[i][1]);
  } else {
    result.push(intervals[i]);
  }
}
  return result;
};`,
  "Time_Complexity": "O(nlogn)",
  "Space_Complexity": "O(n)",
},
{
  "id": 34,
  "title": "Climbing Stairs",
  "content": "https://leetcode.com/problems/climbing-stairs/",
  "javascript": `
  var climbStairs = function (n) {
    if (n === 1) return 1;
    let dp = Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  }; `,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(n)",
},
{
  "id": 35,
  "title": "Search Insert Position",
  "content": "https://leetcode.com/problems/search-insert-position/",
  "javascript": `
  var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
    let mid = Math.floor((left + right) / 2);
  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] > target) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}
  return left;
};`,
  "Time_Complexity": "O(logn)",
  "Space_Complexity": "O(1)",
},
{
  "id": 36,
  "title": "Set Matrix Zeroes",
  "content": "https://leetcode.com/problems/set-matrix-zeroes/",
  "javascript": `
  var setZeroes = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let firstRowZero = false;
    let firstColumnZero = false;
    for (let i = 0; i < n; i++) {
      if (matrix[0][i] === 0) {
      \ firstRowZero = true; \r \ \
      }
    }
    for (let i = 0; i < m; i++) {
      if (matrix[i][0] === 0) {
        firstColumnZero = true;
      }
    }
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (matrix[i][j] === 0) {
          matrix[0][j] = 0;
          matrix[i][0] = 0;
        }
      }
    }
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
    if (firstRowZero) {
      for (let i = 0; i < n; i++) {
        matrix[0][i] = 0;
      }
    }
    if (firstColumnZero) {
      for (let i = 0; i < m; i++) {
        matrix[i][0] = 0;
      }
    }
  }; `,
  "Time_Complexity": "O(mn)",
  "Space_Complexity": "O(1)",
},
{
  "id": 37,
  "title": "Permutations",
  "content": "https://leetcode.com/problems/permutations/",
  "javascript": `
  var permute = function(nums) {
    let result = [];
    let dfs = function(nums, path) {
    if (path.length === nums.length) {
    result.push(path.slice());
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (path.includes(nums[i])) continue;
    path.push(nums[i]);
    dfs(nums, path);
    path.pop();
  }
};
  dfs(nums, []);
  return result;
};`,
  "Time_Complexity": "O(n!)",
  "Space_Complexity": "O(n!)",
},
{
  "id": 38,
  "title": "Count and Say",
  "content": "https://leetcode.com/problems/count-and-say/",
  "javascript": `
  var countAndSay = function (n) {
    let str = '1';
    for (let i = 1; i < n; i++) {
      let count = 1;
      let say = '';
      for (let j = 1; j < str.length + 1; j++) {
        if (str[j] !== str[j - 1]) {
          say += count + str[j - 1]; \r \ count = 1; \r \ \
        } else {
          count++;
        }
      }
      str = say;
    }
    return str;
  }; `,
  "Time_Complexity": "O(n^2)",
  "Space_Complexity": "O(1)",
},
{
  "id": 39,
  "title": "Combination Sum",
  "content": "https://leetcode.com/problems/combination-sum/",
  "javascript": `
  var combinationSum = function(candidates, target) {
    let result = [];
    let dfs = function(candidates, target, path, start) {
    if (target < 0) {
    return;
  }
  if (target === 0) {
    result.push(path.slice());
    return;
  }
  for (let i = start; i < candidates.length; i++) {
    path.push(candidates[i]);
    dfs(candidates, target - candidates[i], path, i);
    path.pop();
  }
};
  dfs(candidates, target, [], 0);
  return result;
};`,
  "Time_Complexity": "O(n^m)",
  "Space_Complexity": "O(m)",
},
{
  "id": 40,
  "title": "Combination Sum II",
  "content": "https://leetcode.com/problems/combination-sum-ii/",
  "javascript": `
  var combinationSum2 = function (candidates, target) {
    let result = [];
    candidates.sort((a, b) => a - b);
    let dfs = function (candidates, target, path, start) {
      if (target < 0) {
        return;
      }
      if (target === 0) {
        result.push(path.slice());
        return;
      }
      for (let i = start; i < candidates.length; i++) {
        if (i > start && candidates[i] === candidates[i - 1]) continue;
        path.push(candidates[i]);
        dfs(candidates, target - candidates[i], path, i + 1);
        path.pop();
      }
    };
    dfs(candidates, target, [], 0);
    return result;
  }; `,
  "Time_Complexity": "O(n^m)",
  "Space_Complexity": "O(m)",
},
{
  "id": 41,
  "title": "First Missing Positive",
  "content": "https://leetcode.com/problems/first-missing-positive/",
  "javascript": `
  var firstMissingPositive = function(nums) {
    for (let i = 0; i < nums.length; i++) {
    while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
    [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
  }\r \ \

}
for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== i + 1) {
  return i + 1;
}
}
return nums.length + 1;
};`,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(1)",
},
{
  "id": 42,
  "title": "Trapping Rain Water",
  "content": "https://leetcode.com/problems/trapping-rain-water/",
  "javascript": `
  var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let result = 0;
    while (left < right) {
      if (height[left] < height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          result += leftMax - height[left];
        }
        left++;
      } else {
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          result += rightMax - height[right];
        }
        right--;
      }
    }
    return result;
  }; `,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(1)",
},
{
  "id": 43,
  "title": "Multiply Strings",
  "content": "https://leetcode.com/problems/multiply-strings/",
  "javascript": `
  var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
  let n = num1.length;
  let m = num2.length;
  let result = Array(n + m).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
    let mul = (+num1[i]) * (+num2[j]);
    let p1 = i + j;
    let p2 = i + j + 1;
    let sum = mul + result[p2];
    result[p2] = sum % 10;
    result[p1] += Math.floor(sum / 10);
}
}
  while (result[0] === 0) {
    result.shift();
  }
  return result.join('');
};`,
  "Time_Complexity": "O(nm)",
  "Space_Complexity": "O(n + m)",
},
{
  "id": 44,
  "title": "Wildcard Matching",
  "content": "https://leetcode.com/problems/wildcard-matching/",
  "javascript": `
  var isMatch = function (s, p) {
    let dp = Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= p.length; i++) {
      if (p[i - 1] === '*') {
        for (let j = 1; j <= s.length; j++) {
          dp[j] = dp[j] || dp[j - 1];
        }
      } else {
        for (let j = s.length; j >= 1; j--) {
          dp[j] = dp[j - 1] && (s[j - 1] === p[i - 1] || p[i - 1] === '?');
        }
        dp[0] = false;
      }
    }
    return dp[s.length];
  }; `,
  "Time_Complexity": "O(sp)",
  "Space_Complexity": "O(s)",
},
{
  "id": 45,
  "title": "Jump Game II",
  "content": "https://leetcode.com/problems/jump-game-ii/",
  "javascript": `
  var jump = function(nums) {
    let end = 0;
    let maxPosition = 0;
    let steps = 0;
    for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if (i === end) {
    end = maxPosition;
    steps++;
  }
}
  return steps;
};`,
  "Time_Complexity": "O(n)",
  "Space_Complexity": "O(1)",
},
{
  "id": 46,
  "title": "Permutations II",
  "content": "https://leetcode.com/problems/permutations-ii/",
  "javascript": `
  var permuteUnique = function (nums) {
    let result = [];
    nums.sort();
    let dfs = function (nums, path, used) {
      if (path.length === nums.length) {
        result.push(path.slice());
        return;
      }
      for (let i = 0; i < nums.length; i++) {
        if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;
        path.push(nums[i]);
        used[i] = true;
        dfs(nums, path, used);
        path.pop();
        used[i] = false;
      }
    };
    dfs(nums, [], []);
    return result;
  }; `,
  "Time_Complexity": "O(n!)",
  "Space_Complexity": "O(n!)",
},
{
  "id": 47,
  "title": "Permutations II",
  "content": "https://leetcode.com/problems/permutations-ii/",
  "javascript": `
  var permuteUnique = function(nums) {
    let result = [] ;
    nums.sort();
    let dfs = function (nums, path, used) {
    if (path.length === nums.length) {
    result.push(path.slice());
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) continue;
    path.push(nums[i]);
    used[i] = true;
    dfs(nums, path, used);
    path.pop();
    used[i] = false;
  }
};
  dfs(nums, [], []);
  return result; \r \ \
}; `,
  "Time_Complexity": "O(n!)",
  "Space_Complexity": "O(n!)",
},
{
  "id": 48,
  "title": "Rotate Image",
  "content": "https://leetcode.com/problems/rotate-image/",
  "javascript": `
  var rotate = function (matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
    for (let i = 0; i < n; i++) {
      matrix[i].reverse();
    }
  }; `,
  "Time_Complexity": "O(n^2)",
  "Space_Complexity": "O(1)",
},
{
  "id": 49,
  "title": "Group Anagrams",
  "content": "https://leetcode.com/problems/group-anagrams/",
  "javascript": `
  var groupAnagrams = function(strs) {
    let map = new Map();
    for (let str of strs) {
    let count = Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
    count[str.charCodeAt(i) - 97]++;
  }
  let key = count.join('');
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(str);
}
  return Array.from(map.values());
};`,
  "Time_Complexity": "O(nk)",
  "Space_Complexity": "O(nk)",
},
{
  "id": 50,
  "title": "Pow(x, n)",
  "content": "https://leetcode.com/problems/powx-n/",
  "javascript": `
  var myPow = function (x, n) {
    if (n === 0) return 1;
    if (n < 0) {
      n = -n;
      x = 1 / x;
    }
    let half = myPow(x, Math.floor(n / 2));
    if (n % 2 === 0) {
      return half * half; \r \ \
    } else {
      return half * half * x;
    }
  }; `,
  "Time_Complexity": "O(logn)",
  "Space_Complexity": "O(logn)",
}]