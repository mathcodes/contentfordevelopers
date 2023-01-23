/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.
//   You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//   Example:
//   Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//   Output: 7 -> 0 -> 8
//   Explanation: 342 + 465 = 807.",

 var twoSum = function(nums,target) {
    for (let i = 0; i < nums.length;i++){
        for (let j = (i+1); j < nums.length;j++){
            if(nums[i]+nums[j] === target){
                let arr = [i,j]
                return arr;
            }
        }
    } 
};

// 'Time_Complexity': "O(max(m,n))",
// 'Space_Complexity': "O(max(m,n))",
