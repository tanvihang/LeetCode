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

let charMap = new Map()
let left = 0
let right = 0
let maxLen = 0

var characterReplacement = function(s, k) {

    let maxInMap;
    let windowSize = 1
    let tmpK = k

    while(right<s.length){
        windowSize = right-left+1
        charMap.set(s[right],((charMap.get(s[right]))?charMap.get(s[right])+1:1))
        console.log(right + " " + s[right]) 
        maxInMap = getMaxInMap()
        console.log("Window Size: "+windowSize + " || Max in Map: "+ maxInMap)
        
        if(windowSize-maxInMap <= tmpK){
            //push进去
            // right++
            right++
            maxLen = Math.max(windowSize,maxLen)
        }else{
            //减去left再map里面的数量
            charMap.set(s[left],(charMap.get(s[left]))?charMap.get(s[left])-1:0)
            left++
            right++
        }

        console.log("Current Max Len:" +maxLen)
        console.log("________________")
    }

    console.log(maxLen)
}

function getMaxInMap(){
    let max = 0
    charMap.forEach((val,key)=>{
        console.log("key:" + key+"||" +"value: "+ val)
        max = Math.max(val,max)
    })

    return max
}

let s = "ABBB"
let k = 2

characterReplacement(s,k)