/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    let sorted= [...deck].sort((a,b)=>a-b);
    let res=[];
    res.push(sorted.pop())
    for(let i=0; i<deck.length-1; i++){
        res.unshift(res.pop());
                console.log(res)

        res.unshift(sorted.pop());
        console.log(res)
    }
    return res
};

// [17,13,11,2,3,5,7]
// 2,3,5,7,11,13,17
// //sort arr
// //iterate arr, res's last one to front
// //add max one to res's

// last one to front, add next one to front
// 17  
// 13,17
// 11,17,13
// 7,13,11,17
// 5,17,7,13,11
// 3,11,5,17,7,13
// 2,13,3,11,5,17,7
