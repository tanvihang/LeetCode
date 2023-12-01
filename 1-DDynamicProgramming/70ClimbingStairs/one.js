// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 示例 1：
// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶

// 示例 2：
// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    let dp = new Array(n+1)
    dp[0] = 1
    dp[1] = 1
    dp[2] = 2
    oneDimensionDP(n)
    console.log(dp)

    function oneDimensionDP(n){
        
        if(n == 2){
            return 2
        }
        if(n == 1 || n == 0){
            return 1
        }
        if(dp[n] !== undefined){
            return dp[n]
        }
        
        dp[n] = oneDimensionDP(n-2) + oneDimensionDP(n-1)
        return dp[n]

    }

    console.log(dp[n])

};

climbStairs(44)