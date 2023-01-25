/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let i=0;
    let j=0;
    while(j<=nums1.length-1){
        console.log(nums1[j], nums2[i])
        if(nums1[j]===nums2[i]){
            return nums1[j]
        }else if(nums1[j]>nums2[i]){
            i++
        }else{
            j++
        }
    
    }
    return -1
};

// [1,2,3,4], 
//    j   
// [0,3,5]
//    i