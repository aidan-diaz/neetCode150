/* Given the root of a binary tree, return its depth.

The depth of a binary tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:



Input: root = [1,2,3,null,null,4]

Output: 3
Example 2:

Input: root = []

Output: 0
Constraints:

0 <= The number of nodes in the tree <= 100.
-100 <= Node.val <= 100 */

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
     * @return {number}
     */
    maxDepth(root) {
        if (root === null) {
            return 0;
        }

        return (
            1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
        );
    }
}

//if the left or right value in the current node exists, add one to the total depth
//repeat until no more values to look at


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
     * @return {number}
     */
    maxDepth(root) {
        const stack = [[root, 1]];
        let res = 0;

        while (stack.length > 0) {
            console.log(stack)
            const current = stack.pop();
            const node = current[0];
            const depth = current[1];

            if (node !== null) {
                res = Math.max(res, depth);
                stack.push([node.left, depth + 1]);
                stack.push([node.right, depth + 1]);
            }
        }
        return res;
    }
}