
// Solution
// Initialize a new array to store the mapped results. 
// As we loop through the array (via this), 
  // call the callback on each array element with the following parameters: 
      // (element, index, array, this) 
// This can be done by either using Array.prototype.call or Array.prototype.apply.

/**
 * @callback callbackFn
 * @param {object} [thisArg]
 * @return {Array}
 */


Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  console.log(len);
  const array = new Array(len);

  for (let k = 0; k < len; k++) {
    if (Object.hasOwn(this, k)) {
      console.log(Object)
      array[k] = callbackFn.call(thisArg, this[k], k, this);
    }
  }

  return array;
};

console.log(Array())
console.log(Array((a)=>a^2, 3))
// Edge Cases
// Passing the index and array to the map callback.
// Calling the map callback with the correct this if thisArg is specified.
// Sparse arrays (e.g. [1, 2, , 4]). The empty values should be ignored while traversing the array.
// Notes
// Mutating the array in the map callback is a bad idea and can cause unintended consequences. The provided solution does not follow the TC39 specification for array mutation scenarios, neither does the autograder check for the specification behavior for mutations.

// You probably won't be asked to implement the specification behavior during interviews but it is still a positive signal to mention that mutation of the array within the callback is possible but your code might not follow the specifications for it.

// The thisArg doesn't do anything if the callback is defined as an arrow function as arrow functions don't have their own bindings to this.

// One-liner Solution
// You can cheat the autograder by doing this.

Array.prototype.myMap = Array.prototype.map;
// Spec Solution
// Here's a solution that is based off the Array.prototype.map ECMAScript specification.

Array.prototype.myMap = function (callbackFn, thisArg) {
  if (
    typeof callbackFn !== 'function' ||
    !callbackFn.call ||
    !callbackFn.apply
  ) {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  const len = this.length;
  const array = new Array(len);
  let k = 0;

  while (k < len) {
    // Ignore index if value is not defined for index (e.g. in sparse arrays).
    const kPresent = Object.hasOwn(this, k);
    if (kPresent) {
      array[k] = callbackFn.call(thisArg, this[k], k, this);
    }
    k++;
  }

  return array;
};
// Resources
// Array.prototype.map | MDN
// Array.prototype.map ECMAScript specification
