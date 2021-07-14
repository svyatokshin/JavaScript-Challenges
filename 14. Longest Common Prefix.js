// 14. Longest Common Prefix
// Easy

// 4703

// 2340

// Add to List

// Share
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.



var longestCommonPrefix = function(strs) {
     if (!strs.length) return "";

     let longest = "";
     let firstWord = strs[0];

     for (let i = 0; i < firstWord.length; i++) {
         let char = firstWord[i];

         for (let j = 1; j < strs.length; j++) {
             let otherWord = strs[j]
             let otherChar = otherWord[i];
             if (char !== otherChar || !otherChar) return longest;
         }

         longest += char;
     }

     return longest;
};