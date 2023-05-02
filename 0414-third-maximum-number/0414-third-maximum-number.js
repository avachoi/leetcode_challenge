/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let sorting= [...nums].sort((a,b)=>a-b);
    let set= new Set(sorting)
    let sorted= [...set]
    return sorted.length>=3? sorted[sorted.length-3]: sorted[sorted.length-1]
   
};

//sort
//find third
//if no third, find last
//[1,2,3,4,5]