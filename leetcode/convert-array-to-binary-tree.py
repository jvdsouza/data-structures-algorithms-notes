
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

import math
class Solution:
    def sortedArrayToBST(self, nums: 'List[int]') -> 'TreeNode':
        numsLen = len(nums)
        if numsLen == 0:
            return None
        if numsLen == 1:
            return TreeNode(nums[0])

        median = nums[math.floor(numsLen/2)]
        splitLeft = nums[0:median]
        splitRight = nums[median:]

        root = TreeNode(median)
        # print(root)
        currentNode = root
        for i in splitLeft:
            currentNode.left = TreeNode(i)
            currentNode = currentNode.left
            # print(root)

        currentNode = root
        for j in splitRight:
            currentNode.right = TreeNode(j)
            currentNode = currentNode.right
            # print(root)

        return root

soln = Solution()
print(soln.sortedArrayToBST([-10,-3,0,5,9]))
