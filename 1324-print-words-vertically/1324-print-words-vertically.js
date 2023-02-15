/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    
    let res=[];
    let res2=[];
    let arr= s.split(' ');
    let empties=[]
    for(let i=0; i<arr.length; i++){
        empties.push(' ')
    }
    let maxLength=0;
    arr.forEach(word=> maxLength= Math.max(maxLength, word.length));
    for(let i=0; i<maxLength; i++){
        let subArr=[...empties]
        res.push(subArr)
    }

    for(let i=0; i<arr.length; i++){
        let word= arr[i];
        for(let j=0; j<word.length; j++){
            res[j][i]= word[j];
        }
    }
    for(let i=0; i<res.length; i++){
        let str= res[i].join('');
        
        res2.push(str.trimEnd())
    }
    return res2
};

