function permutations(string) {
  var array = string.split(''), temp = array.slice(), headArray = [], outArray = [];

  if(string.length == 1) return [string];

  array.forEach(function(v, i, array) {
    if(headArray.indexOf(v) == -1) {
      headArray.push(v);
      temp.splice(temp.indexOf(v), 1);
      permutations(temp.join('')).forEach(function(w) {outArray.push(v + w);});
      temp.push(v);
    }
  });

  return outArray;
}


// function permutations(string){
//   var hash = {};
//   var resarray = [];
//   var subroutArrayine = function(testStr, newString){
//     newString = newString || '';
//     if(newString.length === string.length){
//       hash[newString] = true;
//       return;
//     }

//     for(var i = 0; i < testStr.length; i++){
//       var cur = testStr[i];
//       var str = newString + cur;
//       var excision = testStr.substring(0, i) + testStr.substring(i+1);
//       subroutArrayine(excision, str);
//     }
//   }; 

//   subroutArrayine(string);

//   for(var key in hash){
//     resarray.push(key);
//   }

//   return resarray;
// }