function findMedianSortedArrays(nums1, nums2) {
  const sortedArray0 = nums1.concat(nums2);
  const sortedArray = sortedArray0.sort((a,b) => a =  - b);
  
  const len = sortedArray.length;
  console.log(len);
  const avg = len / 2;
  console.log(avg);
  
  const answer =  len % 2 === 0 // TERNARY OPERATOR conditional: 'len % 2 === 0'
    ? 
    (sortedArray[avg] + sortedArray[avg - 1]) / 2  // executed if conditional TRUE and set as value of 'answer'
    : 
    sortedArray[Math.floor(avg)]; // executed if conditional FALSE and set as value of 'answer'

  return answer
};

findMedianSortedArrays([1,3,5],[4,7,9]);

// ANOTHER SOLUTION:
function findMedianSortedArrays2(nums1, nums2) {
  const sortedArray0 = nums1.concat(nums2);
  const sortedArray = sortedArray0.sort((a,b) => a - b);
  const len = sortedArray.length;
  const avg = len / 2;
  
      
  return len % 2 === 0 ? (sortedArray[avg] + sortedArray[avg - 1]) / 2 : sortedArray[Math.floor(avg)];
};

