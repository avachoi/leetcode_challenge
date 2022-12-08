/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
   let sub=''
   let max=0;
    for(let i=0; i<s.length; i++){
        if(sub.includes(s[i])){
            max=Math.max(max, sub.length)
            sub= sub.substring(sub.indexOf(s[i])+1)
        }
        sub+=s[i]
    }
    return Math.max(max, sub.length)
}

// "abcabcbb"
 
// {'a':1, 'b':1, 'c':1}
// 3

//find the max length of the string
//create a new str to save substr
//iterate s and see if substring contains current 
    //no, concat current to the sub, max++
    //yes, edit the substr by cutting off front part of the substr
     // abcdb-> cdb
    // current:b
    // sub: cdb