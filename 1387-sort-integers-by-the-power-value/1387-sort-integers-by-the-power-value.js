/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
   let map=new Map();
    for(let i=lo; i<=hi; i++){
        let steps=0;
        let x=i;
        while(x>1){
            if(x%2===0){
                x=x/2
            }else{
               x=3*x+1 
            }
            steps++
        }
        
        map.set(i,steps)
    }
    //console.log(map)
    let sorted= [...map.values()].sort((a,b)=>a-b); //[3,6,14,16,19]
    //console.log(sorted)
    let sortedInterval=0;
    for(let i=0; i<k; i++){
        for(let [key,value] of map){
            if(value=== sorted[i]){
                sortedInterval= key;
                map.set(key,-1)
                //map.delete(key);
                break;
                //map[key]=infinity;
            }
        }
       
        //console.log('sortedInterval',sortedInterval)
        //console.log('map',map)
    }
    //console.log(map)
    return sortedInterval
    
};

// [7, 8, 9, 10, 11]
// [16, 3, 19, 6, 14]
// {7:16, 8:3, 9:19, 10:6, 11:14}

// sort= 3,6,14,16,19
//       [8,10,11,7,9]

[12,13,17,11,14,15]
//create array of the interval
//iterate interval and find the power of each of it by using while
    //store each num and its power to an obj
//array of values
//find kth num