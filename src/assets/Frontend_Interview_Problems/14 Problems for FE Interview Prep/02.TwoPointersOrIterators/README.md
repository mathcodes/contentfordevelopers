# Two Pointers or Iterators

These problems include situations where you want to iterate through the data structure from the left and the right side at the same time until one or both of the pointers result in a condition.

# Most useful when dealing with `Sorted arrays` (or `Linked Lists`) 
• need to find a set of elements that fulfill certain constraints
• set of elements in the array is a pair, a triplet, or even a subarray

# Examples of Two Pointer or Iterator Problems:

<details>
<summary>
<span style="font-size:2rem; color:green;">Squaring a sorted array (easy)</span>
</summary>

<details>
<summary  style="padding-left:1rem;">
<span style="font-size:1.5rem;">SETUP VARIABLES</span>
</summary>

- `result` is new array with same length all 0s
- `LEFT` is 0
- `RIGHT` is last index
- `resultIndex` = last index
```js
var sortedSquares = function (nums) {
  //SETUP VARAIBLES
  const result = new Array(nums.length).fill(0);
  let LEFT = 0;
  let RIGHT = nums.length - 1;
  let resultIndex = nums.length - 1;

  ...
}
```

</details>

<details>
<summary  style="padding-left:1rem;">
<span style="font-size:1.5rem;">WHILE LOOP</span>
</summary>

- condition is `LEFT` <= `RIGHT`
- setup two variables for squared values of `LEFT` and `RIGHT`, `leftVal` and `rightVal` using `Math.pow()`
```js
  while(LEFT >= RIGHT) {
    leftVal = Math.pow(nums[LEFT], 2);
    rightVal = Math.pow(nums[RIGHT], 2);

    ...
  }
```

</details>

<details>
<summary  style="padding-left:1rem;">
<span style="font-size:1.5rem;">IF-ELSE STATEMENT</span>
</summary>

- used to compare values of current `leftVal` and `rightVal`. 
- Add larger of the two to the `result` at `resultIndex`
```js
    if(leftVal < rightVal) {
      result[resultIndex] = rightVal;
      RIGHT --
    } else { 
      result[resultIndex] = leftVal;
      LEFT ++
    }
    ...
```

</details>

<details>
<summary  style="padding-left:1rem;">
<span style="font-size:1.5rem;">RETURN</span>
</summary>

 - Decrement the `resultIndex` and return `result`

```js
      ...
    resultIndex--;
    }
  return result

```


</details>

<details>
<summary  style="padding-left:1rem;">
<span style="font-size:1.5rem;">COMPLETE</span>
</summary>

```js
var sortedSquares = function(nums) {
  // SETUP VARIABLES 
  // result array with same length, all zeros
  const result = new Array(nums.length).fill(0);
  let RIGHT = nums.length - 1;
  let LEFT = 0;
  let resultIndex = nums.length - 1;

  // WHILE LOOP
  // check while left is <= right we have to check which is bigger
  // the set values for leftVal and rightVal = the squared values
  while (LEFT <= RIGHT) {
    let leftVal = Math.pow(nums[LEFT], 2);
    let rightVal = Math.pow(nums[RIGHT], 2);
    // IF ELSE STATEMENT 
    // Then as long as leftVal < rightVal, the resultIndex = rightVal, 
    // otherwise = leftVal
    if (leftVal < rightVal) {
      result[resultIndex] = rightVal;
      RIGHT--;
    } else {
      result[resultIndex] = leftVal;
      LEFT++;
    }
    // decremeent resultIndex and return
    resultIndex--;
  }
  // RETURN 
  return result;
}
```

</details>

</details>

<details>
<summary>
<span style="font-size:2rem; color:green;">Triplets that sum to zero (medium)</span>
</summary>
Two methods: 


<details>
<summary>
<span style="font-size:1.5rem;">BRUTE FORCE</span>
</summary>

Nested for loops that find all triplets and return one that add to 0.

```js
var threeSum = function(nums) {
  result= [];
  nums = nums.sort((a, b) => a - b )

  for (let i = 0; i < nums.length; i++){
    if (i > 0 && nums[i] == nums[i-1]) continue;
    for (let j = i+1; j < nums.length, j++){
      if (j > i + 1 && nums[j] == nums[j-1]) continue;
      for (let k = j + 1; k < nums.length, k++){
        if (k > j + 1 && nums[k] == nums[k-1]) continue;
        if(nums[1] + nums[j] + nums[k] = 0){
          result.push([nums[1], nums[j], nums[k]])
        }
    }
  }
  return result
}
```

</details>

<details>
<summary>
<span style="font-size:1.5rem;">Two Iterators</span>
</summary>

<details>
<summary style="padding-left:1rem;">
<span style="font-size:1.5rem;">SETUP</span>
</summary>

Function and two variables, `result` and sorted `nums`

```js
var threeSum = function(nums) {
  result= [];
  nums = nums.sort((a, b) => a - b);

...
```

</details>

<details>
<summary style="padding-left:1rem;">
<span style="font-size:1.5rem;">FOR LOOP</span>
</summary>
 
- setup loop and start with if statement to eliminate duplicates
- three more variables: `TARGET` to make `sum`=0, `LEFT` at one more than `i`, and `RIGHT` at last index of `nums`

```js
...

  for (let i = 0; i < nums.length; i++){
    if (i > 0 && nums[i] === nums[i-1]) continue;
    const TARGET = 0 - nums[i];
    let LEFT = i + 1;
    let RIGHT = nums.length - 1;

...
```

</details>

<details>
<summary style="padding-left:1rem;">
<span style="font-size:1.5rem;">WHILE LOOP</span>
</summary>

   - one more variable, `sum` of two indices LEFT and RIGHT
   - WHILE LOOP with if if-else and else statements for three scenarios
   - decr / incr bounds OR if equal
     - push to result, check for duplicates on both sides, incr/decr 

```js
...
    while(RIGHT > LEFT) {
      const sum = nums[LEFT] + nums[RIGHT]
      if(sum > target) {
        //eliminate last element and decr RIGHT
        RIGHT--;
      } else if (sum < target){
        // eliminate first element and inc LEFT 
        LEFT++;
      } else {
        // push the results and use while loops to skip duplicates
        result.push([nums[i], nums[LEFT], nums[RIGHT]]);
        while(nums[LEFT] === nums[LEFT + 1]) LEFT++;
        while(nums[RIGHT] === nums[RIGHT + 1]) RIGHT--;
        LEFT++;
        RIGHT--;
      }
    }
...
```


</details>

<details>
<summary style="padding-left:1rem;">
<span style="font-size:1.5rem;">RETURN</span>
</summary>

```js
...

  return result
}
```

</details>

<details>
<summary style="padding-left:1rem;">
<span style="font-size:1.5rem;">COMPLETE</span>
</summary>

```js
var threeSum = function(nums) {
  result= [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++){
    if (i > 0 && nums[i] === nums[i-1]) continue;
    const TARGET = 0 - nums[i];
    let LEFT = i + 1;
    let RIGHT = nums.length - 1;
    // So sum = nums[LEFT] + nums[RIGHT]
    // Case 1: sum > TARGET
    // Case 2: sum < TARGET
    // Case 3: sum = TARGET = solution!

    // Iterate through and eliminate when not equal
    // start with while loop condition when R > L, otherwise we have less than 2 elements
    while(RIGHT > LEFT) {
      const sum = nums[LEFT] + nums[RIGHT]
      if(sum > target) {
        //eliminate last element and decr RIGHT
        RIGHT--;
      } else if (sum < target){
        // eliminate first element and inc LEFT 
        LEFT++;
      } else {
        // push the results and use while loops to skip duplicates
        result.push([nums[i], nums[LEFT], nums[RIGHT]]);
        while(nums[LEFT] === nums[LEFT + 1]) LEFT++;
        while(nums[RIGHT] === nums[RIGHT + 1]) RIGHT--;
        LEFT++;
        RIGHT--;
      }
    }
  return result
}

```


</details>

</details>

</details>





<details>
<summary>
<span style="font-size:2rem; color:green;">Comparing strings that contain backspaces (medium)</span>
</summary>


</details>