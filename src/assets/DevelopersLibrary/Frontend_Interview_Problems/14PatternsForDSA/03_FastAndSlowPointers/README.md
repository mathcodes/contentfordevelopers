
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
