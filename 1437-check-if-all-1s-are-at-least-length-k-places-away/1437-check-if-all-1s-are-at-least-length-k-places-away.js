/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let i=nums.indexOf(1);
    let j=nums.indexOf(1)+1;
    
    while(j<nums.length){
        if(nums[j]===1){
            console.log(i,j)
            let diff= j-i-1;
            if(diff<k){
                return false
            }else{
                i=j
            }
        }
        j++
    }
    return true
};
//use 2pointers
//    [1,0,0,0,1,0,0,1], k = 2
//i=   ^
//j=           ^

//use while loop