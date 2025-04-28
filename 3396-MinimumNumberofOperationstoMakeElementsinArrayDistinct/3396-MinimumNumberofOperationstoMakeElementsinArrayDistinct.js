// Last updated: 4/28/2025, 2:30:28 PM
var minimumOperations = function(nums) {
    let res = 0;

   while (nums.length > 0) {

        if (nums.length === new Set(nums).size) return res;

        const elemRemove = Math.min(3, nums.length);
        nums.splice(0, elemRemove);
        res++;
    }

    return res;
};
