/**
 * @param {number[][]} grid
 * @return {number}
 */
let findMax= (gr)=>{
    let maxes=[]
    for(let i=0; i<gr.length; i++){
        let row= gr[i];
        maxes.push(Math.max(...row))
    }
    return maxes
}

var maxIncreaseKeepingSkyline = function(grid) {
    let adding=0;
    let parMax=findMax(grid);
    
    let a= [...grid];
    let swap=Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
    let verMax= findMax(swap)
    
    for(let i=0; i<grid.length; i++){
        let row= grid[i];
        for(let j=0; j<row.length; j++){
            let curr= row[j];
           let lowerMax= Math.min(parMax[i], verMax[j])
           if(curr<lowerMax){
               adding+=lowerMax-curr
           }
        }
    }
    //console.log(parMax, verMax)
    return adding
};


//maxes=[ 8, 7, 9, 3 ] [ 9, 4, 8, 7 ]

// [[3,0,8,4],  5,4,0,3
//  [2,4,5,7],  5,0,2,0
//  [9,2,6,3],  0,2,2,4
//  [0,3,1,0]]  3,0,2,3

//among v & p, take the lower max and add the diff 
//iterate through each building, look at the max of current row and each row's current i,
//compare and find the lower max and find the diff from current el. 
//count++