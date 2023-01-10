/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
   let sorted= [...salary].sort((a,b)=>a-b);
   sorted.pop();
    sorted.shift();
    
    let avg= sorted.reduce((acc, curr)=> acc+ curr,0)/(salary.length-2)
    
    return avg.toFixed(5)
};

//sort salary andd pop and shift
//find average
//add 5decimals