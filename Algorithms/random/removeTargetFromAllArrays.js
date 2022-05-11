const array1 = ["jon", 5, "christie"];
const array2 = [5, "dot"];
const array3 = [5, "net", '👍'];
 
let megaArray = [array1, array2, array3];

megaArray.map(function(array) {
const index = array.indexOf(5);
  if (index > -1) {  
    array.splice(index, 1); 
  }
});
 
console.log(megaArray); 