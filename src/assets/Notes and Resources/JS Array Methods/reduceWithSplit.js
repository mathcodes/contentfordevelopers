const s = 'onetwothreefour';
const a = [1, 2, 3, 4];
const initialValue = '<initVal>';

const sSplit = s.split('f');

const aReduce = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

const sSplitReduce = sSplit.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

const aReduceSplit = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
).split('');

console.log("s:              ", s);           // onetwothreefour
console.log("a:              ", a);           // [ 1, 2, 3, 4 ]
console.log("s.split:        ", sSplit);      // [ 'onetwothree', 'our' ]
console.log("a.reduce:       ", aReduce);     // <initVal>1234
console.log("s.split.reduce: ", sSplitReduce) // <initVal>onetwothreeour
console.log("a.reduce.split: ", aReduceSplit) 
// [  '<', 'i', 'n', 'i', 't', 'V', 'a', 'l',  '>', '1', '2', '3',  '4' ]