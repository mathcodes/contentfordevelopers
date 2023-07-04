# File: ./Coding Problems/ToDoList/README.md


//TODO declare anonymous function

  //TODO bind elements using (QS) to input, #submit, and ul

  //TODO create function addTask that takes in a label

    //TODO Create the DOM elements for the new task, li and span, using createElement(CE)

    //TODO Using appendChild(AC), place span element in the li element

    //TODO Using Node.textContent here instead of Element.innerHTML
    //TODO to prevent XSS (Cross Site Scripting), place the label in the li element

    //TODO create DELETE button
    //TODO use (CE) to create element, button
    //TODO Give it text using (TC)
    //TODO Using (AC), place button into the li element

    //TODO Add the new task (li element) to the list (ul element) using .append()

  //TODO Create new function to delete tasks that will be called using upcoming (EL), pass in an element
    //TODO Remove the task from the list by using removeChild(passed in element) on parentNode on the passed in element

  //TODO add click (EL) to the button element created above
    //TODO call addTask and pass in the value of the input element created above

    //TODO Reset the input so that new tasks can be added.


  //TODO add click(EL) to the list whose cb function takes in the event

    //TODO check 'if' tagName, the target, is === to 'BUTTON', if so, call deleteTask, passing in the target.parentNode
   


# File: ./14PatternsForDSA/README.md

# 14 Problems & Patterns for Frontend Interview Preparation

## 1. Sliding Window
- Maximum sum subarray of size ‘K’ (easy)
- Longest substring with ‘K’ distinct characters (medium)
- String anagrams (hard)

## 2. Two Pointers or Iterators
- Squaring a sorted array (easy)
- Triplets that sum to zero (medium)
- Comparing strings that contain backspaces (medium)

## 3. Fast and Slow Pointers
- Linked List Cycle (#141)
- Palindrome Linked List (#243-medium)
- Cycle in a Circular Array (hard)

## 4. Merge Intervals
- Intervals Intersection ([#986](https://leetcode.com/problems/interval-list-intersections/)-medium)
- Maximum CPU Load (hard)

## 5. Cyclic Sort
- Find the Missing Number (easy)
- Find the Smallest Missing Positive Number (medium)

## 6. In-Place Reversal of Linked List
- Reverse a Sub-list (medium)
- Reverse every K-element Sub-list (medium)

## 7. TreeBFS
- Binary Tree Level Order Traversal (easy)
- Zigzag Traversal (medium)

## 8. TreeDFS
- Sum of Path Numbers (medium)
- All Paths for a Sum (medium)

## 9. Two Heaps
- Find the Median of a Number Stream (medium)

## 10. Subsets
- Subsets With Duplicates (easy)
- String Permutations by changing case (medium)

## 11. Modified Binary Search
- Order-agnostic Binary Search (easy)
- Search in a Sorted Infinite Array (medium)

## 12.Top K Elements
- Top ‘K’ Numbers (easy)
- Top ‘K’ Frequent Numbers (medium)

## 13. K-way Merge
- Merge K Sorted Lists (medium)
- K Pairs with Largest Sums (Hard)

## 14. Topological Sort
- Task scheduling (medium)
- Minimum height of a tree (hard)

# File: ./14PatternsForDSA/04_MergeIntervals/README.md

# Merge Intervals

• Efficient technique to deal with overlapping intervals
• frequently, you either need to find overlapping intervals or merge intervals if they overlap.

The pattern works like this: Given two intervals (‘a’ and ‘b’), there will be six different ways the two intervals can relate to each other:

<img src="./04.MergeIntervals.png" width="80%"/>

Understanding and recognizing these six cases will help you help you solve a wide range of problems from `inserting intervals` to `optimizing interval merges`.

### ID the Merge Intervals technique
• produce a list with only mutually exclusive intervals
• If you hear the term “overlapping intervals”.


### Examples of Merge interval problem patterns

<details>
<summary>
<span style="font-size:2rem; color:green;">Intervals Intersection (medium)</span>
</summary>

```js
var intervalIntersection = function(A, B) {

const getIntersection = (a, b) => {
  if(a[1] < b[0] || b[1] < a[0]) return null
  return [Math.max(a[0], b[0]), Math.min(a[1], b[1])]
}

  const result = [];

// get intersection and shift heads (smaller)
  let i =0;
  let j = 0;
  while(i < A.length && j < B.length) {
    const a = A[i];
    const b = B[j];

    const intersection = getIntersection(a,b)

    if(intersection) {
      result.push(intersection)
    }

    // shift the interval with smaller right border
    if(A[i][1] <= B[j][1]){
      i++
    } else {
      j++
    }
  }
  return result
}

// Test cases:
getIntersection([[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]])
getIntersection([[1,3],[5,6],[7,9]], [[2,3],[5,7]])

// ANOTHER SLIGHTLY DIFFERENT SOLUTION:

var intervalIntersection = function(A, B) {

const getIntersection = (a, b) => {
  if(a[1] < b[0] || b[1] < a[0]) return null
  return [Math.max(a[0], b[0]), Math.min(a[1], b[1])]
}

  const result = [];

// get intersection and shift heads (smaller)
  while(A.length > 0 && B.length > 0) {
    const a = A[0];
    const b = B[0];

    const intersection = getIntersection(a,b)

    if(intersection) {
      result.push(intersection)
    }

    // shift the interval with smaller right border
    if(A[0][1] <= B[0][1]){
      A.shift()
    } else {
      B.shift()
    }
  }
  return result
}
```


This diagram
 • The dashes show the intervals themselves.
 • The equal signs show ranges of each intersection of the intervals.
 • The spaces show the intervals that are not part of the intersection.

```
Input:
Array A: [[1,3],[5,6],[7,9]]
Array B: [[2,3],[5,7]]

Number Line Diagram:

          0   1   2   3   4   5   6   7   8   9   10  11
          +---+---+---+---+---+---+---+---+---+---+---+
Array A:  |-----------|       |---|   |-------|       |
          +---+---+---+---+---+---+---+---+---+---+---+
Array B:  |       |---|       |-------|               |
          +---+---+---+---+---+---+---+---+---+---+---+

Step 1:
Intersection: [2, 3]
```

</details>


<details>
<summary>
<span style="font-size:2rem; color:green;">Maximum CPU Load (hard)</span>
</summary>

```javascript
class Job {
  constructor(start, end, load) {
    this.start = start;  // Start time of the job
    this.end = end;   // End time of the job
    this.load = load;   // Load of the job
  }
}

const jobs = [
  new Job(1, 4, 3),  // Create a new job with start time 1, end time 4, and load 3
  new Job(2, 5, 4),  // Create a new job with start time 2, end time 5, and load 4
  new Job(7, 9, 6)   // Create a new job with start time 7, end time 9, and load 6
];

function findMaxCPULoad(jobs) {
  jobs.sort((a, b) => a.start - b.start);  // Sort the jobs by start time, this is the key to solve this problem as it makes jobs in order from first to last start time

  let maxCPULoad = 0; // this is calculated by adding the load of the current job to currentCPULoad of the previous job. If the currentCPULoad is less than the start time of the current job, then we start from the current job, otherwise, we can reuse the previous job’s currentCPULoad. For example, using the jobs above, our algorithm will process them in the following order:
    // 1. Add the first job to the heap, as it has the earliest start time. currentCPULoad will be equal to 3 at the end of this iteration because the first job will be processed at time ‘1’ and its load is 3.
    // 2. Next, we will remove the job at the top of the min-heap (job 1) as its end time has expired. Since the next job’s (job 2) start time is before the end time of job 1, this means these two jobs overlap. This also means that the currentCPULoad will remain the same as we do not have to remove any previous jobs from memory.
    // 3. Next, we will add job 2 to the heap. Job 2 starts at time ‘2’ but its end time is ‘5’, so it is not going to expire soon.
    // 4. Job 3 has a start time of ‘7’ which is after the end time of job 2. So, at the end of this iteration, the currentCPULoad will be 7 (3 + 4).
    // 5. Finally, we will process job 3 and at the end our currentCPULoad will be 1 (7 - 6), this is because job 3 ends at time ‘9’ which will reduce the load on the CPU by 6. Since, at the end of the iteration, the currentCPULoad is less than the previous maximum load, we will update the maximum load to be equal to the current load.
    // 6. After processing all the jobs, the maximum CPU load will be 7.
  let currentCPULoad = 0;

  const minHeap = new MinHeap((a, b) => a.end - b.end);  // Create a min-heap to track the end times of the jobs

  for (let i = 0; i < jobs.length; i++) {   // Iterate through the jobs
    while (minHeap.length() > 0 && jobs[i].start >= minHeap.peek().end) {
      currentCPULoad -= minHeap.poll().load;  // Remove the jobs that have ended from the min-heap
    }

    minHeap.add(jobs[i]);  // Add the current job to the min-heap
    currentCPULoad += jobs[i].load;  // Update the current CPU load

    maxCPULoad = Math.max(maxCPULoad, currentCPULoad);  // Update the maximum CPU load
  }

  return maxCPULoad;
}

// Helper class for the Min Heap
class MinHeap {
  constructor(compare) {
    this.compare = compare; // The comparison function to compare elements in the heap
    this.heap = []; // The array to store the elements of the heap
  }

  length() {
    return this.heap.length;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  add(element) {
    this.heap.push(element); // Add the element to the end of the heap array
    this.bubbleUp(this.heap.length - 1); // Perform bubble up operation to maintain the heap property
  }

  poll() {
    if (this.heap.length === 0) {
      return null; // If the heap is empty, return null
    }
    if (this.heap.length === 1) {
      return this.heap.pop(); // If there is only one element in the heap, remove and return it
    }
    const top = this.heap[0]; // Store the root of the heap (minimum element)
    this.heap[0] = this.heap.pop(); // Replace the root with the last element in the heap
    this.bubbleDown(0); // Perform bubble down operation to maintain the heap property
    return top; // Return the original root element (minimum element) of the heap
  }

  bubbleUp(index) {
    let parentIdx = Math.floor((index - 1) / 2); // Calculate the index of the parent node

    while (index > 0 && this.compare(this.heap[index], this.heap[parentIdx]) < 0) {
      // Swap the element with its parent if it is smaller (based on the compare function)
      this.swap(index, parentIdx);
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  bubbleDown(index) {
    let leftChildIdx = index * 2 + 1; // Calculate the index of the left child node
    let rightChildIdx = index * 2 + 2; // Calculate the index of the right child node
    let smallest = index; // Assume the current index has the smallest element

    if (leftChildIdx < this.heap.length && this.compare(this.heap[leftChildIdx], this.heap[smallest]) < 0) {
      smallest = leftChildIdx; // Update the index if the left child is smaller (based on the compare function)
    }

    if (rightChildIdx < this.heap.length && this.compare(this.heap[rightChildIdx], this.heap[smallest]) < 0) {
      smallest = rightChildIdx; // Update the index if the right child is smaller (based on the compare function)
    }

    if (smallest !== index) {
      // Swap the element with the smallest child if it is larger (based on the compare function)
      this.swap(index, smallest);
      this.bubbleDown(smallest); // Recursively perform bubble down operation until the heap property is restored
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; // Swap two elements in the heap array
  }
}


const maxCPULoad = findMaxCPULoad(jobs);  // Find the maximum CPU load

console.log(`Maximum CPU load at any time: ${maxCPULoad}`);  // Maximum CPU load at any time: 7


// Test cases
const jobs1 = [
  new Job(1, 4, 3),
  new Job(2, 5, 4),
  new Job(7, 9, 6)
];
const maxCPULoad1 = findMaxCPULoad(jobs1);
console.log(`Maximum CPU load at any time: ${maxCPULoad1}`); // Maximum CPU load at any time: 7

const jobs2 = [
  new Job(6, 7, 10),
  new Job(2, 4, 11),
  new Job(8, 12, 15)
];

const maxCPULoad2 = findMaxCPULoad(jobs2);
console.log(`Maximum CPU load at any time: ${maxCPULoad2}`); // Maximum CPU load at any time: 15




```
</details>


# File: ./14PatternsForDSA/08_TreeDFS/README.md



# File: ./14PatternsForDSA/12_TopKElements/README.md



# File: ./14PatternsForDSA/07_TreeBFS/README.md



# File: ./14PatternsForDSA/13_KWayMerge/README.md



# File: ./14PatternsForDSA/05_CyclicSort/README.md

# Cyclic Sort Pattern

• Problems involving arrays containing numbers in a given range.
• We iterate over the array one number at a time, and if the current number you are iterating is not at the correct index, you swap it with the number at its correct index. You could try placing the number in its correct index, but this will produce a complexity of O(n^2) which is not optimal, hence the Cyclic Sort pattern.


### ID the Cyclic Sort

• `Sorted array` with numbers in a `given range`
• Find the `missing`/`duplicate`/`smallest` number in an `sorted`/`rotated` `array`


### Examples of cyclic sort pattern:

<details>
<summary>
<span style="font-size:2rem; color:green;">Find the Missing Number (easy)</span>
</summary>

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

```js
// 1. Sort the numbers using cyclic sort
// 2. Find the number that is NOT in the right place. This number's index will be the number we are missing

function findMissingNum (arr) {

  let i = 0;
  while(i < arr.length){
    // swap the elements
    const currEl = arr[i];
    // 'currEl != i' so we dont increment i if we are in the right place
    // currEl < arr.length because than it is out of the range (arr.length)
    if(currEl != i && currEl < arr.length){
      // ONCE THESE^ ARE TRUE WE SWAP
      // newSpotVal is what is in the currEl so we set it to arr[currEl]
      const newSpotVal = arr[currEl] 
      // NOW SWAP so arr[currEl] is now arr[i], which is defined as currEl
      arr[currEl]=currEl;
      // now where we are (arr[i]) is now what was in the currEl (newSpotVal
      arr[i] = newSpotVal
    }else {
      // increment case when currEl is NOT EQUAL to i and within the range
      i++
    }
  }

  // THE CODE ABOVE WOULD RETURN THE ARRAYS SORTED with the nth number in the missing number's spot: [4,0,3,1] > [0,1,4,3]
  // NOW WE JUST NEED TO FIND THE MISSING NUMBER
  // create for loop with j
  for (let j = 0; j < arr.length; j++){
    // as soon so the number in the array is NOT EQUAL to the index, we return the index
    if(arr[j] !== j) {
      return j
    }
  }
  // this is for the one case where missing number is the length of the array
  return arr.length
}

// Test Cases
console.log(findMissingNum([4,0,3,1])) // 2
console.log(findMissingNum([9,6,4,2,3,5,7,0,1])) // 8
console.log(findMissingNum([4,0, 2, 5,3,1])) // 6
```


</details>

<details>
<summary>
<span style="font-size:2rem; color:green;"> Find the Smallest Missing Positive Number (medium) </span>
</summary>

Given an unsorted array containing both positive and negative numbers, find the smallest missing positive number in it. You should do this in-place with a max time complexity of O(n).

- if a number is positive, put it in it's right place
- loop through array, the index of first number in wrong place is out missing number
 
```js

// input: [3, 0, -1, 1, 2]
var firstMissingPositive = function(nums) {
  let i = 0,
  arrLength = nums.length;

  while(i < arrLength){
    const newSpotVal = nums[i],
    swapWithIndex = newSpotVal - 1

    // we only want to SWAP if these three conditions are met:
    // newSpotVal > 0
    //    our current value is positive
    // newSpotVal <= arrLength
    //    our current value is within the bounds of the array
    // newSpotVal !== nums[swapWithIndex]
    //    our current value does not equal the value of its destination
    if(newSpotVal > 0 && newSpotVal <= arrLength && newSpotVal !== nums[swapWithIndex]){
      const swapWith = nums[swapWithIndex]
      nums[swapWithIndex] = newSpotVal
      nums[i] = swapWith
    } else {
      i++
    }
  }
  console.log(nums)
  for (let j = 0; j < nums.length; j++){
    if(nums[j] !== j+1) {
      return j + 1
    }
  }
  return arrLength + 1
}

console.log(firstMissingPositive([0,2,4,-3,99,5,1]))
```

```

</details>

# File: ./14PatternsForDSA/03_FastAndSlowPointers/README.md


## Fast and Slow Pointers

The Fast and Slow Pointers approach, also known as the Hare and Tortoise algorithm, involves using two pointers that move through an array, sequence, or linked list at different speeds. This pattern is especially useful when dealing with cyclic linked lists or arrays.

By moving at different speeds, the Fast and Slow pointers approach proves that the two pointers are bound to meet at some point. For example, in a cyclic linked list, the Fast pointer will eventually catch up to the Slow pointer if there is a cycle present.

This approach can be used to determine if a linked list is a palindrome or to find the position of a certain element within the list. It can also be employed as an alternative to the two-pointer method when dealing with a singly linked list where backward movement is not possible.

### Identifying the Fast and Slow Pointers Problem
Low battery
The Fast and Slow Pointers pattern is often applicable when dealing with problems that involve a loop in a linked list or array. It can also be used when you need to determine the overall length or count the occurrence of certain elements in the linked list.

Here are some common problems that can be solved using the Fast and Slow Pointers approach:

<details>
<summary><strong>Linked List Cycle</strong></summary>


Given a linked list, determine if it has a cycle in it.

```javascript
/**
 * Linked List Cycle
 * @param {ListNode} head - The head of the linked list
 * @returns {boolean} - True if cycle exists, False otherwise
 */
const hasCycle = function(head) {
  // Edge case: if the list is empty or contains only one node
  if (!head || !head.next) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    // End of list reached, no cycle exists
    if (!fast || !fast.next) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};

// ListNode Definition: class ListNode { constructor(val) { this.val = val; this.next = null; } }

// Test cases
const list1 = new ListNode(3);
list1.next = new ListNode(2);
list1.next.next = new ListNode(0);
list1.next.next.next = new ListNode(-4);
list1.next.next.next.next = list1.next;
console.log(hasCycle(list1));  // Output: true

const list2 = new ListNode(1);
list2.next = new ListNode(2);
list2.next.next = list2;
console.log(hasCycle(list2));  // Output: true

const list3 = new ListNode(1);
console.log(hasCycle(list3));  // Output: false
```
Consider the diagram for further understanding:
```
     +-+   +-+   +-+   +----+
head |3|-> |2|-> |0|-> |4*|-+
     +-+   +-+   +-+   +----+
                         ↑
                        Cycle
```
```
</details>
<details>
<summary><strong>Palindrome Linked List</strong></summary>

Given a singly linked list, determine if it is a palindrome.

```javascript
/**
 * Palindrome Linked List
 * @param {ListNode} head - The head of the linked list
 * @returns {boolean} - True if the linked list is a palindrome, False otherwise
 */
const isPalindrome = function(head) {
  // Function to reverse a singly linked list
  const reverseList = function(node) {
    let prev = null;
    let curr = node;

    while (curr) {
      const next = curr.next;   // Store the next node
      curr.next = prev;   // Reverse the pointer to the previous node
      prev = curr;   // Move the previous pointer to the current node
      curr = next;   // Move the current pointer to the next node
    }

    return prev;   // Return the new head of the reversed linked list
  };

  let slow = head;   // Initialize the slow pointer
  let fast = head;   // Initialize the fast pointer

  // Find the middle of the linked list using slow and fast pointers
  while (fast && fast.next) {
    slow = slow.next;   // Move the slow pointer by one step
    fast = fast.next.next;   // Move the fast pointer by two steps
  }

  let reversed = reverseList(slow);   // Reverse the second half of the linked list
  let current = head;   // Pointer to traverse the first half of the linked list

  // Compare the values of the first half and the reversed second half of the linked list
  while (reversed) {
    if (current.val !== reversed.val) {
      return false;   // Return false if values are not equal (not a palindrome)
    }

    current = current.next;   // Move the current pointer to the next node
    reversed = reversed.next;   // Move the reversed pointer to the next node
  }

  return true;   // Return true if all values are equal (palindrome detected)
};


// ListNode Definition: class ListNode { constructor(val) { this.val = val; this.next = null; } }

// Test cases
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(2);
list1.next.next.next = new ListNode(1);
console.log(isPalindrome(list1));  // Output: true

const list2 = new ListNode(1);
list2.next = new ListNode(2);
console.log(isPalindrome(list2));  // Output: false
```
Consider the diagram for further understanding:
```
       +---+      +---+      +---+      +---+
head --> | 1 | ---> | 2 | ---> | 2 | ---> | 1 |
         +---+      +---+      +---+      +---+
```

The `isPalindrome` function determines whether a singly linked list is a palindrome using the Fast and Slow Pointers approach. It finds the middle of the linked list using two pointers (`slow` and `fast`), reverses the second half of the list, and compares the values of the first half with the reversed second half.

The time complexity of this solution is O(n), where n is the number of nodes in the linked list. The space complexity is O(1).

</details>
<details>
<summary><strong>Cycle in a Circular Array</strong></summary>

Given an array of integers, determine if there is a cycle in the array. A cycle occurs if you can start from any index in the array, follow the jumps to traverse the array, and eventually loop back to the starting index.

```javascript
/**
 * Cycle in a Circular Array
 * @param {number[]} nums - Array of integers
 * @returns {boolean} - True if a cycle exists, False otherwise
 */
const circularArrayLoop = function(nums) {
  const n = nums.length;   // Get the length of the input array

  // Helper function to find the next index
  const getNextIndex = function(i) {
    const nextIndex = (i + nums[i]) % n;   // Calculate the next index
    return nextIndex >= 0 ? nextIndex : n + nextIndex;   // Handle negative indices
  };

  // Iterate through the array to find a cycle
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      continue;   // Skip the current iteration if the element is 0
    }

    let slow = i;   // Initialize the slow pointer
    let fast = i;   // Initialize the fast pointer

    while (true) {
      slow = getNextIndex(slow);   // Move the slow pointer
      fast = getNextIndex(getNextIndex(fast));   // Move the fast pointer twice as fast

      // Check for cycle or change of direction
      if (
        slow === fast ||       // A cycle is found
        nums[i] * nums[slow] < 0 ||  // Direction changes
        nums[i] * nums[fast] < 0    // Direction changes
      ) {
        break;  // Exit the while loop when a cycle or direction change is detected
      }
    }

    if (slow === fast) {
      return true;   // Return true if a complete cycle is found
    }

    // Mark all elements along the cycle as 0
    let j = i;
    while (nums[j] * nums[getNextIndex(j)] > 0) {
      const temp = j;
      j = getNextIndex(j);
      nums[temp] = 0;   // Mark the element as 0
    }
  }

  return false;   // No cycle found
};

// Test cases
const nums1 = [2, -1, 1, 2, 2];
console.log(circularArrayLoop(nums1));  // Output: true

const nums2 = [-1, 2];
console.log(circularArrayLoop(nums2));  // Output: false
```
Consider the diagram for further understanding:
```
[2, -1, 1, 2, 2]
 ↑        ↑
 Cycle   Cycle
```

The `circularArrayLoop` function determines whether a cycle exists in a circular array using the Fast and Slow Pointers approach. It uses two pointers (`slow` and `fast`) to traverse the array, following the jumps based on the values at each index. If a cycle is found, or if there is a change in direction, the function terminates and returns `true`.

The time complexity of this solution is O(n), as it traverses each element of the input array once. The space complexity is O(1).

</details>


# File: ./14PatternsForDSA/06_InPlaceReversalOfLinkedList/README.md

# In-place reversal of linked list

In a lot of problems, you may be asked to reverse the links between a set of nodes of a linked list. Often, the constraint is that you need to do this in-place, i.e., using the existing node objects and without using extra memory. This is where the above mentioned pattern is useful.

This pattern reverses one node at a time starting with one variable (current) pointing to the head of the linked list, and one variable (previous) will point to the previous node that you have processed. 

In a lock-step manner, you will reverse the current node by pointing it to the previous before moving on to the next node. Also, you will update the variable “previous” to always point to the previous node that you have processed.


ID the In-place reversal of linked lists

• Reverse a linked list without using extra memory


Examples of in-Place Reversal of Linked List
• Reverse a Sub-list (medium)
• Reverse every K-element Sub-list (medium)

# File: ./14PatternsForDSA/11_ModifiedBinarySearch/README.md



# File: ./14PatternsForDSA/10_Subsets/README.md



# File: ./14PatternsForDSA/09_TwoHeaps/README.md



# File: ./14PatternsForDSA/14_TopologicalSort/README.md



# File: ./14PatternsForDSA/02_TwoPointersOrIterators/README.md

## Two Pointers or Iterators

The Two Pointers pattern involves using two pointers or iterators that traverse through the data structure together until one or both of the pointers fulfill a certain condition. This pattern is commonly used when searching for pairs in a sorted array or linked list, where each element needs to be compared with other elements.

By using two pointers, you can avoid the inefficiency of continuously looping back through the array to find the answer. With a single iterator, the time and space complexity would be O(n²) in the worst case scenario.

The Two Pointers pattern allows for a more efficient solution with better time and space complexity.

### Identifying the Two Pointers Method

A problem that can be solved using the Two Pointers pattern typically involves sorted arrays or linked lists. The goal is usually to find a set of elements that satisfy certain constraints. This set can be a pair, a triplet, or even a subarray.

Some common problems that can be solved using the Two Pointers method include:

- Squaring a sorted array
- Finding triplets that sum to zero
- Comparing strings that contain backspaces

Using the Two Pointers method can lead to optimized solutions with improved time and space complexity.

<details>
<summary><strong>Squaring a Sorted Array</strong></summary>

Given a sorted array of integers, the task is to square each element of the array and return the new sorted array. The Two Pointers method can be applied to solve this problem more efficiently.

```javascript
/**
 * Squaring a Sorted Array
 * @param {number[]} nums - Sorted array of integers
 * @returns {number[]} - New sorted array with squared elements
 */
const squareSortedArray = function(nums) {
  const n = nums.length;   // Get the length of the input array
  let left = 0;   // Initialize the left pointer
  let right = n - 1;   // Initialize the right pointer
  let result = Array(n);   // Array to store the squared elements

  // Iterate from the end of the result array
  for (let i = n - 1; i >= 0; i--) {

    const leftSquare = nums[left] ** 2;   // Square the element at the left pointer
    const rightSquare = nums[right] ** 2;   // Square the element at the right pointer

    // Compare the squared elements and assign the larger value to the result array
    if (leftSquare > rightSquare) {
      result[i] = leftSquare;   // Assign the left squared element to the result array
      left++;   // Move the left pointer to the right
    } else {
      result[i] = rightSquare;   // Assign the right squared element to the result array
      right--;   // Move the right pointer to the left
    }
  }

  return result;   // Return the array with the squared elements
};

// Test the function
const sortedArray = [-4, -2, -1, 0, 3, 5, 7];
const squaredArray = squareSortedArray(sortedArray);
console.log(squaredArray);  // Output: [0, 1, 4, 9, 16, 25, 49]
```

The `squareSortedArray` function squares each element of the given sorted array using two pointers (`left` and `right`). The pointers move from opposite ends of the array towards the middle, comparing the squares of the elements and storing them in the `result` array in descending order.

By utilizing the Two Pointers pattern, the function achieves a time complexity of O(n) and a space complexity of O(n), where `n` is the length of the input array.

</details>

<details>
<summary><strong>Finding Triplets that Sum to Zero</strong></summary>

Given an array of integers, you need to find all unique triplets in the array that sum up to zero.

```javascript
/**
 * Finding Triplets that Sum to Zero
 * @param {number[]} nums - Array of integers
 * @returns {number[][]} - Array of unique triplets that sum up to zero
 */
const threeSum = function(nums) {
  const result = [];   // Array to store the triplets
  const n = nums.length;   // Length of the input array
  nums.sort((a, b) => a - b);   // Sort the input array in ascending order

  // Iterate through the array, skipping the last two elements as we need at least three elements to form a triplet
  for (let i = 0; i < n - 2; i++) {

    // Skip the current iteration if the current number is equal to the previous number to avoid duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;   // Pointer for the element to the right of the current number
    let right = n - 1;   // Pointer for the element at the end of the array

    // Move the left and right pointers towards each other
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];   // Calculate the sum of the three elements

      // If the sum is zero, we found a triplet that adds up to zero
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);   // Add the triplet to the result array

        // Skip the elements with the same value to avoid duplicates in the result
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

         // Skip the elements with the same value to avoid duplicates in the result
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;   // Move the left pointer to the right
        right--;   // Move the right pointer to the left
      }

      // If the sum is less than zero, we need a larger element, so we move the left pointer to the right
      else if (sum < 0) {
        left++;
      }

      // If the sum is greater than zero, we need a smaller element, so we move the right pointer to the left
      else {
        right--;
      }
    }
  }

  return result;   // Return the array of triplets with a sum of 0
};


// Test the function
const nums = [-1, 0, 1, 2, -1, -4];
const triplets = threeSum(nums);
console.log(triplets);  // Output: [[-1, -1, 2], [-1, 0, 1]]
```


The `threeSum` function finds unique triplets in the given array `nums` that sum up to zero. It utilizes the Two Pointers pattern to efficiently search for the triplets. The function starts with a sorted array, and with each iteration, it moves two pointers (`left` and `right`) towards the center until it finds a triplet that sums up to zero.
</details>

<details>
<summary><strong>Comparing Strings that Contain Backspaces</strong></summary>


Given two strings `S` and `T`, you need to compare them after processing any backspaces. A backspace character "#" means to remove the previous character.

```javascript
/**
 * Comparing Strings that Contain Backspaces
 * @param {string} S - The first string
 * @param {string} T - The second string
 * @returns {boolean} - True if the strings are equal after processing backspaces, False otherwise
 */
const backspaceCompare = function(S, T) {
  function processString(str) {
    const result = [];

    for (const char of str) {
      if (char === "#") {
        result.pop(); // Remove the last element from the result array if the character is a backspace
      } else {
        result.push(char); // Push the character into the result array if it is not a backspace
      }
    }
    return result.join("");   // Join the characters in the array to form the final processed string
  }

  const processedS = processString(S);   // Process the string S
  const processedT = processString(T);   // Process the string T

  return processedS === processedT;   // Compare the processed strings for equality
};

// Test the function
const S = "ab#c";
const T = "ad#c";
console.log(backspaceCompare(S, T));  // Output: true

const X = "ab##";
const Y = "c#d#";
console.log(backspaceCompare(X, Y));  // Output: true

const P = "a##c";
const Q = "#a#c";
console.log(backspaceCompare(P, Q));  // Output: true

const M = "a#c";
const N = "b";
console.log(backspaceCompare(M, N));  // Output: false
```

The `backspaceCompare` function compares two strings `S` and `T` after processing backspaces. It iterates through each string, processes the backspaces, and stores the resulting strings. Finally, it compares the processed strings to determine if they are equal.
</details>


