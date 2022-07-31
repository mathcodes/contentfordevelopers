/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 function convert(s, numRows) {
  if (numRows === 1) return s;
  
  const stack = new Array(numRows).fill('');
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