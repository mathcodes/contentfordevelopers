// Solution
// Brute force approach
// We can use a new array to store the result. By iterating through the input array, we check if the current element is in the result array using Array.prototype.includes() and add it into the results array if it doesn't exist.

// However, this solution is O(n2) because Array.prototype.includes() is an O(n2) operation and we do it once for every element in the input array.


// export default function uniqueArray(array) {
//   // We can use a new array to store the result
//   const newArray = [];
//   // Now we iterate through the input array to check if the current element is in the result array
//   array.forEach((item) => {
//     if (!newArray.includes(item)) [
//       newArray.push(item)
//     ]
//   });
//   return newArray;
// };

// Solution 2
// The solution above is O(n^2), not so great. Using the 'Set' data structure, we can bring that time complexity down to O(1).
// SO instead of using `Array.prototype.includes()`, we can use `Set.prototype.has()` to query in O(1) time for the existenc the element
//  The structure is similar to the BRUTE FORCE solotioun:
export default function uniqueArray(array) {
  const result = [];
  const seen = new Set();

  array.forEach((item) => {
    if (!seen.has(item)) {
      result.push(item);
      seen.add(item);
    }
  });

  return result;
}


// COMMENTS:

// Clarification Questions
// How do we compare equality for non-primitive values like arrays and objects?
// For the purpose of this question in an interview setting, we can use === for comparison. Lodash's uniq function uses SameValueZero which is much more sophisticated.
// Will the array only contain values of the same type?
// We cannot make that assumption.

// LINK : https://lodash.com/docs/4.17.15#uniq
