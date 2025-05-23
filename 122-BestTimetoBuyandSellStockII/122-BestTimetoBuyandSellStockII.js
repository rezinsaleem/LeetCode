// Last updated: 5/23/2025, 4:27:06 PM
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for(let i=0;i<prices.length-1;i++){
        if(prices[i]<prices[i+1]){
           profit-=prices[i]
           profit+=prices[i+1]
        }
    }
    return profit;
};