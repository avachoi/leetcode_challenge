/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    
    let max=0
    let maxId=0;
    
    for(let i=0; i<logs.length; i++){
        let prev= logs[i-1]? logs[i-1][1]:0
        if(logs[i][1]-prev>max){
            maxId=logs[i][0];
            max=logs[i][1]-prev
        }else if(logs[i][1]-prev===max){
            maxId= Math.min(logs[i][0], maxId);
            max=logs[i][1]-prev
        }
    }
    return maxId
};

//keep logging max time and its id
//return the id of the max