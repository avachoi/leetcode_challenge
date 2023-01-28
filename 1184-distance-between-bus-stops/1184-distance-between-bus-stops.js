/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let s=0, d=0;
    if(start < destination){
        s=start;
        d= destination
    }else{
        s=destination;
        d=start
    }
   let arr1= distance.slice(s, d);
    let arr2= [...distance]
    arr2.splice(s, d-s)
    console.log(arr1, arr2)
    let option1= arr1.reduce((prev, curr)=> prev+curr)
    let option2=arr2.reduce((prev, curr)=> prev+curr)
    console.log(option1, option2)
    return Math.min(option1, option2)
};

//[1,2,3,4]
//    0,1,2,3
// 0-3: d[0]+ d[1]+d[2] or d[3]
// 0-2: d[0]+d[1] or d[3]+ d[2]
// 0-1: d[0] or d[3]+d[2]+d[1]

// d[start]+...d[distination-1] or d[destination]+..d[distance.length-1]

// [3,6,7,2,9,10,7,16,11], 6, 2 ->9
//      S.       D

// [7,10,1,12,11,14,5,0] 7, 2 ->17
//       s            d
      
