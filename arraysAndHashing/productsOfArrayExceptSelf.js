/* Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in 
O
(
n
)
O(n) time without using the division operation?

Example 1:

Input: nums = [1,2,4,6]

Output: [48,24,12,8]
Example 2:

Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]
Constraints:

2 <= nums.length <= 1000
-20 <= nums[i] <= 20 */

//MY SOLUTION

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const productArr = []
        for(let i = 0; i < nums.length; i++) {
            let product = 1
            const filtered = nums.filter((num, index) => index != i)
            filtered.forEach(num => product *= num)
            productArr.push(product)
        }
        return productArr
    }
}


//input array of nums
//return an arr of nums where arr[i] is product of all nums in originalArr except originalArr[i]
//brute force
//iterate through arr
//for each iteration, multiply all nums in arr except current num
//push product to solution arr

//SOLUTION TO STUDY

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let productArr = []
        let start = 1

        for(let i = 0; i < nums.length; i++) {
            productArr.push(start)
            start = start * nums[i]
        }
        console.log(productArr)
        let start2 = 1

        for(let i = nums.length - 1; i >= 0; i--) {
            productArr[i] = start2 * productArr[i]
            start2 = start2 * nums[i]
        }
        console.log(productArr)
        return productArr
    }
}
