/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = new Array()
    let path = new Array()
    nums.sort((a,b)=>a-b)

    backtrack(0,nums)
    console.log(result)
    return result

    function backtrack(startIndex,nums){
        result.push(path.slice())

        if(startIndex >= nums.length){
            return
        }

        for(let i = startIndex; i<nums.length;++i){
            if(i>startIndex && nums[i] == nums[i-1]){
                continue;
            }
        
            path.push(nums[i])
            backtrack(i+1,nums)
            path.pop()
        }
    }
};

let nums = [1,2,2]

subsetsWithDup(nums)