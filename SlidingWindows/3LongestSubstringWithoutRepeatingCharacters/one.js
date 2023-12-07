// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * @param {string} s
 * @return {number}
 */

let longestSubString = new Array()
let curLongestSubString = new Array()
let pos;

var lengthOfLongestSubstring = function(s) {

    s = s.split("")

    s.forEach(item => {
        pos = curLongestSubString.indexOf(item)

        if(pos === -1){
            curLongestSubString.push(item)
        }else{  
            curLongestSubString = curLongestSubString.slice(pos+1)
            curLongestSubString.push(item)
        }

        longestSubString = (longestSubString.length>=curLongestSubString.length) ? longestSubString:curLongestSubString
                
    });

    console.log(longestSubString)
    console.log(longestSubString.length)
    return longestSubString.length
};

s = "abcabcbb"

lengthOfLongestSubstring(s)