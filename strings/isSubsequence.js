/* Is Subsequence
Easy
Topics
Company Tags
You are given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "node", t = "neetcode"

Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"

Output: false
Constraints:

0 <= s.length <= 100
0 <= t.length <= 10,000
s and t consist only of lowercase English letters.
Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 1,000,000,000, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code? */

//MY SOLUTION

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let left = 0
        let right = 0
        let count = 0
        while(right < t.length) {
            if(s[left] === t[right]) {
                count++
                left++
            }
            right++
        }
        return count === s.length
    }
}

//two input strs
//return true is all letters in s are in t (must be in correct order still)
//return false if not
//Input: s = "node", t = "neetcode" -> Output: true (would be false if s = "ndoe")
//Input: s = "axc", t = "ahbgdc" -> Output: false
//two pointer approach, l and r
//start l on first char of s, r on first char of right
//if l = r, add one to a count and move both over,
//if not, move r until equal
//return length == count