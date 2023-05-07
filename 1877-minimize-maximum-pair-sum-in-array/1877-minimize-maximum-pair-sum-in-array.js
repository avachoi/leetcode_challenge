/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let sorted= [...nums].sort((a,b)=>a-b);
    let max=0;
    for(let i=0; i<sorted.length/2; i++){
        max= Math.max(sorted[i]+sorted[sorted.length-1-i], max)
    }
    return max
};

// [3,5,4,2,4,6]
// 2,3,4,4,5,6
// 26, 3,5,4,4

//sort arr
//iterate arr and find max of pair sum of leftmost and rightmost
//return max pair sum