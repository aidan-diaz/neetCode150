/* Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
Constraints:

s and t consist of lowercase English letters. */

//MY SOLUTION
class Solution {
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }
        const sortedS = s.split('').sort()
        const sortedT = t.split('').sort()
        for(let i = 0; i < s.length; i++) {
            if(sortedS[i] !== sortedT[i]) {
                return false
            }
        }
        return true
    }

}


//two input strs of lowercase letters (CAN BE DIFFERENT LENGTHS)
//return true if both strs contain all of the exact same chars
//return false if contain different chars from each other
/*
Examples:
console.log(isAnagram("racecar", "carrace"), true)
console.log(isAnagram("jar", "jam"), false)
*/
//if strs are different lengths, return false immediately
//sort each str
//compare each index
//if index is same, keep going
//if different, return false
//return true if all are the same