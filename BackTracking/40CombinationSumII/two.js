/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    candidates.sort((a,b)=>a-b)

    let path = new Array()
    let res = new Array()
    let length = candidates.length
    let startIndex=0
    let sum = 0

    backtrack(path,startIndex,sum)
    console.log(res)

    function backtrack(path, i , sum)
    {
        if(sum == target){
            res.push(path.slice())
        }

        if(sum > target){
            return
        }

        let prev = -1

        for(i; i<length;i++)
        {
            //跳过重复的
            if(candidates[i] == prev){
                continue
            }
            path.push(candidates[i])
            backtrack(path, i+1, sum + candidates[i])
            path.pop()

            prev = candidates[i]
            
        }

    }

};

candidates = [10,1,2,7,6,1,5]
target = 8

combinationSum2(candidates,target)