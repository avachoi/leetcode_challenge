/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let obj= {};
    for(let i=0; i<nums.length-1; i++){
        if(obj[nums[i]+nums[i+1]]) return true
        obj[nums[i]+nums[i+1]]=1;
    }
    return false
};

//store each sum value to the obj
//check if sum freq is <1