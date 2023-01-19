/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let n= num;
    while(n>9){
        let str= n.toString();
        let sum=0
        for(let i=0; i<str.length; i++){
            sum+=Number(str[i])
        }
    n=sum
    }
    return n
};

//if num.length === 1, return num
//while num is single digit,
    //num=> string, iterate the string and add up the numbers