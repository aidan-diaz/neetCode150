/* You are given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:

Input: s = "neetcodeislove"

Output: 0
Explanation: The character 'n' at index 0 is the first character that does not occur at any other index.

Example 2:

Input: s = "neetcodeneet"

Output: 4
Example 3:

Input: s = "baab"

Output: -1
Constraints:

1 <= s.length <= 1,00,000
s consists of only lowercase English letters. */

//MY SOLUTION

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        for(let i = 0; i < s.length; i++) {
            if( s.indexOf(s[i]) === s.lastIndexOf(s[i]) ) {
                return i
            }
        }
        return -1
    }
}

//input str
//return index of first char that does not appear again
//Input: s = "neetcodeislove" -> Output: 0
//Input: s = "neetcodeneet" -> Output: 4
//check each str char
//if the first index of the char is the same as the last, return that index
//otherwise return -1