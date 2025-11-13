/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a,b)=> a[0]- b[0]);

    let merged = [];

    for(let [start, end] of intervals){
        if(!merged.length || merged[merged.length-1][1] < start){
            merged.push([start, end]);
        }else{
            merged[merged.length-1][1] = Math.max(merged[merged.length-1][1], end);
        }
    }
    return merged;
};