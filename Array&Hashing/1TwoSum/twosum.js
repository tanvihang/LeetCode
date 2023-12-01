let arr = [-5,2,24,6,1,23,-1,-8,-231,-53];
let ans = 47

//1  ans = +, arr1 = -, arr2 = + ;
//2. ans = +, arr1 = +, arr2 = + ;
//3. ans = -, arr1 = -, arr2 = + ;
//4. ans = -, arr1 = -, arr2 = - ;

//sort array
arr.sort((a,b)=> a-b);

console.log(arr)

let diff = 0;

let i =0;
let index2 = 0;

//search two sum
for(;i<arr.length;i++){
    diff = ans-arr[i];
    // console.log(diff)
    //get diff in the array
    //二分查找

    index2 = binarySearch(diff)

    if(index2 !== -1){
        console.log(i+" "+index2);
    }
}

function binarySearch(val){
    let left = 0;
    let right = arr.length-1;
    let median;


    while(left<=right){
        median = left + Math.floor((right-left)/2);
        if(arr[median]===val){
            return median;
        }
        else if(arr[median]>val){
            right = median-1;
        }else if(arr[median]<val){
            left = median+1;
        }
    }

    return -1;

}