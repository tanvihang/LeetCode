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
    let i=0

    backtrack(path,i,target)
    console.log(res)

    function backtrack(path, i ,target)
    {
        if(target == 0){
            res.push(path.slice())
        }

        if(target <= 0){
            return
        }

        let prev = -1

        for(i; i<length;i++)
        {
            if(candidates[i] == prev){
                continue
            }
            path.push(candidates[i])
            backtrack(path, i+1,target - candidates[i])
            path.pop()

            prev = candidates[i]
            
        }

    }

};

candidates = [10,1,2,7,6,1,5]
target = 8

combinationSum2(candidates,target)