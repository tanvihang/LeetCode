//给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]

let nums = [1,1,1,2,2,3,3,3,3,3]
let k = 2;

var topKFrequent = function(nums, k) {
    //set map
    let myMap = new Map();
    let arrList = new Array();
    let ret = new Array();

    //calculate the frequency
    for(let num of nums){
        let count = myMap.has(num) ? myMap.get(num) : 0;
        myMap.set(num,count+1);
    }

    //sort the map
    arrList = [...myMap].sort((a,b) => b[1]-a[1]);
    console.log(arrList)

    //get k elements
    arrList.splice(k,arrList.length);
    console.log(arrList)

    let j = 0
    for(let i of arrList){
        ret[j++] = i[0];
    }

    console.log(ret)

};

topKFrequent(nums,k);