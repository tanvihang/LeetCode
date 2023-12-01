let haystack = "bababbbbaaabaababbb"
let needle = "abaaba"

function KMPSearch(haystack, needle, next){
    let i = 0;
    let j = 0;

    for(i;i<haystack.length;i++){
        while(j>0 && haystack[i]!==needle[j]){
            j = next[j-1];
        }

        if(haystack[i]===needle[j]){
            j++;
        }

        if(j=== needle.length){
            return i-j+1;
        }
    }

    return -1;
}

//字符串 abaaba 0,0,1,1,2,3
//字符串 aabaaab 的前缀函数值依次为 0,1,0,1,2,2,3
//getting next array
function getNext(needle){
    let next = [];
    next[0] = 0;

    let i = 1;
    let j = 0;

    for(i;i<needle.length;i++){
        while(j>0 && needle[i] !== needle[j]){
            //the meaning of j-1 is the last element to the front is its 最长前缀
            j = next[j-1];
        }
        if(needle[i] === needle[j]){
            j++;
        }

        next[i] = j;
    }

    return next;
}

let next = getNext(needle);
console.log(next);

let first = KMPSearch(haystack,needle,next);
console.log(first);
