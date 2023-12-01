// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 示例 2：
// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]

// 示例 3：
// 输入：nums = [1]
// 输出：[[1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    let path = new Array()
    let result = new Array()
    let length = nums.length

    function backtrack(nums,path,result){
        if(path.length == length){
            // console.log(path)
            // console.log("----------------------")
            result.push(path.slice())
            return
        }
        


        for(let i = 0; i < nums.length; i++){
            path.push(nums[i])
            let newArr = nums.filter(item=>{
                if(item == nums[i]){
                    return false
                }
                return true
            })
            // console.log("path: " +path)
            // console.log("nums: "+ newArr)
            // console.log("-------------")     
            backtrack(newArr,path,result)
            path.pop()
        }
    
    }

    backtrack(nums,path,result)
    console.log(result)
    return result
    
};

nums = [1,2,3]
permute(nums)