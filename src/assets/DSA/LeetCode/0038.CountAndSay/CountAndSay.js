function countAndSay(n) {
  if (n === 1) {
    return "1";
  }

  let prev = countAndSay(n - 1);
  let result = "";
  let count = 1;

  for (let i = 0; i < prev.length; i++) {
    if (prev[i] === prev[i+1]) {
      count++;
    } else {
      result += count + prev[i];
      count = 1;
    }
  }
  console.log(result)
  return result;
}


countAndSay(5)