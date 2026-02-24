/* You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

Example 1:

Input: s = "XYYX", k = 2

Output: 4
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

Example 2:

Input: s = "AAABABB", k = 1

Output: 5
Constraints:

1 <= s.length <= 1000
0 <= k <= s.length */

//MY SOLUTION
class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longestSubStr = 0
        for(let i = 0; i < s.length; i++) {
            let charCount = new Map()
            let maxFrequency = 0
            for(let j = i; j < s.length; j++) {
                charCount.set(s[j], (charCount.get(s[j]) || 0) + 1)
                maxFrequency = Math.max(maxFrequency, charCount.get(s[j]))
                if(j - i + 1 - maxFrequency <= k) {
                    longestSubStr = Math.max(longestSubStr, j - i + 1)
                }
            }
        }
        return longestSubStr
    }
}

//BRUTE FORCE
//count each char frequency using a map
//by using a map, we can use setters and getters to update character frequencies
//get the difference in frequencies to know which to replace (replace less frequent one)
//if length of current window - current max frequency is <= k, the window is still valid
//update longest substr as needed
//return longest substr


//SOLUTIONS TO STUDY

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let charSet = new Set(s);

        for (let c of charSet) {
            let count = 0,
                l = 0;
            for (let r = 0; r < s.length; r++) {
                if (s[r] === c) {
                    count++;
                }

                while (r - l + 1 - count > k) {
                    if (s[l] === c) {
                        count--;
                    }
                    l++;
                }

                res = Math.max(res, r - l + 1);
            }
        }
        return res;
    }
}


//NOT MY SOLUTION, JUST ONE TO STUDY


class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charCount = new Map()
        let longestSubStr = 0
        let left = 0
        let maxFrequency = 0

        for(let right = 0; right< s.length; right++) {
            charCount.set(s[right], (charCount.get(s[right]) || 0) + 1)
            maxFrequency = Math.max(maxFrequency, charCount.get(s[right]))

            while(right - left + 1 - maxFrequency > k) {
                charCount.set(s[left], charCount.get(s[left]) - 1)
                left++
            }
            longestSubStr = Math.max(longestSubStr, right - left + 1)
        }
        return longestSubStr
    }
}


//count occurences of each char in hash map
//difference in counts tells us how many chars we need to replace
//make sure that difference is <= k to ensure valid window
//once window is no longer valid, update counts and longestSubStr as necessary
//update longestSubStr variable as needed
//NOT MY SOLUTION, JUST ONE TO STUDY
