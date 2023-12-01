//给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积
//请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
//输入: nums = [1,2,3,4]
//输出: [24,12,8,6]
//
// 输入: nums = [-1,1,0,-3,3]
// 输出: [0,0,9,0,0]

nums = [0,4,0]

var productExceptSelf = function(nums) {

    let outputArr = [];
    let myIndexMap = new Map();
    let sum=1;


    //calculate others
    for(let i in nums){
        if(nums[i] !== 0){
            sum*=nums[i];
        }
    }

    console.log(sum)

    //space O(N)
    for(let i in nums){
        if(!myIndexMap.has(nums[i])){

            let list = new Array();
            list.push(i);

            myIndexMap.set(nums[i],list);
        }else{
            let list = myIndexMap.get(nums[i]);
            list.push(i);

            myIndexMap.set(nums[i],list);
        }
    }

    if(myIndexMap.has(0)){
        if(myIndexMap.get(0).length == nums.length){
            sum = 0;
        }
    }

    console.log(myIndexMap)

    //两个零
    if(myIndexMap.has(0) && myIndexMap.get(0).length>1){
        let arr = new Array(nums.length)
        arr.fill(0)
        console.log(arr)
        return arr
    }

    for(let i in nums){
        //包含一个零
        if(myIndexMap.has(0) && nums[i] !==0){
            outputArr.push(0)
        }
        else if(nums[i] !== 0){
            outputArr.push(sum/nums[i])
        }else{
            outputArr.push(sum);
        }

    }

    console.log(outputArr)

};

productExceptSelf(nums)