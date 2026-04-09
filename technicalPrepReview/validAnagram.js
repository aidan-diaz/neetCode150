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
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        s = s.split('').sort().join('')
        t = t.split('').sort().join('')
        return s === t
    }
}

//two input strs, s and t
//return true if the two strs contain the exact same chars
//return false otherwise
//strs will always be lowercase and English letters
//"stop", "pots" --> true
//"top", "pots" --> false
//put the strs in alphabetical order
//compare chars at same location in each str to each other
//if they are not the same, return false
//otherwise return true
//if strs are different lengths, immediately return false

//SOLUTION TO STUDY

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const sMap = {}
        const tMap = {}

        for(let i = 0; i < s.length; i++) {
            sMap[s[i]] = (sMap[s[i]] || 0) + 1
            tMap[t[i]] = (tMap[t[i]] || 0) + 1
        }

        for(const key in sMap) {
            if(sMap[key] !== tMap[key]) {
                return false
            }
        }
        return true
    }
}

//use a map to count frequencies
//if maps are identical, return true
//otherwise return false