/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k> nums.length){
        k=k%nums.length
    }
    let removed= nums.splice(nums.length-k, k)
    console.log(removed)
    nums.splice(0,0,...removed)
};

//remove k number of elements from right and add them to the left.
//use splice to remove
//use splice to add