var mergeKLists = function (lists) {
  if (lists.length <= 2) {
      return merge2Lists(...lists);
  }
  
  return merge2Lists(
      mergeKLists(lists.slice(0, lists.length >> 1)),
      mergeKLists(lists.slice(lists.length >> 1))
  );
};

function merge2Lists(l1 = null, l2 = null) {
  if (!l1) {
      return l2;
  }
  
  if (!l2) {
      return l1;
  }
  
  return (l1.val < l2.val)
      ? new ListNode(l1.val, merge2Lists(l1.next, l2))
      : new ListNode(l2.val, merge2Lists(l1, l2.next));
}