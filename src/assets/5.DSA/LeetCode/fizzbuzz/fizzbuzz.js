// PREP
// Print `FIZZ` if divisible by 3
// Print `BUZZ` if divisible by 5
// Print `FIZZBUZZ` if divisible by both 3 and 5
//P: num, whole, +
//R: console
//E:

//  -note- PARAMETERS

// // TEST CASE
// const fizzbuzz = (num) {

// }

// fizzbuzz(5) // 1, 2, FIZZ, 4, BUZZ
// fizzbuzz(3) // 1, 2, FIZZ
// fizzbuzz(15) // 1, 2, FIZZ, 4, BUZZ, FIZZ, 7, 8, BUZZ, FIZZ, 11, FIZZ, 13, 14, FIZZ BUZZ

// // PSEUDOCODE
// const fizzbuzz = (num) {
//   // loop
//   // conditional % 3&5, %3, %5
//   // console.log num, FIZZ, BUZZ, or FIZZBUZZ
// }
const fizzbuzz = (num) => {
  for (var i = 1; i < num; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzbuzz(15)
fizzbuzz(150)
