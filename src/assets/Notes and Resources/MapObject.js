const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2

map1.clear();

console.log(map1.size);
// expected output: 0

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1)

const iterator1 = map1.entries();

console.log(iterator1.next().value);
// expected output: [ 'a', 1 ]

console.log(iterator1.next().value);
// expected output: [ 'b', 2 ]

function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

map1.forEach(logMapElements);

// m[a] = 1
// m[b] = 2
// m[c] = 3

console.log(map1.has('1'));
console.log(map1.has('a'));

const iterator2 = map1.keys();

console.log(iterator2.next().value);
// expected output: a

console.log(iterator2.next().value);
// expected output: b

const iterator3 = map1.values();

console.log(iterator3.next().value);
// expected output: 1

console.log(iterator3.next().value);
// expected output: 2

