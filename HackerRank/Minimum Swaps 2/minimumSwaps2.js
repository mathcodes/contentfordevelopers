function minimumSwaps(arr) {
  let swapCount = 0;
  arr.forEach((currentInt, index) => {
      const position = index + 1;
      if (currentInt !== position) {
          const indexToSwap = arr.indexOf(position);
          arr[indexToSwap] = currentInt;
          arr[index] = position;
          swapCount = swapCount + 1;
      }
  });
  return swapCount;
}
