# JavaScript Array Methods

## .at()
Returns value of the specified index in the array.
```js
const JavaScriptPrimitiveTypes =  ['string', 'number', 'bigint', 'boolean', 'undefined', 'symbol', 'null'];
//                                [   0    ,     1    ,    2    ,    3    ,     4    ,       5   ,    6  ]
console.log(JavaScriptPrimitiveTypes.at(3); // 'boolean'
```

## .concat()
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

```
## .copyWithin()
The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
```js
## const array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
```

## .entries()
The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
```js
const array = ["a", "b", "c"];
const arrayEntries = array.entries();
console.log(arrayEntries)

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]

```
## .every()
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```
## .fill()
The fill() method changes all elements in an array to a static `value`, from a `start` index (default 0) to an `end` index (default array.length). It returns the modified array.

<div style="text-align:center"><h3>.fill(<span style="color:#c7ad75">value</span>, <span style="color:#c7ad75">start</span>, <span style="color:#c7ad75">end</span>)</h3></div>

```js
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
```

## .filter()
The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

## .find()
The find() method returns the `first` element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

## findIndex()
The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

```

## .findLast()
The findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.

```js
const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// expected output: 130
```

## .findLastIndex()
The findLastIndex() method iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

```js
const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// expected output: 3  (of element with value: 130)
```

## .flat()
The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

```js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

## .flatMap()
The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

```js
const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap(num => 2*num);
console.log(flattened);
// expected output: Array [2, 4, 6, NaN, 12, 0]

const flattened2 = arr1.flatMap(num => num);
console.log(flattened2);
// expected output: Array [1, 2, 3, 4, 5, 6]
```

## .forEach()
The forEach() method executes a provided function once for each array element.

```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

## .from()
The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

## .includes()
The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

```

## .indexOf()
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
indexOf(searchElement, fromIndex)
```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

```

## .isArray()
The Array.isArray() static method determines whether the passed value is an Array.

## .join()
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), `separated by commas or a specified separator string`. If the array has only one item, then that item will be returned without using the separator.

```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

## .keys()
The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2
```

## .lastIndexOf()
The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

```js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
```

## .map()
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```



## .slice()
Returns a new array containing the elements of the given array starting at the given index

```js
const JavaScriptPrimitiveTypes =  ['string', 'number', 'bigint', 'boolean', 'undefined', 'symbol', 'null'];
//                                [   0    ,     1    ,    2    ,    3    ,     4    ,       5   ,    6  ]

console.log(JavaScriptPrimitiveTypes.slice(4)); // [ 'undefined', 'symbol', 'null' ]

console.log(JavaScriptPrimitiveTypes.slice(2)); // [ 'bigint', 'boolean', 'undefined', 'symbol', 'null' ]

console.log(JavaScriptPrimitiveTypes.slice(2, 4)); // [ 'bigint', 'boolean' ]

console.log(JavaScriptPrimitiveTypes.slice(1, 5)); // [ 'number', 'bigint', 'boolean', 'undefined' ]

console.log(JavaScriptPrimitiveTypes.slice(-2)); // [ 'symbol', 'null' ]

console.log(JavaScriptPrimitiveTypes.slice(2, -1)); // [ 'bigint', 'boolean', 'undefined', 'symbol' ]

console.log(JavaScriptPrimitiveTypes.slice()); // ['string', 'number', 'bigint', 'boolean', 'undefined', 'symbol', 'null'];
```

 