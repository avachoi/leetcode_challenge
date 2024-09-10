/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let j=s.length-1
    for(let i=0; i<s.length/2;i++){
        [s[i],s[j]]=[s[j],s[i]];
        j--
        console.log(s)
    }
};



// var reverseString = function (s) {
//     let n = s.length;
//     let i = 0, j = n - 1;
//     while (i < j) {
//         [s[i], s[j]] = [s[j], s[i]];
//         i++;
//         j--;
//     }
// };
// We use destructuring assignment to swap the characters at indices i and j.
// This is a concise way to swap two values in JS.