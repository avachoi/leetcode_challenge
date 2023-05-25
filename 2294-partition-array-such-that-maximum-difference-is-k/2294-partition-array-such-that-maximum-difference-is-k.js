/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    if(nums.length<=1) return nums.length;
    let sorted= [...nums].sort((a,b)=>a-b);
    sorted.push(Infinity)
    let ind= sorted[0];
    let count=0
   
    for(let i=1; i<sorted.length; i++){
        let curr= sorted[i]
        if(curr-ind>k){
            count++;
            ind= curr;
            console.log(ind)
        }
    }
    return count
};
// [3,6,1,2,5]
// [1,2,3,5,6]

//sort arr
//first el= indicator
//iterate arr and see curr-indi
    //if sub is greater than k, create subarray and update indicator