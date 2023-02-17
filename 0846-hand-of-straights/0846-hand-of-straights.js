/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    let obj={};
    for(let i=0; i<hand.length; i++){
        obj[hand[i]]= (obj[hand[i]]||0)+1
    }
    let keyArr= Object.keys(obj);
    console.log(obj)
   while(Object.keys(obj).length>0){
       let min= Number(keyArr[0]);
       for(let i=0; i<groupSize; i++){
           if(!obj[min+i]){
               console.log(min,min+i)
               return false
           }else{
               obj[min+i]--
           }
           if(obj[min+i]===0){
               delete obj[min+i];
               keyArr.shift()
           }
       }
       
   }
    console.log(obj, keyArr)
    return true
};



//create obj {1:1, 2:2, 3:2, 4:1, 6:1, 7:1, 8:1}
//create key array [1,2,3,4,6,7,8]

// while(obj has something){
//     find min and iterate groupSize, decrement obj min, min+1, min+2...
//        if(obj[min..]===0){delete}
//     when min+1... is undefined, return false
// }
//create count=3;

//iterate hand.length
  //find min (from keyArr) decrement from obj, shift keyArr, decrement count

//[1,2,2,3,3,4,6,7,8]

// [8,10,12]
// 3