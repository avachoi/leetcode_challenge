/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */


// var minMovesToSeat = function(seats, students) {
//     let sortedSeats= [...new Set(seats)].sort((a,b)=>a-b)
//     let setStudents= [...new Set(students)]
//     let count=0;
   
//     for(let i=0; i<setStudents.length; i++){
//         let student= setStudents[i];
//         for(let j=0; j<sortedSeats.length; j++){
//             let seat= sortedSeats[j]
//             if(student===seat){
//                 seat.splice(j,1)
//             }else if(seat>student){
                
//             }
            
//         }
//     }
//     return count
// };

//Set the seat and student
//sort seat and student
//loop the seat and add up the diff
//[2,6] [1,3,2,6]
//[1,3,5][2,7,4]
//if same? take it
//else if nomore? take last one
//else if seat is greater than student? if prev diff is less? take prev: take current

var minMovesToSeat = function(seats, students) {
    let sum = 0
    seats=seats.sort((a,b)=>a-b)    
    students=students.sort((a,b)=>a-b)
    console.log(seats, students)
    for(let i=0;i<seats.length;i++){
        sum+=Math.abs(seats[i]-students[i])
        console.log(sum)
    }
        
    return sum
};