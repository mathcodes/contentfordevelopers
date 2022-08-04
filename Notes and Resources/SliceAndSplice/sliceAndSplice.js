// EXAMPLES:

//  index  = [   0       1       2        3      4  ];
//  index  = [  -5      -4      -3       -2     -1  ];
var fruits = ['apple','banana','peach','plum','pear'];
var slice1 = fruits.slice(1, 3);  //banana, peach
var slice2 = fruits.slice(3);  //plum, pear
var slice3 = fruits.slice(-3);  //peach, plum, pear

// EQUIVALENT RESULTS:
var slice4 = fruits.slice(-3, -2); // peach
var slice5 = fruits.slice(2, -2); // peach

// MORE EXAMPLES WITH NEW ARRAY, 'a'
// index[0    1     2     3     4     5     6  ];
// index[-7   -6    -5    -4    -3    -2    -1  ];
var a = ['a', 'b',  'c',  'd',  'e',  'f',  'g'];
var sliced1 = a.slice(0, 3); // ['a', 'b', 'c']
var sliced2 = a.slice(3); // ['d', 'e', 'f', 'g']
var sliced3 = a.slice(-3); // ['e', 'f', 'g']
var sliced4 = a.slice(2, -9); // []
var sliced5 = a.slice(3, -3); // ['d']

console.log(slice1);
console.log(slice2);
console.log(slice3);
console.log(slice4); 
console.log(slice5);
console.log(sliced1);
console.log(sliced2);
console.log(sliced3);
console.log(sliced4);
console.log(sliced5);


