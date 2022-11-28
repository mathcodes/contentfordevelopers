// var generateParenthesis = function(n) {
//   const res = [];
//   function generate(open, close, items) {
//       if (open === n && close === n) {
//           res.push(items.join(''));
//           return;
//       }
//       //1. 2. end up on this if statement since open = 0 and n = 2, recall function with open = 1 and close = 0 
//       //1. 2. and add using ...items to collect all the items and add "(" ... WE DO THIS TWICE as we get to open = 2 after 2 iterations, then
//       if (open < n) { 
//          generate(open + 1, close, [...items, "("]); 
//       }
//       //2. 1. We end up here for 2 iterations and we have created the first item based on n=2, "(())"
//       if (close < open) { //
//           generate(open, close + 1, [...items, ")"]);   
//       }
//   }
//   generate(0, 0, []); //1. 1. so we start with 0 open and 0 close
//   return res;
// };

// console.log(generateParenthesis(3))
// console.log(generateParenthesis(2))


var generateParenthesis = function (n) {
  if (n == 0) return [""]

  const result = []

  function genParantheses(frontNo, backNo, string) {

      //we can go 2 ways, we can add a new "(" or we can add one ")"
      let used = false
      if (frontNo >= 1) {
          // add a new "("
          used = true
          genParantheses(frontNo - 1, backNo + 1, string + "(")
      }
      if (backNo >= 1) {
          // add a new ")"
          used = true
          genParantheses(frontNo, backNo - 1, string + ")")
      }

      if (!used)
          result.push(string)
      return
  }
  genParantheses(n - 1, 1, '(')
  return result
};

generateParenthesis(3)
console.log(generateParenthesis(3))