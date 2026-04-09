/* Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

Example 2:

Input: nums = [4,5,6], target = 10

Output: [0,2]
Example 3:

Input: nums = [5,5], target = 10

Output: [0,1]
Constraints:

2 <= nums.length <= 1000
-10,000,000 <= nums[i] <= 10,000,000
-10,000,000 <= target <= 10,000,000
Only one valid answer exists. */

//MY SOLUTION

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                if(nums[i] + nums[j] === target) {
                    return [i, j]
                }
            }
        }
    }
}

//input arr of integers, target integer
//return the indecies of the elements that combine to equal target
//compare every element against each other
//if the two elements combine to make the target, return their indecies
//nums = [3,4,5,6], target = 7 --> [0,1]
//nums = [4,5,6], target = 10 --> [0,2]

//MY SOLUTION

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}
        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]
            if(map[diff] !== undefined) {
                return [map[diff], i]
            }
            map[nums[i]] = i
        }
    }
}


//create a map
//check and see if diff between target and current num is in map
//if it is, return diff index and current num index in arr
//if not, add the curr element to the map and continue