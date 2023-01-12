/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let obj={};
    for(let i=0; i<order.length; i++){
        obj[order[i]]=i;
    }
   
    for(let j=0; j<words.length-1; j++){
        let curr= words[j];
        let next= words[j+1];
        console.log(curr,next)
        let shorterLength= Math.min(curr.length, next.length);
        console.log(shorterLength)
        for(let k=0; k<shorterLength; k++){
            console.log('k',k)
            console.log(curr[k], obj[curr[k]], next[k], obj[next[k]])
            if(obj[curr[k]]> obj[next[k]]) {
                return false
            }
            else if(obj[curr[k]]=== obj[next[k]]){
                if((k===shorterLength-1) &&(curr.length> next.length)) return false
                continue
            }else{
                break
            }
        }
         
    }
    return true
};

//['abc', 'aaa']
//current.length< next length
//compare current and next and check if current's word's current's letter is less indexWise.
//