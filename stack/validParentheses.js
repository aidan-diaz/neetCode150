/* You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:

Input: s = "[]"

Output: true
Example 2:

Input: s = "([{}])"

Output: true
Example 3:

Input: s = "[(])"

Output: false
Explanation: The brackets are not closed in the correct order.

Constraints:

1 <= s.length <= 1000 */

//MY SOLUTION
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        while( s.includes('()') || s.includes('{}') || s.includes('[]') ) {
            s = s.replace('()', '')
            s = s.replace('{}', '')
            s = s.replace('[]', '')
        }
        return s === ''
    }
}


//input str of paren chars
//return true if every open bracket is: 
    //closed by the same type of bracket
    //closed in correct order
    //every closed bracket has an opening bracket of the same type
//check the middle of the str for a closed pair
//if the closed pair is valid, replace it with empty str
//repeat this process until there are no more closed pairs
//if the str is now empty, it is valid. return true.
//otherwise return false

//SOLUTION TO STUDY
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const parenPairs = 
        {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        }

        for(let c of s) {
            if(parenPairs[c]) {
                if(stack.length > 0 && stack[stack.length - 1] === parenPairs[c]) {
                    stack.pop()
                }else {
                    return false
                }
            }else {
                stack.push(c)
            }
        }
        return stack.length === 0
    }
}

//stack solution
//O(n) time and memory complexity