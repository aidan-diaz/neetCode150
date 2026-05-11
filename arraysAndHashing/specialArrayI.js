/* An array is considered special if the parity of every pair of adjacent elements is different. In other words, one element in each pair must be even, and the other must be odd.

You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.

Example 1:

Input: nums = [1]

Output: true
Explanation: There is only one element. So the answer is true.


Example 2:

Input: nums = [2,1,4]

Output: true
Explanation: There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

Example 3:

Input: nums = [4,3,1,6]

Output: false
Explanation: nums[1] and nums[2] are both odd. So the answer is false.

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100 */

//MY SOLUTION

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        let curr = nums[0] % 2 === 0
        console.log(curr)

        for(let i = 1; i < nums.length; i++) {
            if(nums[i] % 2 === 0 && curr == false) {
                curr = true
            }else if(nums[i] % 2 !== 0 && curr == true) {
                curr = false
            } else {
                return false
            }
        }
        return true
    }
}


//input arr of nums
//return a boolean
//true if every adjacent num is the opposite of previous
    //if first one is even, next one has to be odd, then even, etc.
//false otherwise
//Input: nums = [2,1,4] -> Output: true
//Input: nums = [4,3,1,6] -> Output: false
//have a curr variable that can be set to true or false
//if next value is opposite of curr, update curr and continue
//otherwise return false
//return true at end if never stopped