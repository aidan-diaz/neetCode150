/* You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

Example 1:

Input: prices = [10,1,5,6,7,1]

Output: 6
Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

Example 2:

Input: prices = [10,8,7,5,2]

Output: 0
Explanation: No profitable transactions can be made, thus the max profit is 0.

Constraints:

1 <= prices.length <= 100
0 <= prices[i] <= 100 */

//SOLUTIONS

//SOLUTION1 (brute force)

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        for(let i = 0; i < prices.length; i++) {
            for(let j = i + 1; j < prices.length; j++) {
                if(prices[j] - prices[i] > profit) {
                    profit = prices[j] - prices[i]
                }
            }
        }
        return profit
    }
}

//BRUTE FORCE
//input arr of integers
//return biggest profit to be made (difference between buying price and selling price)
//nested loop
//iterate through every possible combination
//have a default profit price at 0
//if difference is greater than 0, update profit price
//return profit (can be 0)


//SOLUTION2

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let left = 0
        let right = 1
        while(right < prices.length) {
            if(prices[left] < prices[right]) {
                let profit = prices[right] - prices[left]
                maxProfit = Math.max(maxProfit, profit)
            }else {
                left = right
            }
            right++
        }
        return maxProfit
    }
}


//TWO POINTER SOLUTION
//Left is for buy, Right is for sell