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

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))
console.log(fibonacci(9))
console.log(fibonacci(10))
console.log(fibonacci(20))
console.log(fibonacci(50))
console.log(fibonacci(100))
