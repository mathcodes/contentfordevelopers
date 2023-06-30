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
