/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res='';
    for(let i=0; i<strs[0].length; i++){
        let curr=strs[0][i]
        for(let j=1; j<strs.length; j++){
            if(curr===strs[j][i]){
                continue
            }else{
                return res
            }
            
        }
        res+=curr
    }
    return res
};

//iterate through strs[0]
//check other str's curr character = strs[0][i]
//yes, concatenate to res str
//no, return res str
