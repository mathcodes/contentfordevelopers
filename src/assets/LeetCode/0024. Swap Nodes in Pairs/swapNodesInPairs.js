var swapPairs = function(head) {  
  if (head == null || head.next == null) 
      return head  
  let prev = head, pre = head.next, tmp = head.next, f1, f2 
  while (1) {  
      prev.next = pre.next 
      pre.next = prev
      if (prev.next == null)
          break
      f1 = prev.next
      if (f1.next == null)
          break
      f2 = f1.next
      prev.next = f2
      prev = f1
      pre = f2
  }
  return tmp
};

console.log(swapPairs([1,3,3,4]))