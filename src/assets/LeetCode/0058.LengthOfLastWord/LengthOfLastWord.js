var lengthOfLastWord = function (s) {
  let count = 0
  for (let i = s.length - 1; i >= 0; i--) {

    if (s[i] == ' ') {
      console.log("break")
      break
    } else {
      count++
    }
  }
  console.log(count)
  return count
};

lengthOfLastWord("Hello World")