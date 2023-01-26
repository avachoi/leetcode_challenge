/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let res='';
    let j=0;
    for(let i=0; i<s.length; i++){
        if(i%(2*k)===0){
            let chars= s.slice(i, i+k);
            console.log(chars)
        let reversed= [...chars].reverse().join('');
        res+=reversed;
            i+=(k-1);
            
        }else{
            res+=s[i]
            j=i
        }
        
    }
    return res
};

//iterate s
   //reverse first k chars and skep k chars