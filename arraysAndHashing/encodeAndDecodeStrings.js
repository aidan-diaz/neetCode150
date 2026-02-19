/* Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
    // ... your code
    return encoded_string;
}
Machine 2 (receiver) has the function:

vector<string> decode(string s) {
    //... your code
    return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

Example 1:

Input: dummy_input = ["Hello","World"]

Output: ["Hello","World"]

Explanation:
Machine 1:
Codec encoder = new Codec();
String msg = encoder.encode(strs);
Machine 1 ---msg---> Machine 2

Machine 2:
Codec decoder = new Codec();
String[] strs = decoder.decode(msg);
Example 2:

Input: dummy_input = [""]

Output: [""]

Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains any possible characters out of 256 valid ASCII characters.

Follow up: Could you write a generalized algorithm to work on any possible set of characters? */

//MY SOLUTION

class Solution {

    encode(strs) {
        let encodedStr = ''
        for(const str of strs) {
            encodedStr += str.length + '&' + str
        }
        return encodedStr
    }

    decode(str) {
        const decodedStrs = []
        let i = 0
        while(i < str.length) {
            let j = i
            while(str[j] != '&') {
                j += 1
            }
            const length = Number(str.substring(i, j))
            console.log(str.substring(j + 1, j + 1 + length))
            decodedStrs.push(str.substring(j + 1, j + 1 + length))
            console.log(decodedStrs)
            i = j + 1 + length            
        }
        return decodedStrs
    }
}


//two functions
//first one takes in arr of strs and makes them one long str
//second one separates the long str back into the original list of strs
//['dog', 'cat'] --> 'dogcat' --> ['dog', 'cat']

//function 1 --> make the list of strs into one big str, by separating each str with delimiter
//function 2 --> use delimiter to put strs back into original list