/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {

    let ans = new Array()

    for(let i = 1; i<10; i++){
        backtrack(i,ans,n)

    }

    function backtrack(i,ans,n){
        
        if(i>n)
            return
        ans.push(i)
        for(let j =0; j<10;j++){
            backtrack(i*10+j,ans,n)
        }
    }

    console.log(ans)

};

let n = 192

lexicalOrder(n)