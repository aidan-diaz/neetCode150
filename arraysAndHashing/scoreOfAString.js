/* You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s.

Example 1:

Input: s = "code"

Output: 24
Explanation: The ASCII values of the characters in the given string are: 'c' = 99, 'o' = 111, 'd' = 100, and 'e' = 101. The score of s will be: |111 - 99| + |100 - 111| + |101 - 100|.

Example 2:

Input: s = "neetcode"

Output: 65
Constraints:

2 <= s.length <= 100
s is made up of lowercase English letters. */

//MY SOLUTION

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let sum = 0
        for(let i = 0; i < s.length - 1; i++) {
            const num1 = s.charCodeAt(i)
            const num2 = s.charCodeAt(i + 1)
            sum += Math.abs(num1 - num2)
        }
        return sum
    }
}

//input str
//return sum of abs diff between ASCII vals of chars
//Input: s = "code" --> Output: 24
//compare two adjacent chars at a time
//get abs val of diff
//add that to a sum var
//repeat until all pairs have been accounted for
//return sum