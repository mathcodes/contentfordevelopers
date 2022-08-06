var memoized = {};
var fibonacci = function(n) {
  if (n === 0 || n === 1) {
    return n;
  } else if (memoized[n]) {
    return memoized[n];
  } else {
    memoized[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memoized[n];
  }
}

console.log(fibonacci(4))
console.log(fibonacci(5))
