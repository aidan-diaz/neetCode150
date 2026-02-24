/* Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = "zxyzxyz"

Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:

Input: s = "xxxx"

Output: 1
Constraints:

0 <= s.length <= 1000
s may consist of printable ASCII characters. */

//MY SOLUTIONS

//SOLUTION1 (brute force)
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 1) return 1
        let left = 0
        let right = 1
        let longestStr = ''
        let currentStr = s[left]
        while(right < s.length) {
            if( !currentStr.includes(s[right]) ) {
                currentStr += s[right]
                right++
                if(currentStr.length > longestStr.length) {
                    longestStr = currentStr
                }                
            }else {
                if(currentStr.length > longestStr.length) {
                    longestStr = currentStr
                }
                left++
                right = left + 1
                currentStr = s[left]
            }
        }
        return longestStr.length
    }
}


//input string of characters
//return longest possible str without duplicate chars
//use pointer technique
//one pointer far left, one directly to the right of it
//if the chars are not the same, add them to the str and keep moving the right pointer
//if they are the same, move the left pointer to where right is, and move the right pointer to the right 1
//repeat process until longest str is formed
//return length of longest str

//SOLUTION2
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set()
        let left = 0
        let longestSubStr = 0
        for(const right in s) {
            while(charSet.has(s[right])) {
                charSet.delete(s[left])
                left++
            }
            charSet.add(s[right])
            longestSubStr = Math.max(longestSubStr, right - left + 1)
        }
        return longestSubStr
    }
}


//check all substrs for duplicate
//can use a set to check duplicates
//sliding window technique, once there is a duplicate, keep removing farthest left char until no dups
//update longestSubStr if necessary
//return longestSubStr
