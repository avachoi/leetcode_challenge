/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let res=[];
    let i=0;
    let curr=1
    let obj={};
    arr.forEach(n=> obj[n]= 1)
    while(i<Infinity){
        if(!obj[curr]){
            res.push(curr);
        }
        curr++;
        i++;
        if(res.length===k){
            return res[res.length-1]
        }
        console.log(res, curr)
    }
    return 'not found'
};


//[2,3,4,7,11]
// i
//curr=1
//for loop 1000times
//   push to res missting integer,
//.  when missing.length===k, return missing's last integer