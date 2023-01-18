/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let obj={};
    nums.forEach(num=> obj[num]= (obj[num]||0)+1);
    let res=0;
    for(let i=0; i<nums.length-1; i++){
        if(obj[nums[i]-diff]&&obj[nums[i]+diff]){
            res++
        }
    }
    return res
};

//create obj for nums;
//iterate nums and see if there are curr-diff, curr+diff in the obj,
     //if yes, increment res