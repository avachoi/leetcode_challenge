/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let positives= [...nums1];
    for(let i=nums1.length-1; i>=m; i--){
        if(nums1[i]===0){
            positives.pop()
        }else{
            break
        }
    }
    
    
    let merged= [...positives, ...nums2].sort((a,b)=> a-b);
    console.log(positives, merged)
    for(let i=0; i<nums1.length; i++){
        nums1[i]= merged[i]
    }
    console.log(nums1)
};

//create new array and push merged nums1+ nums2
//iterate nums1 and update each el as new array on the same index
