
function ListNode(val, next) {
this.val = (val===undefined ? 0 : val)
this.next = (next===undefined ? null : next)
}


var mergeTwoLists = function(list1, list2) {
    // inital head at index of 0
        let head = new ListNode(0);
    // head is not moving but current is represented the current node. Initally this is `head`
        let current = head;
        
        while(list1 != null && list2 != null){
        
            if( list1.val < list2.val )
            {
                current.next = list1
                list1 = list1.next
            }
            else{
                current.next = list2
                list2 = list2.next
            }
            current = current.next
        }
        if(list1 != null){
            current.next = list1
        }
        if(list2 != null){
            current.next = list2
        }
        return head.next
    };

console.log(mergeTwoLists([1,2,4], [1,3,4]))