let nums = [1,1,1,2,2,3,3,3,3,3,4,4,4,4,4,4,1,1,1,2,2,2,2,2]
let k = 3;

var topKFrequent = function(nums,k){

    //arrange nums into a map
    let myMap = new Map();

    for(let i = 0; i<nums.length;i++){
        myMap.set(nums[i],(myMap.get(nums[i]) || 0 )+1)
    }

    let heapArr = new Array(k+1);
    heapArr.fill([0,0])

    for (const entry of myMap.entries()){
        console.log("------------")
        console.log(entry)
        HeapPush(entry,heapArr,k)
    }

    console.log(heapArr)

    let ret = [];

    for(let j = 1; j<heapArr.length;j++){
        ret[j-1] = heapArr[j][0]
    }

    console.log(ret)

}

function HeapPush(item, heapArr,k){

    console.log(item[1])
    console.log(heapArr[1][1])

    if(item[1] > heapArr[1][1]){
        heapArr[1] = item;
    }

    Sink(heapArr,1,k)
    console.log("------------")
}

//下沉函数 - 下沉数值比较大的下去
function Sink(arr,i,n){

    console.log("Sinking")

    while(2*i<=n){
        let j = 2*i;

        //找出更加小的值
        if(j<n && arr[j][1]>arr[j+1][1]){
            ++j;
        }
        if(arr[i][1] > arr[j][1]){
            Swap(i,j,arr)
        }else{
            break;
        }

        i = j;

    }
}

function Swap(i,j,arr){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

topKFrequent(nums,k);