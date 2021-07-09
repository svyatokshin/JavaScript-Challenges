// 169. Majority Element
// Easy

// 5634

// 271

// Add to List

// Share
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
 var majorityElement = function(nums) {
    if (nums.length < 2){
        return nums[0]
    }
    let dict = {};
    for(i=0;i<nums.length;i++){
        if(!dict[nums[i]]){
            dict[nums[i]] = 1
        }
        else{
            dict[nums[i]]++
        }
    }
    let keys = Object.keys(dict);
    let vals = Object.values(dict);
    for(let i=0;i<vals.length;i++){
        if (vals[i] > (nums.length / 2)){
            return keys[i]
        }
    }
};