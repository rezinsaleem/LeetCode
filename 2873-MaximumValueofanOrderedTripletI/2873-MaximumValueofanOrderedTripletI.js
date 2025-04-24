// Last updated: 4/24/2025, 11:53:54 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let res = [0]
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k= j+1;k<nums.length;k++){
               res.push((nums[i]-nums[j])*nums[k])
            }
        }
    }
   return Math.max(...res)
};