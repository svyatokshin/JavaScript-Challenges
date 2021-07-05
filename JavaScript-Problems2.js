// 13. Roman to Integer
// Easy

// 884

// 76

// Add to List

// Share
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Example 2:

// Input: s = "IV"
// Output: 4
// Example 3:

// Input: s = "IX"
// Output: 9
// Example 4:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.




var romanToInt = function(s) {
    var table = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let sum = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
		// process corner cases like 'IV', 'XL' and so on
        if (
            (s[i - 1] === 'I' && (s[i] === 'V' || s[i] === 'X')) ||
            (s[i - 1] === 'X' && (s[i] === 'L' || s[i] === 'C')) ||
            (s[i - 1] === 'C' && (s[i] === 'D' || s[i] === 'M'))
        ) {
			// substract value if it's corner case and add to sum
            sum += table[s[i]] - table[s[i - 1]];
            i--;
        } else {
            sum += table[s[i]];
        }
    }

    return sum;
};

// 11. Container With Most Water
// Medium

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
// Example 3:

// Input: height = [4,3,2,1,4]
// Output: 16
// Example 4:

// Input: height = [1,2,1]
// Output: 2

// This question is asking us what's the largest area,
// regardless of the inside bars, only counting the outside ones

// output - area number
// input - heights array
// constraints - oN run time is probably best
// exceptions - one height array?

// basically find the highest product between length and shorter height

// we'll have two pointers, right and left index
// at each new index change, we'll calculate the shortest side and the area
// update the result based on the new area and the current result
// update the left or right index
// return the end result

var maxArea = function(height) {
    let [result, leftIndex, rightIndex] = [0, 0, height.length - 1];
    
    while (leftIndex < rightIndex) {
        // calculate the shortest side and the area
        let shortestSide = Math.min(height[leftIndex], height[rightIndex]);
        let area = (rightIndex - leftIndex) * shortestSide;
        
        // compare area and result to update the result 
        result = Math.max(area, result);

        // update the left or right index
        if (height[leftIndex] < height[rightIndex]) leftIndex++;
        else rightIndex--;
    }
    return result;
};