var myAtoi = function(s) {
  // The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

  // RADIX, WHAT?!?!  a radix of 10 converts from a decimal number, 8 converts from octal, 16 from hexadecimal, and so on.)
  // For radices above 10, letters of the English alphabet indicate numerals greater than 9. For example, for hexadecimal numbers (base 16), A through F are used.

  // SYNTAX - parseInt(string)
  // string = The value to parse. If this argument is not a string, then it is converted to one using the ToString abstract operation. Leading whitespace in this argument is ignored.

  let n  = parseInt(s); 
  
  if(!n)
    return 0;
  // The Math.pow() static method, given two arguments, base and exponent, returns base exponent.
  // Math.pow(base, exponent)
  if(n < Math.pow(-2,31)) 
    return Math.pow(-2,31);

  if(n > Math.pow(2,31) - 1) 
    return Math.pow(2,31) - 1;

  return n
};