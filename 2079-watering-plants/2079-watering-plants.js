/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let steps=0;
    let can=capacity;
    for(let i=0; i<plants.length; i++){
        if(can>= plants[i]){
            steps+=1;
           
        }else{
            steps+=i*2+1;
            can=capacity
        }
         can-=plants[i]
    }
    return steps
};


//[2,2,3,3]
//       ^
// steps: 2
// can: 1

// if enough: 1++
// if no enough: 2+3: i*2+1    3+4 