/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit=0;
    for(let i=1; i<prices.length; i++){
        let diff= prices[i]-prices[i-1];
        if(diff>0){
            profit+=diff
        }
    }
    return profit
};

//because maximum, add all possible profit.
//iterate through the prices and find the pos profit and add up
// return the max profit