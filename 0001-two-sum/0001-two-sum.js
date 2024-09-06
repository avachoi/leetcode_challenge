/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj={};
    for(let i=0; i<nums.length; i++){
        let curr=nums[i];
        let diff=target-curr;
        if(obj[diff]>=0){
            return [i,obj[diff] ]
        }else{
            obj[curr]=i
        }
    }
};
//create obj for save previous.
//iterate nums
//if target-curr is in obj
   //return curr, obj[i]
//else save curr to the obj