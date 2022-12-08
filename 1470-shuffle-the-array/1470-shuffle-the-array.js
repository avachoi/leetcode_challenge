/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let x=nums.slice(0, n)
    let y= nums.slice(n);
    let res=[]
    for(let i=0; i<n; i++){
        res.push(x[i], y[i])
    }
    return res
};

//divide the array into two
//for loop and take one at a time by turns