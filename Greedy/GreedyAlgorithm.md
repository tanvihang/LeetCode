# Greedy Algorithm
- best choice at each choice, without worrying to much about the future
- every state best solution, and find the global best solution(局部最优->全局最优)


# 53 Biggest Sum Array
Ahhh, try the easiet way first, Nothing special
1. double loop keep track of max

```js
 max = nums[0]

    nums.forEach((number,index)=>{
        cur = number
        for(let i = index+1;i<nums.length;i++){
            cur += nums[i]
            max = Math.max(max,cur)
        }
    })
    
    return max
```

Time Complexity: $O(n^2)$


2. 排除前面不可能是大的数据(移除负数的前缀)

可以这么去想：
1. 如果当前的数比前面加起来的都还要大，并且前面的是负数，那么就可以直接换新的值了
`if(当前的数目>之前的总和 && 之前的总和<0)`就重新计算。

```js
let cur=0;
let max = nums[0]
for(let i = 0;i<nums.length;i++){
        if(nums[i]>cur && cur<0){
            cur=0
        }
        cur+=nums[i]
        max = Math.max(cur,max)
    }

    return max
```

Time Complexity: $O(n)$