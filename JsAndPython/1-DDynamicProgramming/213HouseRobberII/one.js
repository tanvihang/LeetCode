// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

// 示例 1：
// 输入：nums = [2,3,2]
// 输出：3
// 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。

// 示例 2：
// 输入：nums = [1,2,3,1]
// 输出：4
// 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
//      偷窃到的最高金额 = 1 + 3 = 4 。

// 示例 3：
// 输入：nums = [1,2,3]
// 输出：3

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = new Array()
    let length = nums.length
    let max
    console.log(length)

    dp[0] = nums[0]

    if(length>1){
        dp[1] = nums[1]
        max = Math.max(dp[0],dp[1])
    }else{
        max = dp[0]
    }

    if(length == 3){
        dp[2] = Math.max(max,nums[2])
        max = Math.max(dp[2],max)
    }

    if(length>3){
        dp[2] = Math.max(max,(dp[0]+nums[2]))
        max = Math.max(dp[2],max)
        
        let i = 3
        // 当到达最后的时候会跳出来
        while(i<length-1){
            dp[i] = Math.max(dp[i-2],dp[i-3]) + nums[i]
            max = Math.max(dp[i],max)
            i++
        }

        let firstOption = dp[i-2] + nums[i]
        let secondOption = dp[i-3] + nums[i]

        if(i%2 == 0){
            firstOption -= nums[0]
        }else{
            secondOption -= nums[0]
        }


        console.log(firstOption)
        console.log(secondOption)
        dp[i] = Math.max(firstOption,secondOption) 
        max = Math.max(dp[i],max)
    }

    console.log(dp)
    console.log(max)

};

nums = [8,4,8,5,9,6,5,4,4,10]

rob(nums)