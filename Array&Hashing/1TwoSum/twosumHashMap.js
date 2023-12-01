let arr = [-5,2,24,6,1,23,-1,-8,-231,-53];
let ans = 47

let myHashMap = new Map();

let arrLength = arr.length;
let j = 0;
let diff;

for(let i = 0; i<arrLength;i++){
    diff = ans-arr[i];
    if(myHashMap.has(diff)){
        console.log(myHashMap.get(diff) + " " + i)
    }
    //put it into hashmap
    myHashMap.set(arr[i],i);
}