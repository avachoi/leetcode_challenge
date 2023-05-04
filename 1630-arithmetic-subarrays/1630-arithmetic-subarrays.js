/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let res= [];
    for(let i=0; i<l.length; i++){
        let sub= nums.slice(l[i], r[i]+1);
        sub.sort((a,b)=> a-b);
        let diff= sub[1]-sub[0]
        let arithmetic=true
        for(let j=1; j<sub.length-1; j++){
            if(sub[j+1]-sub[j]!==diff){
                arithmetic=false;
                break
            }
        }
        res.push(arithmetic)
    }
    return res
};

//iterate m, and take out subarray of the range
   //sort the subarray
   //iterate througn the sorted arr and see the diff between each el