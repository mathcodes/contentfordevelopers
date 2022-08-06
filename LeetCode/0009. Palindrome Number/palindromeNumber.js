var isPalindrome = function (x) {
  let reverseX = parseInt(x.toString().split("").reverse().join(""));
  return reverseX == x ?true : false;
};

