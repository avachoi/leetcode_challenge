/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let count=0;
    for(let i=0; i<points.length-1; i++){
        let xDiff=Math.abs(points[i+1][0]-points[i][0]);
        let yDiff= Math.abs(points[i+1][1]-points[i][1]);
        count+=Math.max(xDiff, yDiff)
    }
    return count
};

//find max of diff x2-x1, y2-y1