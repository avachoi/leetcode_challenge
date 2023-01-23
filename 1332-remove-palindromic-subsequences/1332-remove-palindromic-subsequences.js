/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    let reversed= [...s].reverse();
   
    if(s===reversed.join('')){
        return 1
    }else{
        return 2
    }
};