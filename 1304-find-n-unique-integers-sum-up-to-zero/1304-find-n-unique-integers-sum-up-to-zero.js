/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res=[];
    n%2!==0 && res.push(0);
    for(let i=1; i<=n/2; i++){
        res.push(i, i*-1);
    }
    return res
};

//if odd, add 0
//add current value and -current value
    
//5-> [0, 1,-1,2,-2]
    //4-> [1,-1,2,-2]
