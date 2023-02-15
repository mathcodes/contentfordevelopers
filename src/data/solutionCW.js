export const CodeWarsSolutions = [
    {
      'id': 1,
      'title': '1. Last digit of a huge number',
      'description': 'Find the last digit of the nth Fibonacci number.',
      'javascript': `function lastDigit(n) {
        if (n < 2) return n;
        let fib = [0, 1];
        for (let i = 2; i <= n; i++) {
          fib[i] = (fib[i - 1] + fib[i - 2]) % 10;
        }
        return fib[n];
      }`,
      'java': `public class LastDigit {
        public static int lastDigit(long n) {
          if (n < 2) return (int) n;
          int fib[] = {0, 1};
          for (int i = 2; i <= n; i++) {
            fib[i % 2] = (fib[0] + fib[1]) % 10;
          }
          return fib[(int) n % 2];
        }
      }`,
      'c++': `int lastDigit(long n) {
        if (n < 2) return n;
        int fib[] = {0, 1};
        for (int i = 2; i <= n; i++) {
          fib[i % 2] = (fib[0] + fib[1]) % 10;
        }
        return fib[n % 2];
      }`,
      'python': `def last_digit(n):

        if n < 2: return n
        fib = [0, 1]
        for i in range(2, n + 1):

          fib[i % 2] = (fib[0] + fib[1]) % 10
        return fib[n % 2]`,
     'Time Complexity': 'O(n)',
      'Space Complexity': 'O(1)'
    },
    {
      'id': 2,
      'title': '2. Find the odd int',
      'description': 'Given an array, find the int that appears an odd number of times.',
      'javascript': `function findOdd(A) {
        let count = {};
        A.forEach((num) => count[num] = count[num] + 1 || 1);
        for (let num in count) {
          if (count[num] % 2 !== 0) return Number(num);
        }
      }`,
      'java': `public class FindOdd {
        public static int findIt(int[] A) {
          Map<Integer, Integer> count = new HashMap<>();
          for (int num : A) {
            count.put(num, count.getOrDefault(num, 0) + 1);
          }
          for (int num : count.keySet()) {
            if (count.get(num) % 2 != 0) return num;
          }
          return -1;
        }
      }`,
      'c++': `int findIt(std::vector<int> &A) {
        std::unordered_map<int, int> count;
        for (int num : A) {
          count[num]++;
        }
        for (auto num : count) {
          if (num.second % 2 != 0) return num.first;
        }
        return -1;
      }`,
      'python': `def find_it(seq):
        count = {}
        for num in seq:
          count[num] = count.get(num, 0) + 1
        for num in count:
          if count[num] % 2 != 0: return num
        return -1`,
      'Time Complexity': 'O(n)',
      'Space Complexity': 'O(n)'
    },

]

