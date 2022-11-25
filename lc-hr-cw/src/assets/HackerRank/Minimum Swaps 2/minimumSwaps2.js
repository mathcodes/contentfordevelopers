function minimumSwaps(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      const curr = i + 1;
      if (num !== curr) {
          let temp
          for (let i = 0; i < arr.length; i++) {
              if (arr[i] === curr) {
                  temp = i;
                  break
              }
          }
          arr[temp] = num;
          arr[i] = curr;
          count = count + 1;
      }
  }
  return count;
}


console.log(minimumSwaps([4, 5, 1, 2, 3]));