/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let res=[];
    for(let i=0; i<grid.length-2; i++){
        let row=[]
        for(let j=0; j<grid.length-2; j++){
            let max= Math.max(grid[i][j],grid[i][j+1],grid[i][j+2],grid[i+1][j],grid[i+1][j+1],grid[i+1][j+2],grid[i+2][j],grid[i+2][j+1],grid[i+2][j+2]);
            row.push(max)
        }
        res.push(row)
    }
    return res
};

// [0,0], [0,1], [0,2], 
// [1,0], [1,1], [1,2],
// [2,0], [2,1], [2,2]

//loop column and rows
// look at first 3 column and first 3 rows and increment
//store max in each row



