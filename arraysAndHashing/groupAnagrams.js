/* Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters. */

//MY SOLUTION

class Solution {

    groupAnagrams(strs) {
        const map = {}
        for(const str of strs) {
            const sortedStr = str.split('').sort().join('')
            if(!map[sortedStr]) {
                map[sortedStr] = []
                map[sortedStr].push(str)
            } else {
                map[sortedStr].push(str)
            }
        }
        return Object.values(map)
    }

}


//input arr of strs
//return a 2d array, where anagrams of each other are grouped in the same arr
/*
Examples:
console.log( groupAnagrams(["act","pots","tops","cat","stop","hat"]), [["hat"],["act", "cat"],["stop", "pots", "tops"]] )
console.log( groupAnagrams(["x"]), [["x"]] )
console.log( groupAnagrams([""]), [[""]])
*/
//make an empty map
//if the sorted version of the current element is in the map, push current el to that key
//if not, make a new key and push the current el to that key's arr
//return the values of the map in an arr (will create a 2d arr)