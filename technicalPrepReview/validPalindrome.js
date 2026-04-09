/* Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true
Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

Example 2:

Input: s = "tab a cat"

Output: false
Explanation: "tabacat" is not a palindrome.

Constraints:

1 <= s.length <= 1000
s is made up of only printable ASCII characters. */

//MY SOLUTION

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    cleanStr(s) {
        const validChars = 'abcdefghijklmnopqrstuvwxyz0123456789'
        s = s.toLowerCase()
        let cleanedStr = ''
        for(let i = 0; i < s.length; i++) {
            if(validChars.includes(s[i])) {
                cleanedStr += s[i]
            }
        }
        console.log(cleanedStr)
        return cleanedStr
    }

    isPalindrome(s) {
        const str = this.cleanStr(s)
        console.log(str, str.split('').reverse().join(''))
        return str === str.split('').reverse().join('')
    }
}

//input str s
//return true if str is palindrome (same forward and back)
//ignores all alphanumeric nums, case insensitive
//clean the str (remove all non alph chars)
//reverse the str
//compare cleaned to reversed
//return boolean