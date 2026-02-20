/* You are given an integer array heights where heights[i] represents the height of the 
i
t
h
i 
th
  bar.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.

Example 1:



Input: height = [1,7,2,5,4,7,3,6]

Output: 36
Example 2:

Input: height = [2,2,2]

Output: 4
Constraints:

2 <= height.length <= 1000
0 <= height[i] <= 1000 */

//MY SOLUTIONS

//SOLUTION 1

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        for(let i = 0; i < heights.length; i++) {
            for(let j = i + 1; j < heights.length; j++) {
                if(heights[i] > heights[j]) {
                    if(heights[j] * (j - i) > max) {
                        max = heights[j] * (j - i)
                    }
                }else if(heights[i] < heights[j]) {
                    if(heights[i] * (j - i) > max) {
                        max = heights[i] * (j - i)
                    }                    
                }else {
                    if(heights[i] * (j - i) > max) {
                        max = heights[j] * (j - i)
                    }
                }
            }
        }
        return max
    }
}


//BRUTE FORCE SOLUTION
//try every single left and right combination
//multiply lower pointer by distance between the two values (index difference)
//if greater than previous max possible water, update max
//return max

//SOLUTION 2

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        let left = 0
        let right = heights.length - 1
        while(left < right) {
            let area = Math.min(heights[left], heights[right]) * (right - left)
            console.log(area)
            if(area > max) {
                max = area
            }
            if(heights[left] < heights[right]) {
                left++
            }else {
                right--
            }
        }
        return max
    }
}

//input arr of integers, where each integer represents the height of a bar
//return the max amount of water that can be stored in a container
