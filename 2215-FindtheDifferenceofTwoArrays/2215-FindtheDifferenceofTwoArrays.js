// Last updated: 6/3/2025, 3:10:00 PM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const ans1 = [...set1].filter(x => !set2.has(x));
    const ans2 = [...set2].filter(x => !set1.has(x));

    return [ans1, ans2];

};