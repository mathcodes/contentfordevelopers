# Cyclic Sort Pattern

• Problems involving arrays containing numbers in a given range.
• We iterate over the array one number at a time, and if the current number you are iterating is not at the correct index, you swap it with the number at its correct index. You could try placing the number in its correct index, but this will produce a complexity of O(n^2) which is not optimal, hence the Cyclic Sort pattern.


### ID the Cyclic Sort

• `Sorted array` with numbers in a `given range`
• Find the `missing`/`duplicate`/`smallest` number in an `sorted`/`rotated` `array`


### Examples of cyclic sort pattern:

<details>
<summary>
<span style="font-size:2rem; color:green;">Find the Missing Number (easy)</span>
</summary>

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

```js
// 1. Sort the numbers using cyclic sort
// 2. Find the number that is NOT in the right place. This number's index will be the number we are missing

function findMissingNum (arr) {

  let i = 0;
  while(i < arr.length){
    // swap the elements
    const currEl = arr[i];
    // 'currEl != i' so we dont increment i if we are in the right place
    // currEl < arr.length because than it is out of the range (arr.length)
    if(currEl != i && currEl < arr.length){
      // ONCE THESE^ ARE TRUE WE SWAP
      // newSpotVal is what is in the currEl so we set it to arr[currEl]
      const newSpotVal = arr[currEl] 
      // NOW SWAP so arr[currEl] is now arr[i], which is defined as currEl
      arr[currEl]=currEl;
      // now where we are (arr[i]) is now what was in the currEl (newSpotVal
      arr[i] = newSpotVal
    }else {
      // increment case when currEl is NOT EQUAL to i and within the range
      i++
    }
  }

  // THE CODE ABOVE WOULD RETURN THE ARRAYS SORTED with the nth number in the missing number's spot: [4,0,3,1] > [0,1,4,3]
  // NOW WE JUST NEED TO FIND THE MISSING NUMBER
  // create for loop with j
  for (let j = 0; j < arr.length; j++){
    // as soon so the number in the array is NOT EQUAL to the index, we return the index
    if(arr[j] !== j) {
      return j
    }
  }
  // this is for the one case where missing number is the length of the array
  return arr.length
}

// Test Cases
console.log(findMissingNum([4,0,3,1])) // 2
console.log(findMissingNum([9,6,4,2,3,5,7,0,1])) // 8
console.log(findMissingNum([4,0, 2, 5,3,1])) // 6
```


</details>

<details>
<summary>
<span style="font-size:2rem; color:green;"> Find the Smallest Missing Positive Number (medium) </span>
</summary>

Given an unsorted array containing both positive and negative numbers, find the smallest missing positive number in it. You should do this in-place with a max time complexity of O(n).

- if a number is positive, put it in it's right place
- loop through array, the index of first number in wrong place is out missing number
 
```js

// input: [3, 0, -1, 1, 2]
var firstMissingPositive = function(nums) {
  let i = 0,
  arrLength = nums.length;

  while(i < arrLength){
    const newSpotVal = nums[i],
    swapWithIndex = newSpotVal - 1

    // we only want to SWAP if these three conditions are met:
    // newSpotVal > 0
    //    our current value is positive
    // newSpotVal <= arrLength
    //    our current value is within the bounds of the array
    // newSpotVal !== nums[swapWithIndex]
    //    our current value does not equal the value of its destination
    if(newSpotVal > 0 && newSpotVal <= arrLength && newSpotVal !== nums[swapWithIndex]){
      const swapWith = nums[swapWithIndex]
      nums[swapWithIndex] = newSpotVal
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

```

</details>