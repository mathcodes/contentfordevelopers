function solutionInOrder(iterable) {
  // if iterable is an array, use it as is, otherwise split it into an array, then (either way) bind the array to `stringArray`
  let stringArray = Array.isArray(iterable) ? iterable : iterable.split('');
  console.log(stringArray); // debug
  // initialize an empty array and bind it to the solution variable
  let solution = stringArray.filter((letter, i) => {
    console.log("letter: " + letter + " i: " + i); // debug
    console.log("stringArray[i]: ", stringArray[i])// debug
    return (
      // if the letter is not the first letter in the array, 
      // then check if it is the same as the letter before it in the array
      stringArray[i] != stringArray[i + 1]
    );
  })
  console.log(solution);  //[ 'A', 'B', 'C', 'D', 'A', 'B' ]
  return solution;
}

solutionInOrder('AAAABBBCCDAABBB')

// Notes for a deep understanding of the solution:

/* `isArray` is a method that checks if the argument passed to it is an
  array. */

/* `filter` is a method that takes a callback function as an argument. The
  callback function is called on each element in the array, and if the
  callback function returns true, the element is added to the new array. */
