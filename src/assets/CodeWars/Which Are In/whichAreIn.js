function inArray(array1,array2){
  let arr=[];
  array1.forEach(function (a1) {
      array2.some(function (a2) {
          if (a2.search(a1) > -1){
              if (!arr.includes(a1)){
                  arr.push(a1);
                  return true
              }
          }
      })
  });
   return arr.sort()
}
