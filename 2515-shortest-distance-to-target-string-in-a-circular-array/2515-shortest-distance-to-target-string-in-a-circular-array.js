/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(w, target, startIndex) {
    let len= w.length
   let words= [...[...w],...w,...[...w]];
    console.log(words)
    let dist=[];
    for(let i=startIndex+len; i<words.length; i++){
        if(words[i]===target){
            dist.push(i-len-startIndex);
            break
        }
    }
    for(let i=startIndex+len; i>=0; i--){
        if(words[i]===target){
            console.log('found',i,words[i])
            dist.push(Math.abs(startIndex+len-i));
            break
        }
    }
    console.log('dist',dist)
    if(dist.length>0) return Math.min(...dist)
    return -1
};

//create 2 forloop for both direction
//find the shortest