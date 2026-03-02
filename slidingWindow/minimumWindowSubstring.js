/* Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".

You may assume that the correct output is always unique.

Example 1:

Input: s = "OUZODYXAZV", t = "XYZ"

Output: "YXAZ"
Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.

Example 2:

Input: s = "xyz", t = "xyz"

Output: "xyz"
Example 3:

Input: s = "x", t = "xy"

Output: ""
Constraints:

1 <= s.length <= 1000
1 <= t.length <= 1000
s and t consist of uppercase and lowercase English letters. */

//MY SOLUTION (Brute force)

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length) return ""
        if((s.length === 1 && t.length === 1) && (s !== t)) return ""

        const tArray = t.split('')
        let shortestSubStr = ""

        for(let i = 0; i <= s.length; i++) {
            for(let j = i + 1; j <= s.length; j++) {
                let substr = s.substring(i, j)

                let remaining = [...tArray]

                for(let char of substr) {
                    let index = remaining.indexOf(char)
                    if(index !== -1) {
                        remaining.splice(index, 1)
                    }
                }

                if(remaining.length === 0) {
                    if(shortestSubStr === "" || substr.length < shortestSubStr.length) {
                        shortestSubStr = substr
                    }
                }
            }
        }

        return shortestSubStr
    }
}

//BRUTE FORCE ATTEMPT

//two input strs, one long str and one target str
//return that smallest possible substr from the long str, that includes all chars in target str
//nested loop
//have a shortest substr variable
//if the current substr includes the chars from the target str, save it in the variable
//if there are other substrs that include all chars, compare to current one to see if shorter
//if shorter, make it the new substr
//return the shortest substr