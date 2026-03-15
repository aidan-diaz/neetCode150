/* You are given two integer arrays nums1 and nums2 of size m and n respectively, where each is sorted in ascending order. Return the median value among all elements of the two arrays.

Your solution must run in 
O
(
l
o
g
(
m
+
n
)
)
O(log(m+n)) time.

Example 1:

Input: nums1 = [1,2], nums2 = [3]

Output: 2.0
Explanation: Among [1, 2, 3] the median is 2.

Example 2:

Input: nums1 = [1,3], nums2 = [2,4]

Output: 2.5
Explanation: Among [1, 2, 3, 4] the median is (2 + 3) / 2 = 2.5.

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
-10^6 <= nums1[i], nums2[i] <= 10^6 */

//MY SOLUTION (brute force)

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const arr = nums1.concat(nums2).sort((a, b) => b - a)
        console.log(arr)
        if(arr.length % 2 !== 0) {
            return arr[Math.floor(arr.length / 2)]
        }else {
            return (arr[arr.length / 2] + arr[(arr.length / 2 ) - 1]) / 2
        }
    }
}
