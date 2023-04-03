/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let obj={};
    let alpha= ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a'];
    let res=''
    for(let i=0; i<key.length; i++){
        if(key[i]===' '){
            continue
        }else if(!obj[key[i]]){
            obj[key[i]]= alpha.pop()
        }
    }
    for(let i=0; i<message.length; i++){
        if(message[i]===' '){
            res+=' '
        }else if(obj[message[i]]){
            res+=obj[message[i]]
        }
    }
    return res
};

// create obj for seen
// iterate key and and add new pair(letter+ alphabet) to new obj if not seen
// iterate message find the letter of message in new obj and push its value to res arr
