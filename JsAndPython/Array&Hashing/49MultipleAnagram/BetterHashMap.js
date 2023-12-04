strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagram(strs){
    let hashMap = new Map();

    for(let str of strs){
        let arr = Array.from(str);
        arr = arr.sort().toString();

        //若有，返回那一个的值，否则创建一个list
        let list = hashMap.has(arr) ? hashMap.get(arr) : new Array();

        list.push(str);
        hashMap.set(arr,list);
    }

    return hashMap

}

let myHashMap = groupAnagram(strs)
console.log(myHashMap)
console.log(myHashMap.values())
console.log(Array.from(myHashMap.values()));