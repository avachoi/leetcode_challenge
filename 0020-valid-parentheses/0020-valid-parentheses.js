/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   let stack=[];
    for(let i=0; i<s.length; i++){
        if((s[i]==='{')||(s[i]==='[')||(s[i]==='(')){
            stack.push(s[i])
        }else{
             if((s[i]==='}')&&(stack[stack.length-1]==='{')){
            stack.pop()
            }else if((s[i]===']')&&(stack[stack.length-     1]==='[')){
            stack.pop()
            }else if((s[i]===')')&&(stack[stack.length-1]==='(')){
            stack.pop()
            }else{
            return false
            }
        }
        
    }
   return stack.length===0
};

//input: string
//output: boolean

// edge cases

//queue
//store current opening
//check current closing
   //match -> pop off
   //not match -> return false

// {[()]}

// s = "()"
// queue=['[','{','(']

// '[{(]})'