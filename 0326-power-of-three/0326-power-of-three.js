/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while(n>1){
        if(n%3!==0)return false
        n=n/3
    }
    if(n===1){
        return true
    }else{
        return false
    }
};

