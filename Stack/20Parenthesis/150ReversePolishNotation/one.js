var evalRPN = function(tokens) {

    let stack = new Array()
    let operationArr = ['+','-','*','/']

    while(tokens.length>0){
        let item = tokens.shift()

        if(operationArr.includes(item)){
            switch(item){
                case '+' : 
                    stack.push(round(stack.pop() + stack.pop()))
                    break;

                case '-' : 
                let aa = stack.pop()
                let bb= stack.pop()
                stack.push(round(bb - aa))
                break;
                    
                case '*' : 
                stack.push(round(stack.pop() * stack.pop()))
                break;
                    
                case '/' : 
                let a = stack.pop()
                let b = stack.pop()
                let ans = b/a

                stack.push(round(ans))

                break;
                    
            }
        }else{
            stack.push(parseInt(item))
        }


    }

    return stack.pop()
};

function round(ans){
    if(ans < 0){
        return Math.ceil(ans)
    }else{
        return Math.floor(ans)
    }
}

