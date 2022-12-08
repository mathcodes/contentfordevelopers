# Cyclic Sort Pattern

• Problems involving arrays containing numbers in a given range.
• We iterate over the array one number at a time, and if the current number you are iterating is not at the correct index, you swap it with the number at its correct index. You could try placing the number in its correct index, but this will produce a complexity of O(n^2) which is not optimal, hence the Cyclic Sort pattern.


ID the Cyclic Sort

• `Sorted array` with numbers in a `given range`
• Find the `missing`/`duplicate`/`smallest` number in an `sorted`/`rotated` `array`


Examples of cyclic sort pattern:

• Find the Missing Number (easy)

```js
// 1. Sort the numbers using cyclic sort
// 2. Find the number that is NOT in the right place. This number's index will be the numer we are missing

function findMissingNum (arr) {

  let i = 0;
  while(i<arr.length){
    // swap the elements
    const newSpot = arr[i];
    if(newSpot != i && newSpot < arr.length){
      const toSwap = arr[newSpot]
      arr[newSpot]=newSpot;
      arr[i] = toSwap
    }else {
      // increment case
      i++
    }
  }
  for (let j = 0; j < arr.length; j++){
    if(arr[j] !== j) {
      return j
    }
  }
  return arr.length
}

console.log(findMissingNum([4,0,3,1])) // 2
console.log(findMissingNum([9,6,4,2,3,5,7,0,1])) // 8
console.log(findMissingNum([4,0,3,1])) // 2
console.log(findMissingNum([4,0, 2, 5,3,1])) // 2
```
• Find the Smallest Missing Positive Number (medium)
Given an unsorted array containing both positive and negative numbers, find the smallest missing positive number in it. You should do this in-place with a max time complexity of O(n).

- if a number is positive, put it in it's right place
- loop through array, the index of first number in wrong place is out missing number

```js
// input: [3, 0, -1, 1, 2]
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
```