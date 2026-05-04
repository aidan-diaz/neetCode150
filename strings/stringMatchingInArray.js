/* You are given an array of string words, return all strings in words that are a substring of another word. You can return the answer in any order.

Note: A substring is a contiguous non-empty sequence of characters within a string.

Example 1:

Input: words = ["mass","as","hero","superhero"]

Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero". ["hero","as"] is also a valid answer.

Example 2:

Input: words = ["neetcode","neeet","neet","code"]

Output: ["neet","code"]
Explanation: "neet" and "code" are substrings of "neetcode".

Example 3:

Input: words = ["blue","green","bu"]

Output: []
Explanation: No string of words is substring of another string.

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 30
words[i] contains only lowercase English letters.
All the strings of words are unique. */

//MY SOLUTION

class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const substrArr = []
        let i = 0
        while(i < words.length) {
            for(const word of words) {
                if(word.includes(words[i]) && word !== words[i]) {
                    substrArr.push(words[i])
                    break;
                }
            }
            i++
        }
        return substrArr
    }
}

//input arr of strs
//return all the strs that are substrs of other words in input arr (return them in new arr)
//Input: words = ["mass","as","hero","superhero"] -> Output: ["as","hero"]
//Input: words = ["blue","green","bu"] -> Output: []
//compare each word to all other words in input arr
//if current word is a substr of any other words, push it to a new arr
//repeat for all words
//return new arr