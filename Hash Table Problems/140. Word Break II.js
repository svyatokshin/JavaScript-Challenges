// 140. Word Break II
// Hard

// 3435

// 447

// Add to List

// Share
// Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// Output: ["cats and dog","cat sand dog"]
// Example 2:

// Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
// Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// Explanation: Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: []
 

// Constraints:

// 1 <= s.length <= 20
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 10
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

var wordBreak = function(s, wordDict) {
    /*
        1) create a hashmap and store words of dict by first
        letter
        2) iterate though the given string and if we found
        start letter in hashmap, we will get all the words in it
        and try to create a sentance starting from each of them
        3) for example, if we got c: [cat, cats] -> we take cat
        and see if this is a substring of the string, if it is,
        call recursion on the rest of the string, now the first letter is
        s -> check if we have any words starting from s
        4) add the path to an array and if the str is empty add to res and rturn
    */
    let dict = new Map();
    for (let word of wordDict) {
        if (!dict.has(word[0])) dict.set(word[0], []);
        dict.get(word[0]).push(word);
    }
    
    let sentences = [];
    function recurse(sentence, string) {
        if (string === '') {
            sentences.push(sentence.join(' '));
            return;
        }
        if (dict.has(string[0])) {
            let words = dict.get(string[0]);
            for (let word of words) {
                let len = word.length;
                let substring = string.substring(0, len);
                if (substring === word) {
                         sentence.push(word);
                         recurse([...sentence], string.substring(len));
                         sentence.pop();
                }
            }
        }
    }
    
    recurse([], s);
    return sentences;
};