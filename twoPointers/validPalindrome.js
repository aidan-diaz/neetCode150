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

//SOLUTION 1
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase()
        let filteredStr = ''
        for(let i = 0; i < s.length; i++) {
            const code = s.charCodeAt(i)
            if((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
                filteredStr += s[i]
            }
        }
        console.log(filteredStr)
        return filteredStr === filteredStr.split('').reverse().join('')
    }
}
//97 --> a
//122 --> z
//48 --> 0
//57 --> 9

//input str of letters (can be uppercase or lowercase) and nums
//return true if the string is the same forward and backwards
//return false if it is not the same both ways

//write the string backwards and save the backwards string
//compare the string to the backwards string
//make sure the strings are the same case when comparing
//remove any non-alphanumeric characters before comparing


//SOLUTION 2
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = filterStr(s)
        let left = 0
        let right = str.length - 1
        
        while(left < right) {
            if(str[left] !== str[right]) {
                return false
            }
            left++
            right--
        }
        return true
    }
}


function filterStr(str) {
    const alphaNumeric =  'abcdefghijklmnopqrstuvwxyz0123456789'
    let filteredStr = ''
    for(let i = 0; i < str.length; i++) {
        let currentChar = str[i].toLowerCase()
        if(alphaNumeric.indexOf(currentChar) !== -1) {
            filteredStr += currentChar
        }
    }
    return filteredStr
}
//two pointer attempt
//still need to define what an alphanumeric char is for the pointers to work