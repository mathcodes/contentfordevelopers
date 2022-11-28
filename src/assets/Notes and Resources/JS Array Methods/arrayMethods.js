// # JavaScript Array Methods

// ## .at()
// Returns value of the specified index in the array.
const JavaScriptPrimitiveTypes =  ['string', 'number', 'bigint', 'boolean', 'undefined', 'symbol', 'null'];
//                                [   0    ,     1    ,    2    ,    3    ,     4    ,       5   ,    6  ]
let jspt = JavaScriptPrimitiveTypes;
console.log(jspt.at(3)); // 'boolean'

// ## .slice()
// Returns a new array containing the elements of the given array starting at the given index

// const JavaScriptPrimitiveTypes =  ['string', 'number', 'bigint', 'boolean', 'undefined', 'symbol', 'null'];
//                                [   0    ,     1    ,    2    ,    3    ,     4    ,       5   ,    6  ]

console.log(jspt.slice(4)); // [ 'undefined', 'symbol', 'null' ]

console.log(jspt.slice(2)); // [ 'bigint', 'boolean', 'undefined', 'symbol', 'null' ]

console.log(jspt.slice(2, 4)); // [ 'bigint', 'boolean' ]

console.log(jspt.slice(1, 5)); // [ 'number', 'bigint', 'boolean', 'undefined' ]

console.log(jspt.slice(-2)); // [ 'symbol', 'null' ]

console.log(jspt.slice(2, -1)); // [ 'bigint', 'boolean', 'undefined', 'symbol' ]

console.log(jspt.slice()); // ['string', 'number', 'bigint', 'boolean', 'undefined', 'symbol', 'null'];