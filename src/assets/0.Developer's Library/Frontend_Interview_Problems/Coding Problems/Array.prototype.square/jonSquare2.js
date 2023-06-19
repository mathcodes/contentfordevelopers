let example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]


// Declare function
Array.prototype.square = function () {
// Bind length of ‘this’ Array
  length = this.length;
// Create new Array with same length 
  let Arr = new Array(length); 
// Loop through new Arr
  for (let i = 0; i < Arr.length; i++){
// Square each value
    Arr[i] = this[i]*this[i];
// Return Arr with squared values
  }
  return Arr;
}

console.log(example.square())