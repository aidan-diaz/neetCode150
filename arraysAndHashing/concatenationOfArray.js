/* Concatenation of Array
Easy
Topics
Company Tags
You are given an integer array nums of length n. Create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Example 1:

Input: nums = [1,4,1,2]

Output: [1,4,1,2,1,4,1,2]
Example 2:

Input: nums = [22,21,20,1]

Output: [22,21,20,1,22,21,20,1] */

//MY SOLUTIONS

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        return nums.concat(nums)
    }
}


//two input arrs of ints
//return a new arr that concats the input arr twice
//if input is [1,2,3,4], output should be [1,2,3,4,1,2,3,4]
//can use concat method to combine arr with itself
//can iterate through twice, and add each element to new arr for all iterations

//SOLUTION 2

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const newArr = []
        for(let i = 0; i < nums.length; i++) {
            newArr.push(nums[i])
        }
        for(let i = 0; i < nums.length; i++) {
            newArr.push(nums[i])
        }
        return newArr        
    }
}