/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum=0;
    let first=0;
    let last=mat.length-1
    let top=true
    for(let i=0; i<mat.length; i++){
        let row= mat[i]
            if(top){
                if(i<=row.length-1/2){
                sum+= row[first];
                row[first]=0
                sum+= row[last];
                first++;
                last--;
                }else{
                   top=false;
                    break
                }
            }else{
                if(row.length%2===0){
                    sum+= row[first];
                row[first]=0
                sum+= row[last];
                    first--;
                    last++
                }else{
                    first--;
                    last++;
                    sum+= row[first];
                row[first]=0
                sum+= row[last];
                }
            }
    }
    return sum
};

//iterate array and take first and last el
// change pointer first++, last--
//if first and last=== mat.length/2, first--, last++

//     length-1=2    length-1/2 >=i
//     half= 1
    
//     length-1=3    length-1/2 >=i
//     half=1
    
//     length-1=0    length-1/2
//     half=0