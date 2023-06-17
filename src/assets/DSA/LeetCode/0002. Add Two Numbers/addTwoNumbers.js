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


// The current implementation of the function has a time complexity of O(n + m + k), where n is the length of l1, m is the length of l2, and k is the length of the result list. The space complexity is O(n + m + k) as well, due to the use of the two arrays and the result list.

// To optimize for time and space, we can avoid using the two arrays to store the values of l1 and l2, and instead add the corresponding values directly while iterating through the linked lists. This would reduce the space complexity to O(k), where k is the length of the result list, and the time complexity to O(max(n, m) + k), which is better than the original implementation.

// Here's an optimized implementation:

var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let newHead = new ListNode('')
    let newPointer = newHead

    while(l1 || l2 || carry) {
      let val1 = l1 ? l1.val : 0
      let val2 = l2 ? l2.val : 0
      let sum = val1 + val2 + carry

      carry = sum > 9 ? 1 : 0
      let digit = sum % 10

      let newNode = new ListNode(digit)
      newPointer.next = newNode
      newPointer = newNode

      l1 = l1 ? l1.next : null
      l2 = l2 ? l2.next : null
    }

    return newHead.next
  }


//   In this implementation, we use a single while loop to iterate through both l1 and l2 simultaneously, adding the corresponding values and keeping track of the carry. We create the new nodes and add them to the result list as we go. This way, we don't need to store the values of l1 and l2 separately in arrays, and can directly add them to the result list.

