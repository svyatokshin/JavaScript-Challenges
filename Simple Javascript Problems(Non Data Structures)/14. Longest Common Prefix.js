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

// Build up the longest common prefix.
// At each idx, compare the char of the first word with char of each of the other words.
// If at an idx, chars are non-matching, immediately return the LCP.
// If at an idx, the char is out of bounds, we can also immediately return the LCP. The intuition here is the LCP can only be as long as the shortest word.
// If all words have a matching char, append it to the longest common prefix.
// Time --- O(m*n) Where n is the number of strings, and m is the length of the first string.
// Space -- O(1)
