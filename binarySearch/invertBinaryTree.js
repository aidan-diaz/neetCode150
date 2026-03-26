/* You are given the root of a binary tree root. Invert the binary tree and return its root.

Example 1:



Input: root = [1,2,3,4,5,6,7]

Output: [1,3,2,7,6,5,4]
Example 2:



Input: root = [3,2,1]

Output: [3,1,2]
Example 3:

Input: root = []

Output: []
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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(root === null) return null

        console.log(root)

        let temp = root.left
        root.left = root.right
        root.right = temp

        this.invertTree(root.left)
        this.invertTree(root.right)

        return root
        
    }
}

//DFS
//swap children


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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null;
        const stack = [root];

        while (stack.length) {
            const node = stack.pop();

            [node.left, node.right] = [node.right, node.left];
            if (node.left) stack.push(node.left);
            if (node.right) stack.push(node.right);
        }
        return root;
    }
}