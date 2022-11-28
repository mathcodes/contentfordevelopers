// EASY TO UNDERSTAND
// Time: O(nlogn)
// Space: O(n)
var largestMultipleOfThree = function(digits) {
  // The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
  const sum = digits.reduce((a,c) => a + c);

  // if the sum is 0 return 0 for edgecase [0,0,0,0]
  if (sum === 0) return '0'

  // find out the value needed to be removed in order to make the
  // final result equal to 3
  const remainder = sum % 3;

  // sort the digits in reverse order to get the maximum value
  // of digits joined together
  digits.sort((a,b) => b - a);

  // if the sum of all the digits are divisible by 3 return the digits
  // as a string
  if (remainder === 0) return digits.join('');

  // create 2 stores that hold the indexes of values with a remainder of
  // 2 and 1 so we can remove that from the  result
  let twos = [];
  let ones = [];
  for (let i = 0; i < digits.length; i++) {
      switch (digits[i] % 3) {
          case 2:
              twos.push(i)
              break;
          case 1:
              ones.push(i)
              break;
      }
  }

  // get the last 2 indexes of each so we can make the smalles amount of
  // change to the result
  const one = ones.pop();
  const two = twos.pop();

  // if the sum has a remainder of 1
  if (remainder === 1) {
      // get the next index with the remainder of 2 in case if there is no
      // value in digits with the remainer of 1
      let two2 = twos.pop();

      // if there is a value with the remainder of 1 remove it from digits
      if (one !== undefined) {
          digits[one] = '';

      // if there are 2 values with remainder of 2 remove both from digits
      } else if (two2 !== undefined) {
          digits[two] = '';
          digits[two2] = '';

      // otherwise we aren't able to make a final result that is divisible by
      // 3 so we return an empty string
      } else {
          return ''
      }

  // if the sum has a remainder of 2
  } else {
      // get the next index with the remainder of 1 in case if there is no
      // value in digits with the remainer of 2
      let one2 = ones.pop();

      // if there is a value with the remainder of 2 remove it from digits
      if (two !== undefined) {
          digits[two] = '';

      // if there are 2 values with remainder of 1 remove both from digits
      } else if (one2 !== undefined) {
          digits[one] = ''
          digits[one2] = ''

      // otherwise we aren't able to make a final result that is divisible by
      // 3 so we return an empty string
      } else {
          return ''
      }
  }

  // return digits as a string
  return digits.join('')
};
//////////////////////////////////////////////////////////////////////////////////////
// SHORTER SOLUTION
// Time: O(nlogn)
// Space: O(n)
var largestMultipleOfThree = function(digits) {
  const sum = digits.reduce((a,c) => a + c);
  if (sum === 0) return '0'
  const remainder = sum % 3;
  digits.sort((a,b) => b - a);
  if (remainder === 0) return digits.join('');
  const doubleRemainder = remainder === 1 ? 2 : 1;
  const idxs = []
  for (let i = digits.length - 1; i >= 0; i--) {
      const numRemainder = digits[i] % 3;
      if (numRemainder === remainder) {
          digits[i] = '';
          return digits.join('')
      } else if (numRemainder === doubleRemainder) {
          idxs.push(i);
      }
  }
  const [idx1, idx2] = idxs;
  if (idx2 === undefined) return '';
  
  digits[idx1] = ''
  digits[idx2] = ''
  return digits.join('');
};
//////////////////////////////////////////////////////
// FASTEST SOLUTION learning from https://leetcode.com/problems/largest-multiple-of-three/discuss/517570/Python-O(n)-Simple-Bucket-Sort-with-Explanation
// Time: O(n)
// Space: O(n)
var largestMultipleOfThree = function(digits) {
const values = new Array(10);
for (let i = 0; i < 10; i++) values[i] = [];

let sum = 0;
for (let num of digits) {
  values[num].push(num);
  sum += num;
}
if (sum === 0) return '0';
if (sum % 3 === 0) return stringify(values);

const remainder = sum % 3;
for (let i = remainder; i < 10; i += 3) {
  if (values[i].length > 0) {
    values[i].pop();
    return stringify(values);
  }
}

let count = 0;
const start = remainder === 1 ? 2 : 1;
for (let i = start; i < 10; i += 3) {
  while (values[i].length > 0) {
    values[i].pop();
    count++;
    if (count === 2) return stringify(values);
  }
}
return '';
};


function stringify(values) {
return values.reduce((result, nums) =>  nums.join('') + result, '');
}