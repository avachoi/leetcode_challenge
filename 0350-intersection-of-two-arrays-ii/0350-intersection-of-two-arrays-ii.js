/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
   let res=[];
    let obj={};
    nums1.forEach(num=> obj[num]=(obj[num]||0)+1);
    for(let i=0; i<nums2.length; i++){
        if(obj[nums2[i]]>0){
            res.push(nums2[i])
            obj[nums2[i]]--
        }
    }
   return res
};

//make an obj for num1;
//iterate nums2 and decrement freq of curr in obj