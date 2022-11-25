class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        
        ans = inf

        for i in range(len(nums)): 
            if i and nums[i-1] == nums[i]: continue
            lo, hi = i+1, len(nums)-1
            while lo < hi: 
                sm = nums[i] + nums[lo] + nums[hi] 
                ans = min(ans, sm, key=lambda x: abs(x-target))
                if sm < target: lo += 1
                elif sm == target: return ans
                elif sm > target: hi -= 1

        return ans 