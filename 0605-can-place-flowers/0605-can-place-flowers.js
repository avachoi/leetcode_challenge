/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    flowerbed.unshift(0);
    flowerbed.push(0)
    let count=0;
    for(let i=1; i<flowerbed.length-1; i++){
        if((flowerbed[i-1]===0)&&(flowerbed[i+1]===0)&&(flowerbed[i]===0)){
            count++;
            i++;
        }
        console.log(i,count)
    }
    
    return count>=n
};
//iterate through arr check curr is between 0
   //yes, increment, 2++
//check if n===count