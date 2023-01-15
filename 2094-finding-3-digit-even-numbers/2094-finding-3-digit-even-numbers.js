/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let sorted= [...digits].sort((a,b)=>a-b);
    let min= sorted.find(n=> n>0)
    let max= Math.max(...digits);
    if(max===0)return []
    let obj= {};
    let res=[]
    digits.forEach(n=> obj[n]= (obj[n]||0)+1);
    let lowest= Number(min.toString()+'00')
    let highest= Number((max+1).toString()+'00');
    for(let i=lowest; i<highest; i+=2){
        let exist=true;
        let str= i.toString();
        let copied= {...obj}
        for(let j=0; j<3; j++){
            if(copied[str[j]]>0){
                copied[str[j]]--
            }else{
                exist=false;
                break
            }
        }
        exist&& res.push(i)
    }
    return res
};
//sort digits
//check lowerst and biggest
//create obj with digits
//iteration starts from number (first digit=lowest) to number(first digit= biggest+1)
   //check even numbers, create str with current even number and check obj if obj has all cha