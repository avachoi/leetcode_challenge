/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let obj={};
    let sorted= [...nums].sort((a,b)=>a-b)
    for(let i=0; i<nums.length; i++){
        obj[nums[i]]=(obj[nums[i]]||0)+1
    }
    let len= Math.max(...Object.values(obj))
    let res= [];
    for(let i=0; i<len; i++){
        res.push([])
    }
    
    res[0].push(sorted[0])
    let curr=0;
    console.log(res[curr])
    for(let i=1; i<nums.length; i++){
        if(sorted[i]===sorted[i-1]){
            curr++
        }else{
            curr=0
        }
        res[curr].push(sorted[i]);
        console.log('res', res)
    }
    console.log(res)
    return res
};

//use obj to count freq
//create arrays with the freq
//iterate nums and put each numbers into different array if they are same

//[1,3,4,1,2,3,1]
//{1:3, 2:1, 3:2, 4:1}
//[3,1,2,1]
//3
//[1,1,1,2,3,3,4]
//iterate array
    //if curr is diffent than prev, go to first array
    //if same, go to next array