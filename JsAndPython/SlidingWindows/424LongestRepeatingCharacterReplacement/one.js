// 给你一个字符串 s 和一个整数 k 。你可以选择字符串中的任一字符，并将其更改为任何其他大写英文字符。该操作最多可执行 k 次。

// 在执行上述操作后，返回 包含相同字母的最长子字符串的长度。

// 示例 1：
// 输入：s = "ABAB", k = 2
// 输出：4
// 解释：用两个'A'替换为两个'B',反之亦然。

// 示例 2：
// 输入：s = "AABABBA", k = 1
// 输出：4
// 解释：
// 将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
// 子串 "BBBB" 有最长重复字母, 答案为 4。
// 可能存在其他的方法来得到同样的结果。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */


let arr = new Array()
let left= 0
let right = 1
let maxLen = 0

var characterReplacement = function(s, k) {

    let tempk = k


    while(right<s.length ){
        if(k==0 && s.length>1){
            arr.push(left+1)
        }

        if(s[right]==s[left]){
            right++
            maxLen = Math.max(maxLen,(right-left))
            console.log("ok")
        }else if(s[right] !== s[left] && tempk>0){
            arr.push(right)
            right++
            maxLen = Math.max(maxLen,(right-left))
            tempk--
            console.log("k--")
        }else if(tempk<=0){
            console.log("reloop")
            maxLen = Math.max(maxLen,(right-left))
            console.log("Current max:" + maxLen)
            left = arr[0]
            console.log("left changed to " + left)
            right = left+1
            tempk = k
            arr = new Array()
        }
        // console.log(right)        
    }


    console.log(tempk)
    while(tempk>0 && maxLen<s.length){
        console.log("hi")
        maxLen++
        tempk--
    }

    console.log(maxLen)
};

let s = "ABBB" 
let k = 2

characterReplacement(s,k)