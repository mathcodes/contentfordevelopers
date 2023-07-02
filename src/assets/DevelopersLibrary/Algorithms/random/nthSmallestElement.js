// Duplicaitons

// nthSmallest({3,1,2} ,2) ==> return (2)
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7)
// nthSmallest({177,225,243,-169,-12,-5,2,92}, 5) return (92)

function nthSmallest(array, index) {
  //sort array
  // find nth num => index-1
  let sortedArray = array.sort((a,b) =>a-b);
  console.log(sortedArray) // [ -3, 1, 3, 90 ]
  let answer = sortedArray[index-1]
  return answer
}

console.log(nthSmallest([3,1,90,-3], 2)) // 1

console.log("Here is the shorter version's solution, which as expected is the same:", "\n" )

function nthSmallestShorter(array, index) {
  //sort array
  // find nth num => index-1
  return array.sort((a,b) => a-b)[index-1];
}
console.log("array.sort((a,b) => a-b)[index-1];","\n")
console.log(nthSmallestShorter([3,1,90,-3], 2)) // 1

