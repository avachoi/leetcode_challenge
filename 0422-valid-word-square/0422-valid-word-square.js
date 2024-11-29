/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function(words) {
    for(let i=0; i<words.length; i++){
        let word= words[i];
        let colW=""
        for(let j=0; j<word.length; j++){
            if(!words[j])break
            colW+=words[j][i]
        }
        if(word!==colW){
            return false
        }
    }
    return true
};
//use nested iteration
//each iteration, compare curr word with new word created with each letter positioned from each array.
//if arr!==arr return false

//["abc","b"]