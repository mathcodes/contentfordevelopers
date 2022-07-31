// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function (x) {
//   // chain methods to reverseerse the number
//   let reverse = x.toString().split("").reverse().join("");
//   console.log("x: " + x + ", reverse: " + reverse);
//   // turn the string 'reverse' into an integer
//   let y = parseInt(reverse);
//   console.log("y: " + y)
//   // check if they are a palindrome and return 'true' or 'false' accordingly
//   if (reverse == x) {
//     console.log(true);
//     return true
//   } else {
//     console.log(false);
//     return false
//   }
// };

// isPalindrome(45754);
// isPalindrome(4);
// isPalindrome(-101);
// isPalindrome(4575);

  // *-*-*-*-*-*-*-*-*-* REFACTORED *-*-*-*-*-*-*-*-*-*- \\
 // -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*- \\
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* \\
// /**
//  * @param {number} x
//  * @return {boolean}
//  */
//  var isPalindrome = function (x) {

//   let reverseX = parseInt(x.toString().split("").reverse().join(""));

//   if (reverseX == x) {
//     console.log(true);
//     return true
//   } else {
//     console.log(false);
//     return false
//   }
// };

// isPalindrome(45754);
// isPalindrome(4);
// isPalindrome(-101);
// isPalindrome(4575);

  // *-*-*-*-*-*-*-*-*-* REFACTORED *-*-*-*-*-*-*-*-*-*- \\
 // -*-*-*-*-*-*-*-*-*-*-*-AGAIN-*-*-*-*-*-*-*-*-*-*-*-*- \\
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* \\
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function (x) {

  let reverseX = parseInt(x.toString().split("").reverse().join(""));

  reverseX == x ? console.log(true) : console.log(false);
};

isPalindrome(45754);
isPalindrome(4);
isPalindrome(-101);
isPalindrome(4575);

Ternary Operators... it just feels right!

if (reverseX == x) {
  console.log(true);
  return true
} else {
  console.log(false);
  return false
}
 

becomes

reverseX == x ? console.log(true) : console.log(false);

