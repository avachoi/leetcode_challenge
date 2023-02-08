/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    let obj={'a':0, 'b':1, 'c':2, 'd':3, 'e':4};
    for(let i=0; i<distance.length; i++){
        let cha= String.fromCharCode(97+i);
        
        if(s.indexOf(cha)<0)continue
        let dis= s.lastIndexOf(cha)-s.indexOf(cha)-1;
        if(dis!==distance[i])return false
        console.log(cha,dis)
    }
    return true
};
    
//iterate distance
//check if num is valid for the two same letters
    //no-> return false