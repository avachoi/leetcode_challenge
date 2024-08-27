/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let filtered= nums.filter(el=>el!==val);
    let k= filtered.length;
    filtered.forEach((el,i)=>nums[i]=el)
    return k
};