/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let res=new Set()
    for(let i=0; i<words.length; i++){
        let curr= words[i];
        for(let j=0; j<words.length; j++){
            if((i!==j)&&(words[j].indexOf(curr))>-1){
                res.add(curr)
            }
        }
    }
    return [...res]
};
    
//brute force: use nested array
    //check if curr is another word's substring by using indexOf