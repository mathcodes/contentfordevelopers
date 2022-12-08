var firstMissingPositive = function(nums) {
  let i = 0,
  arrLength = nums.length;

  while(i < arrLength){
    const toSwap = nums[i],
    swapWithIndex = toSwap - 1

    // we only want to SWAP if these three condition are met:
    // toSwap > 0
    //    our current value is positive
    // toSwap <= arrLength
    //    our current value is within the bounds of the array
    // toSwap !== nums[swapWithIndex]
    //    our current value does not equal the value of its destination
    if(toSwap > 0 && toSwap <= arrLength && toSwap !== nums[swapWithIndex]){
      const swapWith = nums[swapWithIndex]
      nums[swapWithIndex] = toSwap
      nums[i] = swapWith
    } else {
      i++
    }
  }
  console.log(nums)
  for (let j = 0; j < nums.length; j++){
    if(nums[j] !== j+1) {
      return j + 1
    }
  }
  return arrLength + 1
}

console.log(firstMissingPositive([0,2,4,-3,99,5,1]))