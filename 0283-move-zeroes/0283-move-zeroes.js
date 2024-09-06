/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j=0;
    for(let i=0; i<nums.length; i++){
        let curr=nums[i]
        if(curr!==0){
            nums[j]=nums[i];
            j++
        }
    }
    for(let i=j; i<nums.length; i++){
        nums[i]=0
    }
    return nums
};

//use two pointer
//iterate through nums 
//if curr is not 0, change the j's el as curr
//increment j
//fill up 0 at empty el

      // j
//[1,3,12,0,0]
//            i