/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversed= x.toString().split("").reverse().join('')
    console.log(reversed, x.toString())
    return x.toString()===reversed;
    
};