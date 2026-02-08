/* Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false */

//MY SOLUTIONS
//Solution 1

/*
class Solution {

    hasDuplicate(nums) {
        const removedDuplicatesArr = Array.from(new Set(nums))
        // console.log(nums.length)
        // console.log(removedDuplicatesArr.length)
        if(nums.length === removedDuplicatesArr.length) {
            return false
        }
        return true
    }

}

//input arr of nums
//return true if a num appears more than once in the arr
//return false otherwise
//Examples

// console.log(hasDuplicate([1,2,3,3]), true)
// console.log(hasDuplicate([1,2,3,4]), false)

//make the arr into a set
//compare the length of the set to the length of the original arr
//if lengths are not the same, then there are duplicates. return true
*/

//Solution 2
/*
class Solution {

    hasDuplicate(nums) {
        const map = {}
        for(const num of nums) {
            if(!map[num]) {
                map[num] = 1
            } else if(map[num]) {
                return true
            }
        }
        return false
    }

}

//input arr of nums
//return true if a num appears more than once in the arr
//return false otherwise
//Examples

// console.log(hasDuplicate([1,2,3,3]), true)
// console.log(hasDuplicate([1,2,3,4]), false)

//create an empty obj var
//if a num does not exist in obj, create it and give value
//if it does exist already, then it is a duplicate. return true
*/