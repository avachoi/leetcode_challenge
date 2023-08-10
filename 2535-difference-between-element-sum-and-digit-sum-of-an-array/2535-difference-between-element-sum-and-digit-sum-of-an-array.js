/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elSum=nums.reduce((occ, curr)=> occ+curr);
    let digits= [...nums].join('').split('');
    let diSum=digits.reduce((occ, curr)=> occ+Number(curr),0);
    console.log(diSum)
    return Math.abs(elSum-diSum)
};