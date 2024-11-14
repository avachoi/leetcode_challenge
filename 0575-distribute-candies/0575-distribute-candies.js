/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let max= candyType.length/2;
    let types= new Set(candyType).size;
    return Math.min(max,types)
};

//2 3-> 2
//2 1->1