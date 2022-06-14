var myAtoi = function(s) {
  let n  = parseInt(s); 
  
  if(!n)
    return 0;

  if(n < Math.pow(-2,31)) 
    return Math.pow(-2,31);

  if(n > Math.pow(2,31) - 1) 
    return Math.pow(2,31) - 1;

  return n
};