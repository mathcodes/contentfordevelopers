// 234. Palindrome Linked List
// Given the head of a singly linked list, return true if it is a palindrome.


// const reverse = (head) => {
//   let cur = head;
//   let prev = null;
//   let next;

//   while(cur) {
//     next = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = next;
//     console.log(prev)
//   }
//   return prev;
// }

// var isPalindrome = function(head) {
  
//   let fast = head;
//   let slow = head;
//   let startPointer = head;
//   let len = 0;

//   while(fast && fast.next){
//     fast = fast.next.next;
//     slow = slow.next;
//     len++;
//   }

//   let mid = reverse(slow);

//   while(len) {
//     len--;
//     if(mid.val !== startPointer.val) return false;
//     mid = mid.next;
//     startPointer = startPointer.next;
//   }
//   return true;
// };

// SOLUTION 2
var isPalindrome = function(head) {
  if (head === null || head.next ===null) {
    return true; 
  }

  let slow = head;
  let fast = head;
  let curr = head;

  while(fast !== null && fast.next !==null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let stack = [];


}