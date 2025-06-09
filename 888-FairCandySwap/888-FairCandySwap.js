// Last updated: 6/9/2025, 8:07:24 PM
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let aliceSum = aliceSizes.reduce((a,b)=>a+b,0)
    let bobSum = bobSizes.reduce((a,b)=>a+b,0)
    let diff = (aliceSum - bobSum)/2
    for(let i=0;i<aliceSizes.length;i++){
        for(let j=0;j<bobSizes.length;j++){
            if(aliceSizes[i]-bobSizes[j]==diff){
                return [aliceSizes[i],bobSizes[j]]
            }
        }
    }
};