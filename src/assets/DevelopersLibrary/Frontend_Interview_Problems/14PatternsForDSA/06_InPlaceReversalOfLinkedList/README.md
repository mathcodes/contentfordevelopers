# In-place reversal of linked list

In a lot of problems, you may be asked to reverse the links between a set of nodes of a linked list. Often, the constraint is that you need to do this in-place, i.e., using the existing node objects and without using extra memory. This is where the above mentioned pattern is useful.

This pattern reverses one node at a time starting with one variable (current) pointing to the head of the linked list, and one variable (previous) will point to the previous node that you have processed. 

In a lock-step manner, you will reverse the current node by pointing it to the previous before moving on to the next node. Also, you will update the variable “previous” to always point to the previous node that you have processed.


ID the In-place reversal of linked lists

• Reverse a linked list without using extra memory


Examples of in-Place Reversal of Linked List
• Reverse a Sub-list (medium)
• Reverse every K-element Sub-list (medium)