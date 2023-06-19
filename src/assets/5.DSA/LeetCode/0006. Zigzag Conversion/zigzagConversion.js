/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 function convert(s, numRows) {
  if (numRows === 1) return s;
  const stack = new Array(numRows).fill('');
  console.log(stack);
  let idx = 0;
  let isZigZag = false;
  
  for (let char of s) {
      stack[idx] += char;
      if (idx === numRows - 1 && !isZigZag) isZigZag = true;
      if (idx === 0 && isZigZag) isZigZag = false;           
      isZigZag ? idx-- : idx++;
  }

  return stack.join('');
};

convert('PAYPALISHIRING', 3);

// This solution converts a string into a zigzag pattern based on a given number of rows. The time complexity of this solution is O(n) where n is the length of the input string. We iterate through the input string once and for each character, we perform a constant-time operation to add the character to the corresponding stack and update the index.

// The space complexity is O(n) as well, where n is the length of the input string. We use an array of fixed size (numRows) to store the characters in the zigzag pattern, the size of the array will be at most n, where n is the length of the input string.

// This solution can be optimized in terms of space complexity, by not using an array and instead concatenating the characters as we go through the input string in a single pass, this way we avoid the space overhead of the array. But this will make the code a bit more complex and harder to understand.

// OPTIMIZED SOLUTION

function convert(s, numRows) {
  if (numRows === 1) return s;
  
  let result = '';
  let idx = 0;
  let isZigZag = false;
  
  for (let i = 0; i < numRows; i++) {
    idx = i;
    isZigZag = false;
    if(i === 0 || i === numRows - 1) {
      while (idx < s.length) {
        result += s[idx];
        idx += 2 * (numRows - 1);
      }
    } else {
      while (idx < s.length) {
        result += s[idx];
        if (isZigZag) {
          idx += 2 * (numRows - i - 1);
        } else {
          idx += 2 * i;
        }
        isZigZag = !isZigZag;
      }
    }
  }
  return result;
};
convert('PAYPALISHIRING', 3);

// In this solution, we eliminate the use of an additional array to store the characters in the zigzag pattern by concatenating the characters as we go through the input string. We use a single variable "result" to store the final zigzag pattern.
// We still use two variables, idx and isZigZag, to keep track of the current position and the direction of the zigzag pattern.
// We have two nested loops, the outer loop iterates through the number of rows and the inner loop iterates through the characters of the input string.

// The time complexity of this solution is O(n) where n is the length of the input string.