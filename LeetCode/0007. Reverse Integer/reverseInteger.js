var reverse = function(x) {
  // first check if negative and make positive, if negative remember to make answer negative
  if (x < 0){
      let newX = -x;
      let revXNew = newX.toString().split("").reverse().join("");
      let negAns = parseInt(-revXNew);
      
      if (Math.pow(-2,31)< negAns && negAns < (Math.pow(2,31) - 1)){
          return negAns;
      } else {
          return 0;
      }
      
      
  } else {
      //INT > STRING > SPLIT STRING > REVERSE > JOIN BACK TOGETHER      
      let negAns = parseInt(x.toString().split("").reverse().join(""));
      
      if (Math.pow(-2,31)< negAns && negAns < (Math.pow(2,31) - 1)){
          return parseInt(negAns);
      } else {
          return 0;
      }
  }
};

let r = reverse(`142f4`);
console.log(r);