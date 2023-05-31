var plusOne = function (digits) {
  // Copy the digits array to a new array
  let newDigits = [...digits];
  // iterate over the digits from right to left
  // Make sure the loop condition includes i = 0
  for (let i = newDigits.length - 1; i >= 0; i--) {
    // if current digit is 9, make it 0
    if (newDigits[i] == 9) {
      newDigits[i] = 0
    } else {
      // add one to the last digit that is not 9
      newDigits[i] = newDigits[i] + 1
      break; // Exit the loop if no more carrying is needed
    }
  }

  // for when the first item is 9, we add a new digit if the most significant digit is 0
  if (newDigits[0] == 0) {
    newDigits.unshift(1);
  }

  return newDigits;
};
