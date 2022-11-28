var merge = function(nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;
  nums1.push.apply( nums1, nums2 );

  return nums1.sort( ( a , b ) => a - b );
};

let example = merge([0,1,4], 5, [5, 0, 3, 9], 4);

console.log(example);

var merge = function(nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;
  
  nums1.push.apply( nums1, nums2 );
  
  return nums1.sort( ( a , b ) => a - b );
};

// Space complexity: O(n)
// Time complexity: O(n log n)