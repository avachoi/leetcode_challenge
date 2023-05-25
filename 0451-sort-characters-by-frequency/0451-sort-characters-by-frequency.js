/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
   let obj={};
    for(let i=0; i<s.length; i++){
        if(obj[s[i]]){
            obj[s[i]]=obj[s[i]]+s[i]
        }else{
            obj[s[i]]= s[i]
        }
    }
    let sorted= Object.values(obj).sort((a,b)=>b.length-a.length);
    return sorted.join('')
    
};

//create obj for each cha {'t':'t', 'r':'r','e':'ee'}
//collect values: ['t','r','ee']
//sort ['ee','t', 'r'];
//join


// let obj={};
    // for(let i=0; i<s.length; i++){
    //     if(obj[s[i]]){
    //         obj[s[i]]++
    //     }else{
    //         obj[s[i]]=1
    //     }
    // }
    // let freq= Object.values(obj).sort((a,b)=>b-a)
    // console.log(obj, freq)
    // let res='';
    // for(let i=0; i<freq.length; i++){
    //     let subS='';
    //     let num=freq[i];
    //     for(let j=0; j<num; j++){
    //         subS+=
    //     }
    // }
//make an obj for freq  {'t':1, 'r':1, 'e':2}
//sort value [2,1,1];
//iterate sorted and find it from obj and save it to res
