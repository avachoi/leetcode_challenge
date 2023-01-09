/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    
    let diffs=[]
    for(let i=0; i<colors.length; i++){
        let left= colors[i];
        for(let j=i+1; j<colors.length; j++){
            let right= colors[j];
            if(left!== right){
                diffs.push(j-i)
            }
        }
    }
    
    return Math.max(...diffs)
};

