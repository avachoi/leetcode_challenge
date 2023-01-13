/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */




var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    
    let row=0;
    let obj2={}
    for(let i=0; i<rows*cols; i++){
        if((i>=cols)&&(i%cols===0)){
            row++
        }
        let cell= [row, i%cols]
        
        let distance= Math.abs(rCenter-cell[0])+ Math.abs(cCenter-cell[1]);
        obj2[distance]? obj2[distance].push(cell): obj2[distance]=[cell]
    }

    let distances2= Object.keys(obj2);
    let sorted= [...distances2].sort((a,b)=> Number(a)-Number(b))
    let res=[];
    for(let i=0; i<sorted.length; i++){
        
        if(obj2[sorted[i]].length>0){
            res=[...res, ...obj2[sorted[i]]];

        }
        
    }
    return res
};

//create matrix with cells.
//create obj with cell and distance
//sort distance
//push cell in order of distance