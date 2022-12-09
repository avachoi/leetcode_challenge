/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let sorted= [...nums].sort((a,b)=>a-b);
    let obj={}
    for(let i=0; i<sorted.length; i++){
        obj[sorted[i]]= sorted.indexOf(sorted[i]);
    }
    let res=[];
    nums.forEach(num=> res.push(obj[num]));
    return res
};

//create new array and store sorted nums
//iterate new array
    //find number of prevs and store in the obj
//create res
//iterate nums and find each num's value from the obj and store in the res


//[8,1,2,2,3]
//[1,2,2,3,8]   
// {1:0, 2:1, 2:1, 3:3, 8:4} find index of curr value
// [4,0,1,1,3]