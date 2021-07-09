// 104. Maximum Depth of Binary Tree
// Easy

// 4314

// 102

// Add to List

// Share
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
// Example 3:

// Input: root = []
// Output: 0
// Example 4:

// Input: root = [0]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @return {number}
 */

// we can use recursion to achieve the solution to this problem
// this is what a recursion solution would look like but it is not fast enough to my liking
var maxDepth = function(root){
    function helper(node){
        if(!node){
            return 0
        }
        let left = helper(node.left);
        let right = helper(node.right);
        return Math.max(left, right) + 1

    }
    return helper(root);
}