// For Loop
// A for loop is a control flow statement for specifying iteration that allows code to be executed repeatedly.
let Array = ['1', '4', '6', '9', '10', '34', '45']
let newArray = [];
for (let i = 0; i < Array.length; i++) {  
  console.log(Array)
  newArray.push(Array[i]*2)
  console.log(newArray)
}

// While Loop
// A while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement.

let e = 0;
let Arr = ['0','1','2','3', '4', '5', '6', '7'] ;

while (e < Arr.length) {
  console.log("only", 7-e," years until you are 7!!!!" )
  e++
  
} 
  


// ForEach Loop
// The forEach loop is used to iterate over the elements of the collection. The collection may be an array or a list.
const Arr2 = ['0','1','2','3', '4', '5', '6', '7'] ;
Arr2.forEach((i) => {
  console.log(i);
})
// Every()
// The every() method executes a function for each array element. The every() method returns true if the function returns true for all elements.
let Arr3 = ['0','1','2','3', '4', '5', '6', '7'] ;
const evenNumber=(n)=>n%2==0

if(Arr3.every(evenNumber)){
  console.log("iterated through all, all are even!")
}
else {
  console.log('I think we have an odd number.')
}
// Some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function

// Filter()
// The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.

// Map()
// Map is a collection of key/value pairs. Map keys and values can be of any type (arrays, objects, numbers, and other primitive data types). Map iterates its elements in insertion order. Before the introduction of map, you would have to use an object.

// Reduce()
// The reduce() method executes a reducer function for array element. The reduce() method returns a single value: the function’s accumulated result. The reduce() method does not execute the function for empty array elements.

