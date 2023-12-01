/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */


var characterReplacement = function(s, k) {

    let myMap = new Map()
    let left = 0
    let res = 0
    let maxf = 0;
    // window size = left-right+1; eg:2-0+1=3

    for(let right=0; right<s.length;right++){
        myMap.set(s[right],((myMap.get(s[right]))?myMap.get(s[right])+1:1))
        maxf = Math.max(maxf, myMap.get(s[right]))

        //check if it exceed
        if((right-left+1 - maxf) > k){
            myMap.set(s[left],(myMap.get(s[left]))?myMap.get(s[left])-1:0)
            left++
        }

        res = Math.max(res, (right-left+1))

    }

    return res

}

let s = "ABBB"
let k = 2

characterReplacement(s,k)