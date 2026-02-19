/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].

Example 2:

Input: nums = [0,1,1]

Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]

Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:

3 <= nums.length <= 1000
-10^5 <= nums[i] <= 10^5 */

//MY SOLUTION (brute force)

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const combinations = []
        const sortedNums = nums.sort((a, b) => a - b)
        for(let i = 0; i < sortedNums.length; i++) {
            if(i > 0 && sortedNums[i] === sortedNums[i - 1]) {
                continue
            }
            for(let j = i + 1; j < sortedNums.length; j++) {
                if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) {
                    continue
                }
                for(let k = j + 1; k < sortedNums.length; k++) {
                    if (k > j + 1 && sortedNums[k] === sortedNums[k - 1]) {
                        continue
                    }
                    if(sortedNums[i] + sortedNums[j] + sortedNums[k] === 0) {
                        combinations.push([sortedNums[i], sortedNums[j], sortedNums[k]])
                    }
                }
            }
        }
        console.log(combinations)
        return combinations
    }
}

//SOLUTION TO STUDY

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const combinations = []
        nums.sort((a, b) => a - b)
        for(let i = 0; i < nums.length; i++) {
            const index = i
            const value = nums[index]
            if(index > 0 && value === nums[index - 1]) continue
            let left = index + 1
            let right = nums.length - 1
            while(left < right) {
                let sum = value + nums[left] + nums[right]
                if(sum > 0) {
                    right--
                }else if(sum < 0) {
                    left++
                }else {
                    combinations.push([value, nums[left], nums[right]])
                    left++
                    while(nums[left] === nums[left - 1] && left < right) {
                        left++
                    }
                }
            }
        }
        return combinations
    }
}


//input arr of nums
//return all of the triplets from the arr that sum to 0 (the indicies must be unique)
//cannot return duplicate triplets
//return should group the triplets into their own arrs in a 2d arr
//sort the arr first

