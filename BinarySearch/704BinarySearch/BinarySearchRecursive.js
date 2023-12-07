let arr = [-5,2,24,6,1,23,-1,-8,-231,-53];
let target = 23;

arr.sort((a,b)=>a-b);

let left = 0;
let right = arr.length-1;

const binarySearch = function (arr, target, left, right) {
    let myMedian = left + Math.floor((right-left)/2);

    if(left>right){
        return -1;
    }

    if (arr[myMedian] === target) {
        return myMedian;
    } else if (arr[myMedian] < target) {
        return binarySearch(arr, target, myMedian+1,right );
    } else if(arr[myMedian] > target){
        return binarySearch(arr, target, left, myMedian-1);
    }
};

let ans = binarySearch(arr,target,left,right);
console.log(ans);