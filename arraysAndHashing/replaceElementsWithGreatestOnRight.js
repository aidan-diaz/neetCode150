/* You are given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:

Input: arr = [2,4,5,3,1,2]

Output: [5,5,3,2,2,-1]
Example 2:

Input: arr = [3,3]

Output: [3,-1] */

//MY SOLUTIONS

class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const newArr = []
        for(let i = 0; i < arr.length; i++) {
            let greatest = -Infinity
            for(let j = i + 1; j < arr.length; j++) {
                greatest = Math.max(greatest, arr[j])
            }
            newArr.push(greatest != -Infinity ? greatest : -1)
        }
        return newArr
    }
}


//input arr of ints
//return a new arr, where each el is replaced with greatest element of all to right. last el becomes -1
//Input: arr = [2,4,5,3,1,2] -> Output: [5,5,3,2,2,-1]
//nested for loop
//look at every num to right of current num
//create a greatest variable and set to 0 by default
//if num is greater than greatest, update
//after iteration, update current num to be greatest num
//make sure last num becomes -1
//return new arr

//SOLUTION 2

class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let left = 0
        let right = left + 1
        const newArr = []
        let greatest = -Infinity
        while(left < arr.length - 1) {
            console.log(arr[right])
            greatest = Math.max(greatest, arr[right])
            right++

            if(right > arr.length - 1) {
                newArr.push(greatest)
                greatest = -Infinity
                left++
                right = left + 1
            }
        }
        newArr.push(-1)
        return newArr
    }
}


//two pointer approach