var maxArea = function(height) {
  if (!height.length || height.length === 1) return null;


  let maximumArea = 0;
  let i = 0;
  let j = height.length - 1;

  if (height.length === 2) {
      return Math.min(height[i], height[j]) * (j - i);
  }

  while (i < j) {
      let area = Math.min(height[i], height[j]) * (j - i);
      area > maximumArea ? maximumArea = area : maximumArea;
      height[i] < height[j] ? i++ : j--;
  }
  return maximumArea;

}

let ex = maxArea([1,8,6,2,5,4,8,3,7])
console.log(ex);