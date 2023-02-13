/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj={};
    let res=[]
    for(let i=0; i<strs.length; i++){
        let sorted= [...strs[i]].sort().join('');
       
        if(obj[sorted]){
            obj[sorted].push(strs[i])
        }else{
            obj[sorted]=[strs[i]]
        }
    }
    for(let key in obj){
        res.push(obj[key]);
    }
    return res
};

//iterate strs and sort each str
//create obj and key: sorted, value: anagram strs