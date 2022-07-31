function getSum(a,b){
  // setup variable starting at zero to hold the count
  let count = 0;
  
  // If the two numbers are equal return a or b.
  if (a == b) return b;
  
  // Check to see which is smaller, then iterate from that by adding each the total until you reach the higher number 
  if(a < b){
    for (; a <= b; a++){
      count += a;
    }
  } else if (a > b){
      for(; b <= a; b++){
        count += b;
      }
  }
  
  return count;
}

console.log(getSum(4,78));