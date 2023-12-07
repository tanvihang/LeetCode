//input {, }, (, ), [, ]
//output true, false

let input = ['(',')','{','}','[',']']

function arrayToToCharacterCode(input){
    if(typeof(input)  == 'undefined' ){
        return;
    }
    return input.toString().charCodeAt(0);
}

function checkValid(input){
    let myStack = new Array();

    let i = 0;

    while(i<input.length){
        // console.log(myStack.toString().charCodeAt(myStack.length-1));
        // console.log(arrayToToCharacterCode(myStack.at(myStack.length-1)));
        // console.log(arrayToToCharacterCode(input[i]));

        // console.log(arrayToToCharacterCode(input[i]) +":"+input[i] + ";" + ((arrayToToCharacterCode(myStack.at(myStack.length-1)))+1) + ":" + (myStack.at(myStack.length-1)) )
        if(arrayToToCharacterCode(input[i]) === (arrayToToCharacterCode(myStack.at(myStack.length-1)) +1) || arrayToToCharacterCode(input[i]) === (arrayToToCharacterCode(myStack.at(myStack.length-1)) +2)  ){
            myStack.pop()
            i++;
        }else{
            console.log("Pushed:" + input[i])
            myStack.push(input[i]);
            i++;
        }
    }

    console.log(myStack)

    if(myStack.length === 0){
        return true;
    }else{
        return false;
    }
}

console.log(checkValid(input))