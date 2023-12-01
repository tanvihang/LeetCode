/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 //左边选了之后右边就不可以选择，选择树
 var combinationSum = function(candidates, target) {

    let path = new Array()
    let res = new Array()
    let len = candidates.length
    candidates.sort((a,b)=> a-b)

    dfs(0,target)

    console.log(res)
    return res

    function dfs(startIndex, sum){
        if(sum == 0){
            res.push(path.slice())
            sum = target
        }

        if(sum < 0  ){
            return
        }

        for(let i = startIndex; i<len;i++){
            path.push(candidates[i])
            console.log(path)
            dfs(i+1, (sum - candidates[i]))
            path.pop()
        }
    }
};

let candidates = [2,3,6,7]
let target = 7

combinationSum(candidates,target)