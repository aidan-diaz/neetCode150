/* You are given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "aa", magazine = "aab"

Output: true
Example 2:

Input: ransomNote = "aa", magazine = "ab"

Output: false
Constraints:

1 <= ransomNote.length, magazine.length <= 100,000
ransomNote and magazine consist of lowercase English letters. */

//MY SOLUTION

class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const noteMap = {}
        const magMap = {}

        for(const char of ransomNote) {
            if(!noteMap[char]) {
                noteMap[char] = 1
            } else {
                noteMap[char]++
            }
        }

        for(const char of magazine) {
            if(!magMap[char]) {
                magMap[char] = 1
            } else {
                magMap[char]++
            }
        }

        for(const char in noteMap) {
            if(!magMap[char]) return false
            if(magMap[char] < noteMap[char]) {
                return false
            }
        }
        return true
    }
}


//two input strs of chars
//return true if magazine str has letters needed to make ransomNote str
//return false otherwise
//Input: ransomNote = "aa", magazine = "aab" -> Output: true
//Input: ransomNote = "aa", magazine = "ab" -> Output: false
//hashmap
//count each instance of letters in strs (one map for each str)
//check to see that letter count in magazine is >= count in ransomNote
//if less than, return false
//if all are >=, return true