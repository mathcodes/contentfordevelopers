/**
 * @param {number} num 
 * @return {string} 
 */

var intToRoman = function (num) {
  var dict = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var result = "";
  console.log("dict = " + dict)
  console.log("val = " + val)
  for (var i = 0; i < val.length; i++) {
    console.log("\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-")
    console.log("ROUND " + (i + 1) + "!!!")
    console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-")
    console.log("UPDATE in 'i' for loop:\ni = " + i + "\nj = " + j + "\nnum = " + num + "\nv = " + v + "\nUPDATE COMPLETE\n")
    console.log("Set v = the value at the current index(i), " + i + "\nCODE:var v = val[i];")
    var v = val[i];
    console.log("v = " + val[i])
    console.log("Only when num >= v will we start converting to Roman Numeral, one place value at a time using the next J FOR LOOP")
    if (num >= v) {
      console.log("Since our current num >= v...")
      var count = parseInt(num / v);
      console.log("if(num >= v), count =" + parseInt(num / v))
      num %= v;

      for (var j = 0; j < count; j++) {
        console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-")
        console.log("UPDATE in J FOR LOOP:\ni = " + i + "\nj = " + j + "\ncount = " + count + "\nv = " + v)
        console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-")
        console.log("Iterate through J FOR LOOP")
        console.log("j=" + j + "\nNow we add the corresponding Roman Numeral to our existing string (defined as result)")
        result = result + dict[i];
        console.log("CODE: result = result + dict[i];\n(where i = " + i + ") = " + result + "\n")
      }
    }
  }

  return result;
};

let ans1 = intToRoman(153)
console.log(ans1)