/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    let marked = new Set()
    let res = 0
    for(let i = 0; i < nums.length; i++){
        nums[i] = [nums[i], i]
    }
    nums.sort((a,b) => a[0] - b[0])
    for (let i = 0; i < nums.length; i++){
        if (!marked.has(nums[i][1])){
            const pos = nums[i][1]
            marked.add(pos)
            marked.add(pos - 1)
            marked.add(pos + 1)
            res += nums[i][0]
        }
    }
    return res
};