// 56. Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104


var merge = function(intervals) {
    if (intervals.length == 0) return [];
    
    intervals.sort((a,b) => a[0] - b[0]);
    let stack = [];
    stack.push(intervals[0]);
    
    for (let i = 1; i < intervals.length; i++) {
        let prev = stack.pop();
        let cur = intervals[i];
        if (prev[1] >= cur[0]) {
            stack.push( [prev[0], Math.max(prev[1], cur[1])] );
        } else {
            stack.push(prev, cur);
        }
    }
    
    return stack;
    // Time Complexity: O(Nlog(N))
    // Space Complexity: O(N)
};