/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let files=[];
    let obj={};
    let res=[];
    
    for(let i=0; i<paths.length; i++){
        let parts= paths[i].split(' ')
        for(let j=1; j<parts.length; j++){
            let filePath= parts[0]+'/'+parts[j];
            files.push(filePath);
        }
    }
    console.log(files)
    for(let i=0; i<files.length; i++){
        let file= files[i]
        let direc= file.slice(0, file.indexOf('('))
        let name= file.slice(file.indexOf('(')+1, file.indexOf(')'))
        
        if(!obj[name]){
            obj[name]=[direc]
        }else{
            obj[name].push(direc)
        }
        
    }
   for(key in obj){
       if(obj[key].length>1){
           console.log('key')
           res.push(obj[key])
       }
   }
    
    return res
    
};

//make a new array of each file in correct format
//make an obj {file_name: integer};
//iterate new array and if it is in obj, push to res on integer of count

