function compareTriplets(a, b) {
  // Write your code here
  // setup variables for keeping score
  let p1 = 0;
  let p2 = 0;
  // compare if(a[1] < b[1] ){} and add to winner
  // iterate 3 times and return two scores
  for (let i=0; i<a.length; i++) {
      if (a[i]>b[i]){
          p1 += 1;
          console.log(p1)
      } else {
          p2 += 1;
          console.log(p2)
      }
       console.log([p1, p2])
  }
return ([p1, p2])
}
compareTriplets([1,2,3],[4,0,0])