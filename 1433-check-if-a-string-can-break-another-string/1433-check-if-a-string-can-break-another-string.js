/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
    let arr1= [...s1].sort()
    let arr2= [...s2].sort();
    let greater=''
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]===arr2[i]){
            continue
        }else if(arr1[i]>arr2[i]){
            if(greater===arr2){
                return false
            }
            greater=arr1
        }else{
            if(greater===arr1){
                return false
            }
            greater=arr2
        }
    }
    return true
};

// abc
// axy

// abe. acd

// leetcodee
// cdeeeelot
// eeiinrtvw

//sort each str
//compare each letter code see the consistency of comparison