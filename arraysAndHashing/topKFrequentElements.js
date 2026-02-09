/* Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.
Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]
Constraints:

1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums. */


//MY SOLUTION

class Solution {

    topKFrequent(nums, k) {
        const mapCount = {}
        for(const num of nums) {
            if(!mapCount[num]) {
                mapCount[num] = 1
            }else {
                mapCount[num] ++
            }
        }
        console.log(mapCount)
        const sorted = Array.from(new Set(nums.sort((a,b) => mapCount[b] - mapCount[a])))
        return sorted.slice(0, k)
    }

}

//input arr of nums, input integer (k)
//return the (k) most frequent nums in arr (return them in an arr)
/*
Examples:
console.log( topKFrequent([1,2,2,3,3,3], 2), [2,3] )
console.log( topKFrequent([7,7], 1),  [7])
*/
//count all the occurences in the input arr
//sort the nums arr by most frequent
//make a set to remove the duplicates
//turn the set back into an arr
//slice that arr from 0 to k and return it