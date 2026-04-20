/* You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

Return the integer that represents the evaluation of the expression.

The operands may be integers or the results of other operations.
The operators include '+', '-', '*', and '/'.
Assume that division between integers always truncates toward zero.
Example 1:

Input: tokens = ["1","2","+","3","*","4","-"]

Output: 5

Explanation: ((1 + 2) * 3) - 4 = 5
Constraints:

1 <= tokens.length <= 1000.
tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100]. */

//MY SOLUTION

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        for(const c of tokens) {
            if(c === '+') {
                stack.push(stack.pop() + stack.pop())
            }else if(c === '-') {
                const a = stack.pop()
                const b = stack.pop()
                stack.push(b - a)
            }else if(c === '*') {
                stack.push(stack.pop() * stack.pop())
            }else if(c === '/') {
                const a = stack.pop()
                const b = stack.pop()
                stack.push(Math.trunc(b / a))
            }else {
                stack.push(parseInt(c))
            }
        }
        return stack.pop()
    }
}
