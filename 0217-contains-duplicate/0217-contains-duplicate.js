/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj={};
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]) return true;
        obj[nums[i]]=1
    }
    return false
};
//create obj to store freq of nums el
//iterate nums
//check if current el is already stored in obj
//if yes, return true
//return false



//obj-> space complexity