/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lower= s.toLowerCase();
    let alphaN=''
    for(let i=0; i<lower.length; i++){
        if(lower[i]%1===0||((lower[i].charCodeAt()>96)&&(lower[i].charCodeAt()<123))){
            alphaN=alphaN.concat(lower[i])
        }
    }
    
    let chars=alphaN.split("").filter(el=>el!==" ");
    let reversed=[...chars].reverse()
    console.log(chars,reversed)
    console.log(chars.join(""),reversed.join(""))
    return chars.join("")=== reversed.join("")
};

//make it lowercase
//delete all not related chars 
//reverse string and compare