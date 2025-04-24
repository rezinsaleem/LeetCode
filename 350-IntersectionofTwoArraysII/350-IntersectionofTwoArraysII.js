// Last updated: 4/24/2025, 10:59:20 AM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (n1, n2) => {
  const obj = {};
  const res = [];
  for (let n of n1) {
    if (!obj[n]) obj[n] = 0;
    obj[n]++;
  }

  for (let n of n2) {
    if (obj[n] > 0) {
      res.push(n);
      obj[n]--;
    }
  }
  return res;
};