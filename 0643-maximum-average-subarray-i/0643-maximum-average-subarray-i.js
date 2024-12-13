/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let sub= nums.slice(0, k);
    let sum= (sub.reduce((prev,curr)=>prev+curr,0));
    let maxAvg= sum/k
    console.log('first',sub,maxAvg)
    for(let i=1; i<=nums.length-k; ++i){
        sum= sum-nums[i-1]+nums[i+k-1];
        maxAvg= Math.max(maxAvg, sum/k)
        console.log('inLoop',maxAvg)
    }
    return maxAvg
};

//iterate nums and find the max avarage 
