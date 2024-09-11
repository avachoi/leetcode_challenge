/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map= new Map();
    for(let i=0; i<s.length; i++){
        map.set(s[i], map.get(s[i])+1||1)
        
    }
    let unique=''
    for(let [key,value] of map){
        if(value===1){
            unique=key;
            break
        }
    }
    
    if (unique==="") return -1
    return s.indexOf(unique)
};

//return index

//map for check prev
//iterate through s
  //store curr's i in map 

//iterate through map 
//check first prop with value 1
   //yes, return i
//return -1