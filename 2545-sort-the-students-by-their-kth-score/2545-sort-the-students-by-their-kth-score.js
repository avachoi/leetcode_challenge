/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    let scores= [];
    for(let i=0; i<score.length; i++){
        scores.push(score[i][k])
    }
    scores.sort((a,b)=> b-a);

    let res= [];
    score.forEach(s=> res.push(''));
    for(let i=0; i<score.length; i++){
        let targetScore= score[i][k];
        let rank= scores.indexOf(targetScore)
        res[rank]= [...score][i]
        
    }
    return res
};

//sort target e and store in new arr= [11,9,3]
//iterate score, create an obj and intof arr: Student's score {1: [10,6,9,1], 0: [7,5,11,2]};
//create arr with length of score
//iterate obj and push to res as int of res=== prop of obj