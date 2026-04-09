/* Contains Duplicate
Easy
Topics
Company Tags
Hints
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false */

//MY SOLUTION

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const removedDuplicates = Array.from(new Set(nums))
        return nums.length !== removedDuplicates.length
    }
}


//input arr of nums
//return true if a num appears more than once
//return false if all unique
//nums = [1, 2, 3, 3, 3] --> true
//nums = [1, 2, 3, 4, 5, 6] --> false
//create a second arr that contains one of each num from the original arr
//if the arrs are the same length, then there are no duplicates (false)
//otherwise, duplicates (true)

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {}
        for(const num of nums) {
            if(!map[num]) {
                map[num] = 1
            }else {
                return true
            }
        }
        return false
    }
}


//create a map
//if a num does not exist in map, add it to map
//if num already exists in map, return true, bc duplicate
//if exit loop, then no duplicates, false
