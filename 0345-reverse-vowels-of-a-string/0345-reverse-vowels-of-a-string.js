/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(str) {
    let s= str.split('')
    let vowels= {"a":"a", "e":"e", "i":"i","o":"o","u":"u", "A":"A","E":"E","I":"I","O":"O","U":"U"};
    let arrVow=[]
    for(let i=0; i<s.length; i++){
        if(vowels[s[i]]){
            arrVow.push(s[i])
        }
    }
    console.log(arrVow)
    let reversed= arrVow.reverse();
    console.log(reversed)
    let idx=0;
    for(let i=0; i<s.length; i++){
        if(vowels[s[i]]){
            s[i]=reversed[idx];
            idx++
        }
    }
    return s.join('')
};