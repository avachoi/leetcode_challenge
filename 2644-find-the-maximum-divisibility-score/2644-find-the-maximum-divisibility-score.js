/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let n= [...nums];
    let div= [...new Set(divisors)].sort((a,b)=>a-b);
    let freq= new Array(div.length).fill(0);
    
    
    for(let i=0; i<div.length; i++){
        for(let j=0; j<n.length; j++){
            if(n[j]%div[i]===0){
                freq[i]++
            }
        }
    }
   
    let maxFreq= Math.max(...freq);
    let ind= freq.indexOf(maxFreq);
    return div[ind]
};