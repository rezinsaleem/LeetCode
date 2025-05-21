// Last updated: 5/21/2025, 4:01:28 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let i=0;i<nums.length;i++){
        let sumOfDigits = nums[i].toString().split('')
        if(sumOfDigits.length>1){
            let sum = sumOfDigits.reduce((acc,num)=>acc+Number(num),0)
            if(i==sum) return i
        }
        if(i==sumOfDigits) return i
    }
    return -1;
};