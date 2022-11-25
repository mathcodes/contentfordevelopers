function ccb(col, n) {
  let div = (n + 1) / (2 << col);
  let sum = Math.floor(div);
  let rest = Math.max(0, (div - sum) * (2 << col) - (1 << col));
  return sum * (1 << col) + rest;
}

function cab(n) {
  // n < 1e9 => log2(1e9) ~= 30
  let bits = 0;
  for (let i = 0; i < 30; ++i) {
    bits += ccb(i, n);
  }
  return bits;
}

function cbr(a, b) {
  return cab(b) - cab(a-1)
}

function countOnes(left, right) {
  return cbr(left, right);
}