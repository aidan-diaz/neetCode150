/* You are given an array of integers stones where stones[i] represents the weight of the ith stone.

We want to run a simulation on the stones as follows:

At each step we choose the two heaviest stones, with weight x and y and smash them togethers
If x == y, both stones are destroyed
If x < y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
Continue the simulation until there is no more than one stone remaining.

Return the weight of the last remaining stone or return 0 if none remain.

Example 1:

Input: stones = [2,3,6,2,4]

Output: 1
Explanation:
We smash 6 and 4 and are left with a 2, so the array becomes [2,3,2,2].
We smash 3 and 2 and are left with a 1, so the array becomes [1,2,2].
We smash 2 and 2, so the array becomes [1].

Example 2:

Input: stones = [1,2]

Output: 1
Constraints:

1 <= stones.length <= 20
1 <= stones[i] <= 100 */

//MY SOLUTION

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while(stones.length > 1) {
            const sorted = stones.sort((a, b) => a - b)
            console.log(sorted)
            const y = stones.pop()
            const x = stones.pop()
            console.log(y, x)
            if(x < y) {
                stones.push(y - x)
            }
        }
        return stones.length ? stones[0] : 0
    }
}


//SOLUTION TO STUDY

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        stones.sort((a, b) => a - b);
        let n = stones.length;

        while (n > 1) {
            let cur = stones.pop() - stones.pop();
            n -= 2;
            if (cur > 0) {
                let l = 0,
                    r = n;
                while (l < r) {
                    let mid = Math.floor((l + r) / 2);
                    if (stones[mid] < cur) {
                        l = mid + 1;
                    } else {
                        r = mid;
                    }
                }
                let pos = l;
                n++;
                stones.push(0);
                for (let i = n - 1; i > pos; i--) {
                    stones[i] = stones[i - 1];
                }
                stones[pos] = cur;
            }
        }
        return n > 0 ? stones[0] : 0;
    }
}