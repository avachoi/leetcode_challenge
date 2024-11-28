/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if(intervals.length<2) return true
    intervals.sort((a,b)=>a[0]-b[0]);
    console.log(intervals)
    let end= intervals[0][1];
    for(let i=1; i<intervals.length; i++){
        if(end >intervals[i][0]){
            return false
        }else{
            if(end <intervals[i][1]){
                end= intervals[i][1]
            }
        }
    }
    return true
};
//sort intervals by start time
//next start time is always later than previous start time
//so next start time is before curr end time=> overwrap
//end is first end

//[2,4],[5,20],[7,10] 