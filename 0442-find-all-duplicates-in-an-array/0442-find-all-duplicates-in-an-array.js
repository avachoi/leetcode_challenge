/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
   let sorted= nums.sort((a,b)=>a-b);
    let res=[]
    for(let i=0; i<sorted.length; i++){
        if(sorted[i]===sorted[i+1]){
            res.push(sorted[i]);
            i++
        }
    }
    return res
};

//sort nums
//iterate and check if current is same as next
   //if yes, push it to res and i++