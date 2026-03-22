/*  */

//MY SOLUTION

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const nodes = []
        let cur = head
        while(cur) {
            nodes.push(cur)
            cur = cur.next
        }
        console.log(nodes)

        const idxToRemove = nodes.length - n
        if(idxToRemove === 0) {
            return head.next
        }

        nodes[idxToRemove - 1].next = nodes[idxToRemove].next
        return head
    }
}


//make each node its own arr element
//go to that arr and search for arr.length - n
//remove that node, and make previous one point to node after the removed node
//return head