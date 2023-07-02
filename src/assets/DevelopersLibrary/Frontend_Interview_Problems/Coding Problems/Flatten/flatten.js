// // This is a common JavaScript interview question. It tests one's knowledge about checking for the array type, looping through an array, various native methods such as Array.prototype.concat, and recursion.

// // Clarification Questions
// // What type of data does the array contain? Some approach only applies to certain data types.
// // How many levels of nesting can this array have? If there are thousands-of-levels of nesting, recursion might not be a good idea given its big upfront memory footprint.
// // Should we return a new array or we mutate the existing array?
// // Can we assume valid input, i.e. an array. Normally the answer is "yes", so you don't have to waste your time doing defensive programming.
// // Does the environment the code runs on has ES6+ support? The environment determines what methods/native APIs you have access to.
// // Solutions:

// // Solution 1: Iterative Solution
// // First let's think through how we should check if a given value is an array or not. We can use Array.isArray or instanceof Array to achieve that. There are some nuances between these two. If you are interested you can check out this article by Jake Archibald.

// // Then, we don't want to mutate the original input array, which is a good practice in general, so we will make a copy of the input array and return a new array with all the items extracted from the input array.

// // Here is the solution. We loop through the array with a while loop and we take out an item from the array one at a time to check to see if that item is an array. If the item is not an array, we put it into the res array. If it is an array, we use a spread operator ... to get all the items out of it and put them back to the array.

//TODO declare flatten and take in array
function flatten(array) {
  //TODO create const's for resulting array, res, and a copy of the array using slice()
  const res = [];
  const copy = array.slice();

  //TODO start while loop condition copy has length
  while (copy.length) {
    console.log("copy.length: ", copy.length);
    //TODO take out first item of copy using shift and bind it to 'item'
    const item = copy.shift(); // take out one item at a time while copy.length
    console.log(item);
    //if statement, condition Array.isArray(item)
    if (Array.isArray(item)) { // check if a given value is an array or not
      console.log("ARRAY!!!\nitem in isArray: ", item, "so we use 'unshift' to remove brackets:");
      //TODO take out each item using spread operator and unshift
      copy.unshift(...item);
      console.log("copy: ", copy);
      //TODO if just a single item, push into res
    } else {
      res.push(item);
    }
  }

  return res;
}
console.log(flatten([1, 2, [3, 4], [[6, 7], 8], 9]))

// // Solution 2: Iterative Solution with Array.prototype.some
// // A more concise approach, compared to the previous one, is to use Array.prototype.some.

// export default function flatten(array) {
//   while (array.some(Array.isArray)) {
//     array = [].concat(...array);
//   }
//   return array;
// }

// // Solution 3: Recursive approach with Array.prototype.reduce
// // A recursion approach fits well here given the recursive and nesting nature of this question. And it will simplify our code a lot.
// export default function flatten(array) {
//   return array.reduce(
//     (acc, curr) => acc.concat(Array.isArray(curr) ? flatten(curr) : curr),
//     [],
//   );
// }

// // Although a recursive approach always has the risk overflowing the call stack, as of this writing, in chrome, the number of recursive calls you can make is around 10 thousands and in Firefox it is 50 thousands, so this shouldn't be a problem in practice. However, when the cost of recursion becomes a concern, we can use a generator to lazily extract the flattened items from the array. We will see that solution later.

// // Solution 4: Flatten the array in-place
// // All the solutions we have seen so far are returning a new flattened array without mutating the original input array. Again, this is normally what you want.

// // However, the interviewer might ask you to implement an in-place solution that doesn't allocate extra memory. That is, a solution with a constant O(1) space complexity.

// // In this case, you will need to leverage array methods that mutate. There are 9 methods in total that mutate arrays: pop, push, reverse, shift, sort, splice, unshift, copyWithin and fill.

// // Here is one possible solution that uses splice to mutate the input array:

// export default function flatten(array) {
//   for (let i = 0; i < array.length; ) {
//     if (Array.isArray(array[i])) {
//       array.splice(i, 1, ...array[i]);
//     } else {
//       i++;
//     }
//   }
//   return array;
// }

// // Solution 5: Recursive approaching using flatMap
// // The flatMap function method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. By calling it recursively, we can flatten the entire array until it is only one level deep.


// export default function flatten(value) {
//   return Array.isArray(value) ? value.flatMap((item) => flatten(item)) : value;
// }

// // Solution 6: Generator
// // As we have discussed earlier, if the array has a thousands-of-levels nesting, a recursive approach might cause a stack overflow. We can utilize generators to yield array item individually. As generators are lazy in nature, this wouldn't have as big of an upfront cost as our recursive approach does.


// export default function* flatten(array) {
//   for (const item of array) {
//     if (Array.isArray(item)) {
//       yield* flatten(item);
//     } else {
//       yield item;
//     }
//   }
// }


