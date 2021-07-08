// 45. Jump Game II
// Medium

// 4908

// 201

// Add to List

// Share
// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000

// The idea
// We know that every point is reachable, so we are only looking for the relationship between the maximum reach of each index and the number of jumps
// oldMax is the previous jump's maximum reach, if we are at the old max, that means no matter how we move, the next move will cost an extra jump, thus we increment jump, at the same time, 
// we update the oldMax to the current global max. This max, indicates the maximum reach we will have by having an extra jump.
var jump = function(nums) {
    let newMax = 0;
    let jump = 0;
    let oldMax = 0;
    for (let i=0;i<nums.length-1;i++) {
        newMax = Math.max(newMax, i+nums[i]);
        if (i == oldMax) {
            jump++;
            oldMax = newMax;
        }
    }
    return jump;
};