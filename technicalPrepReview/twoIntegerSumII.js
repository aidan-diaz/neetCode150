/* Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.

Your solution must use 
O
(
1
)
O(1) additional space.

Example 1:

Input: numbers = [1,2,3,4], target = 3

Output: [1,2]
Explanation:
The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].

Constraints:

2 <= numbers.length <= 1000
-1000 <= numbers[i] <= 1000
-1000 <= target <= 1000 */

//MY SOLUTION

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for(let i = 0; i < numbers.length; i++) {
            for(let j = i + 1; j < numbers.length; j++) {
                if(numbers[i] + numbers[j] === target) {
                    return [i + 1, j + 1]
                }
            }
        }
    }
}


//input arr of integers, input target integer
//return the indecies of the integers that add up to sum target
//arr is 1-indexed
//numbers = [1,2,3,4], target = 3 --> [1,2]
//compare all indecies, if the elements add up to target, return the indecies (1 INDEXED)


//MY SOLUTION

class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0
        let right = numbers.length - 1
        while(left < right) {
            const currSum = numbers[left] + numbers[right]
            if(currSum > target) {
                right--
            }else if(currSum < target) {
                left++
            }
            if(currSum === target) {
                return [left + 1, right + 1]
            }
            
        }
        return []
    }
}


//two pointer
//left and right, left is beginning right is end
//run while pointers are not the same
//if a pointer is greater than the target, move it over until it's smallers
//if the elements at indecies equal target, then return them