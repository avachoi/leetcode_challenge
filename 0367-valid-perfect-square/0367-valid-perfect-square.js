/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for(let i=1; i<=num; i++){
        if(i*i===num)return true
    }
    return false
};
//36