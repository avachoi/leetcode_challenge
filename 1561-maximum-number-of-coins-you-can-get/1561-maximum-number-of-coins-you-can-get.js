/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let sorted= [...piles].sort((a,b)=>a-b);
    let triples= piles.length/3
    let trimmed= sorted.slice(triples);
    let sum=0
    for(let i=0; i<trimmed.length-1; i+=2 ){
        sum+=trimmed[i]
    }
    return sum
};

// [9,8,7,6,5,1,2,3,4]-3
// 1,2,3,4,5,6,7,8,9
// 1,8,9
// 2,6,7
// 3,4,5

// [2,4,1,2,7,8]-2
// 1,2,2,4,7,8
// 1,7,8
// 2,2,4

//sort arr
//skip n element
//add up every other el