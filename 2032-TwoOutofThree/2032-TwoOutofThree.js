/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    nums1 = [...new Set(nums1)]
    nums2 = [...new Set(nums2)]
    nums3 = [...new Set(nums3)]

    let arr = [nums1, nums2, nums3]
    arr = arr.flat()
    let res = []
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] += 1 : 1;
    }
    for (let key in obj) {
        if (obj[key] > 1) {
            res.push(Number(key))
        }
    }
    return res;
};