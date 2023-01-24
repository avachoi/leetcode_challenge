/**
 * @param {string} s
 * @return {string}
 */

var reverseOnlyLetters = function(s) {
    let res= new Array(s.length);
    let alphabets=[]
    for(let i=0; i<s.length; i++){
        if(((s[i].charCodeAt() >=65)&&(s[i].charCodeAt() <=90))||((s[i].charCodeAt()>=97)&&(s[i].charCodeAt() <=122))){
            alphabets.push(s[i])
        }else{
            res[i]= s[i]
        }
    }
    let reversed= [...alphabets];
    let j=0;
    while(j<s.length){
        console.log(j)
        if(res[j]===undefined){
            res[j]= alphabets.pop()
        }
        j++
    }
    return res.join('')
};
//create new array and add non english letter at the same position
//store all english letter somewhere and reverse it.
//iterate reversed letters and push to it new array on the empty spots