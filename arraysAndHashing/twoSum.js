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

//SOLUTION 1

class Solution {

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

//input arr of integers and input num (target)
//return the indecies of the nums in the arr that combine to equal the target
//return the lower index first
//return the indecies in an arr
/*
Examples:
console.log(twoSum([3,4,5,6], 7), [0,1])
console.log(twoSum([4,5,6], 10), [0,2])
*/
//nested for loop
//compare first element to all other elements
//if first element plus another element equals target, return index of both elements in arr
//if not, move on to next element and compare it to rest


//SOLUTION 2

class Solution {

    twoSum(nums, target) {
        const map = {}
        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i]

            if(map[diff] !== undefined) {
                console.log([map[diff], i])
                return [map[diff], i]
            }
            map[nums[i]] = i
            console.log(map)
        }
        
    }

}

//input arr of integers and input num (target)
//return the indecies of the nums in the arr that combine to equal the target
//return the lower index first
//return the indecies in an arr
/*
Examples:
console.log(twoSum([3,4,5,6], 7), [0,1])
console.log(twoSum([4,5,6], 10), [0,2])
*/
//create hash map
//map value of current element in nums to its index
//check to see if diff between target and current element is in map
//if so, return first index of the diff and index of current num
//if not, add the num to the hashmap, with the current index as its value
//return these in an arr
