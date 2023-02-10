/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let sorted= [...costs].sort((a,b)=>a-b);
    let total=0;
    for(let i=0; i<sorted.length; i++){
        total+=sorted[i];
        if(coins< total){
            return i
        }
        
        
    }
    return costs.length
};
//[1,3,2,4,1] [1,1,2,3,4] 7
//                   7
// sort costs
//add up els and until it's <=coins