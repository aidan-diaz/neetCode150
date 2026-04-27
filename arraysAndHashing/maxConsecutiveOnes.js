/* You are given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:

Input: nums = [1,1,0,1,1,1]

Output: 3

Example 2:

Input: nums = [1,0,1,1,0,1]

Output: 2
Constraints:

1 <= nums.length <= 100,000
nums[i] is either 0 or 1. */

//MY SOLUTIONS

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let left = 0
        let right = 0
        let consecutive = 0
        let greatestConsec = 0

        while(right < nums.length) {
            if(nums[right] == 1) {
                consecutive++
                console.log(consecutive)
                right++
            }else {
                greatestConsec = Math.max(greatestConsec, consecutive)
                consecutive = 0
                right++
                left = right
            }
        }
        return Math.max(greatestConsec, consecutive)
    }
}


//input arr of nums
//return largest num of consecutive 1's
//Input: nums = [1,1,0,1,1,1] -> Output: 3
//two pointer
//make a counter, for each consec 1, add one to counter
//if 0, update pointers
//return largest num of consecutive

//SOLUTION 2

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0
        let count = 0
        for(const num of nums) {
            if(num == 1) {
                count++
                max = Math.max(max, count)
            }else {
                count = 0
                max = Math.max(max, count)
            }
        }
        return max
    }
}