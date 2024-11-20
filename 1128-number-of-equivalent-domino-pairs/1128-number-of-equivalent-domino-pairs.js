/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let obj={};
    let count=0;
    for(let i=0; i<dominoes.length; i++){
        let sorted= [...dominoes[i]].sort((a,b)=>a-b);
        if(obj[sorted]){
            count+=obj[sorted]
        }
        obj[sorted]=(obj[sorted]||0)+1;
    }
    console.log(obj)
    
    
    return count
};

//use obj
// iterate through dominoes sort each dominoes
//increment same domino properties in obj
//count if there are value greater than 1