// Last updated: 5/22/2025, 4:44:53 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums = nums.sort((a,b)=>a-b)
   return (nums[nums.length-1]*nums[nums.length-2])-(nums[0]*nums[1]) 
};