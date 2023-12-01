//best way is to split into two array 
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    let arr = new Array()
    let length = nums.length
    let max = 0

    //eg [1,2,3]
    if(length<3){
        max = Math.max(...nums)
        return max
    }

    //two loop from [0,n-1] and [1,n]
    for(let i = 0; i<2;i++){
        
        arr[0] = nums[i]
        max = Math.max(arr[0],max)
        
        arr[1] = nums[i+1]
        max = Math.max(arr[1],max)

        arr[2] = nums[i+2] + arr[0]
        max = Math.max(arr[2],max)

        for(let j = 3; j<length-1; j++){
            let num = nums[j+i]
            console.log(i)
            console.log(num)
            arr[j] = Math.max((num+arr[j-2]),(num+arr[j-3]))
            max = Math.max(arr[j],max)
        }

    console.log(arr)
    }

    console.log(max)
};

nums = [1,3,1,3,100]
rob(nums)