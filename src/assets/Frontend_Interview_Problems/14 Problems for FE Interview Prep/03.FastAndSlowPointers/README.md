# Fast and Slow Pointers

• Uses the pointer algorithm 
• Contains two pointers which move through the array (or sequence/linked list) at different speeds. 
• This approach is quite useful when dealing with `cyclic linked lists` or `arrays`.
• The algorithm proves that the two pointers are bound to meet. The fast pointer should catch the slow pointer once both the pointers are in a cyclic loop.

# ID the Fast and Slow pattern

• `loop in a linked list or array`
• need to know the `position` of a `certain element` 
• or the overall `length` of the `linked list`.
• when you’re trying to determine if a `linked list` is a `palindrome`.

# Examples of Fast and Slow Pattern problems:

<details>
<summary>
<span style="font-size:1.5rem;">Leetcode # 141. Linked List Cycle</span>
</summary>

   - one more variable, `sum` of two indices LEFT and RIGHT
   - WHILE LOOP with if if-else and else statements for three scenarios
   - decr / incr bounds OR if equal
     - push to result, check for duplicates on both sides, incr/decr 

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

```js
var hasCycle = function(head) {
    if(!head) {
        return false;
    }
    let hare = head;
    let tortoise = head;
    while(hare) {
        if(!hare.next) {
            return false;
        } else {
            hare = hare.next.next;
            tortoise = tortoise.next;
        }
        if(tortoise == hare) {
            return true;
        }
    }
    return false;
};
```

</details>

<details>
<summary>
<span style="font-size:1.5rem;">Leetcode #234: Palindrome Linked List (medium)</span>
</summary>

```js
var isPalindrome = function(head) {
  // edge cases
  if(head === null || head.next === null) {
    return true
  }

  let tortoise = head;
  let hare = head;
  let curr = head;

  while(hare != null && hare.next != null) {
    tortoise = sltortoiseow.next;
    hare = hare.next.next;
  }

  let stack = [];

  while(tortoise != null) {
    stack.push(tortoise.val)
    tortoise = tortoise.next
  }

  while(stack.length) {
    if(curr.val != stack.pop()) {
      return false
    }
    curr = curr.next
  }

  return true
}

// ANOTHER SOLUTION:
var isPalindrome = function(head) {
  let slow = head;
  let fast = head;
  const stack = [];
  // Being traversing the linked list, ultimately this gets us to the 
  // middle of the linked list with the slow pointer at the start of the second half
  while(fast) {
    // check if our fast pointer is at the very last node of our linked list
    if(!fast.next) {
      // since fast.next is null we know the slow pointer is in the middle
      // and the linked list has an odd number of elements
      // In this case, we want to skip the middle node:
      slow = slow.next;
      break;
    }
    stack.push(slow.val)
    slow = slow.next;
    fast = fast.next.next;
  }

  // now we just traverse through second half
  while(slow) {
  // popping elements off stack and comparing them to value of slow point
    if(stack.pop() != slow.val) return false;
    slow = slow.next
  }
  return true
}
```

</details>


<details>
<summary>
<span style="font-size:1.5rem;">Cycle in a Circular Array (hard)</span>
</summary>

DETAILS HERE

</details>