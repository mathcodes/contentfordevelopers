# 617. Merge Two Binary Trees

# You are given two binary trees root1 and root2.

# Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

# Return the merged tree.

# Note: The merging process must start from the root nodes of both trees.


class Solution:
    def mergeTrees(self, t1, t2):
        if t1==None and t2==None:
            return None
        elif t1==None:
            return t2
        elif t2==None:
            return t1
        else:
            ans = TreeNode(t1.val+t2.val)
            ans.left=self.mergeTrees(t1.left,t2.left)
            ans.right=self.mergeTrees(t1.right,t2.right)
            return ans