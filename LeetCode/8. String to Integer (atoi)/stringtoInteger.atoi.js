var myAtoi = function(s) {
  //     Read in and ignore any leading whitespace.
 

  while(s.slice(0,1) == ' '){
    s = s.substr(1);
    console.log(s)
    return s
  }
  console.log("second s: ", s)
  return s
  // Check if the next character (if not already at the end of the sing) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
  // Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the sing is ignored.
  // Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
  // If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
  // Return the integer as the final result.
};


console.log(myAtoi(" hello"));