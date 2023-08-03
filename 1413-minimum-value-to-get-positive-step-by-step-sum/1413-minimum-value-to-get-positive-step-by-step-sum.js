/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    for(let i=1; i<Infinity; i++){
        let sum=i
        for(let j=0; j<nums.length; j++){
            sum+=nums[j];
            if(sum<1){
                break
            }
            if(j===nums.length-1){
                return i
            }
        }
    }
};

//iterate through 1 to 100
//check if current sum is less then 1
    //if so continue