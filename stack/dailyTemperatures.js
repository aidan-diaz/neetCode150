/* You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

Example 1:

Input: temperatures = [30,38,30,36,35,40,28]

Output: [1,4,1,2,1,0,0]
Example 2:

Input: temperatures = [22,21,20]

Output: [0,0,0]
Constraints:

1 <= temperatures.length <= 1000.
1 <= temperatures[i] <= 100 */

//MY SOLUTION (brute force)

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const results = []
        for(let i = 0; i < temperatures.length; i++) {
            let j = i + 1
            let daysToWarmer = 1
            while(j < temperatures.length) {
                if(temperatures[i] < temperatures[j]) {
                    break
                }
                j++
                daysToWarmer++
            }
            daysToWarmer = j === temperatures.length ? 0 : daysToWarmer
            results.push(daysToWarmer)
        }
        return results
    }
}

//BRUTE FORCE ATTEMPT
//input arr of ints (temperatures)
//return a result arr, where each element is how many days until warmer temp from current temp
//compare every combination to find the closest day with a higher temp than current
//push the amount of days until higher temp to results arr and repeat for all temps
//return results arr

//SOLUTION TO STUDY

class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const res = new Array(n).fill(0);

        for (let i = n - 2; i >= 0; i--) {
            let j = i + 1;
            while (j < n && temperatures[j] <= temperatures[i]) {
                if (res[j] === 0) {
                    j = n;
                    break;
                }
                j += res[j];
            }

            if (j < n) {
                res[i] = j - i;
            }
        }
        return res;
    }
}

//SOLUTION TO STUDY
//O(n) time and O(1) space
