/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i=digits.length-1; i>=0; i--){
        if(digits[i]===9){
            digits[i]=0
        }else{
            digits[i]+=1;
            return digits
        }
        if(i===0){
            digits[i]=0;
            digits.unshift(1);
            return digits
        }
    }
};

//                                   i
//[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,6,0,0]

//iterate through digits from the end
//if curr===9
//.  curr=0
//else curr+=1 return
//if i=0 unshift 1