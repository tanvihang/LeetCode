/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = new Array()
    let path = new Array()

    backtrack(0,nums)
    console.log(result)

    function backtrack(level,nums)
    {
        if(level > nums.length)
            return

        result.push(path.slice())

        let mySet = new Set()
        
        let numsForTheLevel = nums.slice(level)

        numsForTheLevel.forEach(element =>{
            mySet.add(element)
        })

        console.log(mySet)

        for(let i = 0; i< mySet.size;i++){
            path.push(Array.from(mySet)[i])
            console.log(path)
            backtrack(level+i+1,nums)
            path.pop()
        }

    }

};

nums = [1,2,2]

subsetsWithDup(nums)