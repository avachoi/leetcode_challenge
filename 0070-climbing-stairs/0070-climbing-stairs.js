/**
 * @param {number} n
 * @return {number}
 */


var climbStairs = function(n) {
  if(n<=3) return n
    let prev1=2
    let prev2=3
    let curr=0
    for(let i=3; i<n; i++){
        curr=prev1+prev2;
        prev1=prev2;
        prev2=curr
    }
    return curr
    
};

// curr= prev1+ prev2