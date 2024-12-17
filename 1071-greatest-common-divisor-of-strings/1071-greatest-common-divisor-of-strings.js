/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let gcd= (a,b)=> b===0? a :gcd(b, a%b);
    if(str1+str2!==str2+str1) {
        console.log('no reverse')
        return "";
    }
   let subLength= gcd(str1.length, str2.length)
    return str1.substring(0,subLength)
    
};
//find gcd
//if substring of both str is same,true


//use while loop with shortest str
//check if curr shortStr can divide longS
//yes, return curr shorStr,
//no, make the short shorter