/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let queue=[]
    let count=0
    for(let i=0; i<s.length; i++){
        if(s[i]==='('){
            queue.push('(')
        }else{
            if(queue[queue.length-1]==='('){
                queue.pop()
            }else{
                count++
            }
        }
    }
    count+=queue.length;
    return count
};