/* Given a binary tree, return true if it is height-balanced and false otherwise.

A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:



Input: root = [1,2,3,null,null,4]

Output: true
Example 2:



Input: root = [1,2,3,null,null,4,null,5]

Output: false
Example 3:

Input: root = []

Output: true
Constraints:

The number of nodes in the tree is in the range [0, 1000].
-1000 <= Node.val <= 1000 */

//MY SOLUTION

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if(root === null) return true

        let leftHeight = this.height(root.left)
        let rightHeight = this.height(root.right)

        if(Math.abs(leftHeight - rightHeight) > 1) return false

        return this.isBalanced(root.left) && this.isBalanced(root.right)

    }

    height(root) {

        if(!root) return 0

        return (
            1 + Math.max(this.height(root.left), this.height(root.right))
        )
    }
}


//SOLUTION TO STUDY

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        return this.dfs(root)[0] === 1;
    }

    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    dfs(root) {
        if (!root) {
            return [1, 0];
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        const balanced =
            left[0] === 1 &&
            right[0] === 1 &&
            Math.abs(left[1] - right[1]) <= 1;
        const height = 1 + Math.max(left[1], right[1]);

        return [balanced ? 1 : 0, height];
    }
}