/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let max = -Infinity, count
  let prev, next
  let start, end
  for(let i = 0; i < s.length; i++){
      
      //for odd combinations
      prev = i - 1
      next = i + 1
      count = 1
      while(prev >= 0 && next < s.length){
          if(s[prev] === s[next]){
              prev--
              next++
              count +=2
          }else{
              break
          }
      }
      if(count > max){
          max = count
          start = prev + 1
          end = next - 1
      }
      
      //for even combinations
      prev = i
      next = i + 1
      count = 0
      while(prev >= 0 && next < s.length){
          if(s[prev] === s[next]){
              prev--
              next++
              count +=2
          }else{
              break
          }
      }
      if(count > max){
          max = count
          start = prev + 1
          end = next - 1
      }
  }
  
  let result = ''
  for(let i = start; i <= end; i++){
      result += s[i]
  }
  return result
};