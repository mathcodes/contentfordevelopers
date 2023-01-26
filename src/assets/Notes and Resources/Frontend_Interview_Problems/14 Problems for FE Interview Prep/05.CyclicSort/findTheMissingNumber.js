// setup function that takes in arr
const findTheMissingNum = (arr) => {

  // setup while loop
  let i = 0

  while (i < arr.length) {

    // swap the elements
    // set variable for current value
    currEl = arr[i]
    // if NOT in the right place AND within range
    if (currEl != i && currEl < arr.length) {
      // ONCE THESE^ ARE TRUE WE SWAP
      // setup var for what is in the (value at) currEl
      const newSpotVal = arr[currEl]
      // NOW SWAP current value binds to value at current value, and value at currEl binds to current value
      arr[currEl] = currEl
      arr[i] = newSpotVal
      // else
    } else {
      // increment case when currEl is NOT EQUAL to i and within the range

      i++
    }
  }
  // THE CODE ABOVE WOULD RETURN THE ARRAYS SORTED with the nth number in the missing number's spot: [4,0,3,1] > [0,1,4,3]
  // NOW WE JUST NEED TO FIND THE MISSING NUMBER
  // create for loop with j and return when value is not equal to index
  for (j = 0; j < arr.legnth; j++) {
    if (arr[j] != j) {
      return j
    }
  }

  return arr.length
}
// as soon so the number in the array is NOT EQUAL to the index, we return the index



// this is for the one case where missing number is the length of the array


// Test Cases
console.log(findMissingNum([4, 0, 3, 1])) // 2
console.log(findMissingNum([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8
console.log(findMissingNum([4, 0, 2, 5, 3, 1])) // 6