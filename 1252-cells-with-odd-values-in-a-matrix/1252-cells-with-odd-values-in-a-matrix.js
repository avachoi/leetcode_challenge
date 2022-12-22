/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
   let matrix= new Array(m).fill(0).map(item=> new Array(n).fill(0));
    let count=0;
    for(let i=0; i<indices.length; i++){
        let r= indices[i][0];  //[0,1]
        let c= indices[i][1];
        for(let j=0; j<n; j++){ //fill up target row
            matrix[r][j]+=1;
            if(matrix[r][j]%2!==0) {
                count++
            }else{
                count--
            }
        }
       for(let k=0; k<m; k++){  //fill up target column
            matrix[k][c]+=1;
           if(matrix[k][c]%2!==0){
               count++
           }else{
               count--
           }
        }
    }
    return count
};

 

//create matrix
//iterate indices
    //filling up target row(iterate n)
         //fill up target row of matrix(indices[0], n[i])
         
    //filling uup target column(iterate m)
         //fill up tartet colum of matrix(m, indices[1])