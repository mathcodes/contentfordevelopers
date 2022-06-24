var threeSum = function(nums) {
  nums.sort((a,b)=>a-b)
  const map = new Map()
  for(let i=0;i<nums.length;i++){
    let opp = nums[i] * -1 // opposite
    let l = i+1
    let r = nums.length-1
    while(l<r){      
      if(nums[l] + nums[r] === opp){
       const arr = [nums[i], nums[l], nums[r]] 
       map.set(`${nums[i]}-${nums[l]}-${nums[r]}`, arr)
       r--
      }else if(nums[l] + nums[r] < opp){
       l++
      }else{
       r--
      }
    }    
  }
  const res = []
  for(const [k,v] of map){
    res.push(v)
  }
  return res
};

console.log(threeSum([-1,0,1,2,-1,-4]));