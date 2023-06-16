/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let extra= additionalRocks
    let arr= capacity.map((el,i)=>capacity[i]-rocks[i] )
    arr.sort((a,b)=>a-b);
    console.log(arr)
    let count=0
        for(let i=0; i<arr.length; i++){
            if(extra>=arr[i]){
                extra-=arr[i];
                count++;
                console.log(i)
            }
        }
    return count
};
    
//arr= [0,2,8]  100

//create an arry for the each diff [1,1,0,1]
//sort the array [0,1,1,1]
//while additional gets 0, substract each el
//subtract additional rocks in order, if el gets 0, count++
//return count