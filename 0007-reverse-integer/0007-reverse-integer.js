/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let neg=false;
    if(x<0){
        x*=-1;
        neg=true
    }
    let res= parseInt(x.toString().split("").reverse().join(""));
    if(neg){
        res*=-1
    }
    if((res<Math.pow(-2,31))||(res>Math.pow(2,31)-1)){return 0}
    return res
};
//check if its negative
   //yes, save it to true, and take only numbers
//make it string and reverse it and and make it number
//remove first zeros
//add negative sign if true
//if too big or too low, return 0