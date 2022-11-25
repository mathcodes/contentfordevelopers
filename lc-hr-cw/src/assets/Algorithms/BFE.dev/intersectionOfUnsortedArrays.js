function getIntersection(arr1, arr2) {
  // your code here;
  let modArr1=arr1.filter((item,index)=> 
    arr1.indexOf(item)===index
  );
  let modArr2=arr2.filter((item,index)=> 
    arr2.indexOf(item)===index
  );
  let result=[];
  modArr1.forEach((ele)=>modArr2.includes(ele) ? result.push(ele) : null)
  return result
}
console.log(getIntersection([-9,2,3,4,15,6,7,8,9,32],[1,32,3,15,6,7,8,-9,10]));