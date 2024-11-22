/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let set= new Set();
    let x=0;
    let y=0;
    set.add(`${x},${y}`)
    console.log(set)
    for(let i=0; i<path.length; i++){
        dir=path[i]
        if(dir==="N"){
            y+=1
        }else if(dir==="S"){
            y-=1
        }else if(dir==="E"){
            x+=1
        }else{
            x-=1
        }
        if(set.has(`${x},${y}`)) return true;
        set.add(`${x},${y}`)
    }
    
    return false
};
//use set
// `${x},${y}`
//N y+1. S x+1
//check if str is in set

