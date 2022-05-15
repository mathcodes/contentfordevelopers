var addTwoNumbers = function(l1, l2) {
    
  let array1 = []
  let array2 = []
  
  while(l1!==null){
      array1.push(l1.val)
      l1 = l1.next
  }
  
  while(l2!==null){
      array2.push(l2.val)
      l2 = l2.next
  }
  
  let num1 = array1.reverse().join('')
  let num2 = array2.reverse().join('')

  
  let resNumber = BigInt(num1) + BigInt(num2)
  let arr3 = String(resNumber).split('').reverse()

  let newHead = new ListNode('')    
  let newPointer = newHead
  
  for(let i=0;i<arr3.length;i++){
      let node = new ListNode(arr3[i])
      newPointer.next=node
      newPointer = node
  }
  
  return newHead.next
      
};