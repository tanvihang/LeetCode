/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let firstChar = word[0]
    let path = new Array()
    let res

    let rowLength = board.length
    let columnLength = board[0].length

    let flag = 0;
    let prev = -1

    for(let row = 0; row < rowLength; row++){
        for(let column = 0; column < columnLength; column++){
            if(board[row][column] == firstChar)
                console.log("Another choices:" +board[row][column])
                search(row,column,0,path)
        }
    }

    console.log(res)

    function search(row,column,cur,path)
    {
        if(board[row][column] == word[cur]){
            path.push(word[cur])
            console.log(path)
            //继续执行
        }
        
        if(board[row][column] !== word[cur]){
            path.push(word[cur])
            console.log("Not same, backtrack")
            return
        }

        if(path.length == word.length){
            console.log("Same length")
            flag = 1
            res = path.slice()
        }

        if(path.length > word.length){
            return
        }
    
        cur +=1
        //上下左右查找
        if(row - 1 >= 0 ){
            console.log("search top")
            prev = row
            search(row-1,column,cur, path)
            path.pop()
        }

        if(row + 1 < rowLength ){
            console.log("search bottom")
            prev = row
            search(row+1,column,cur, path)
            path.pop()
        }

        console.log(column)
        if(column - 1 >= 0 && ){
            console.log("search left")
            prev = column
            search(row, column-1,cur, path)
            path.pop()
        }

        if(column + 1 < columnLength) {
            console.log("search right")
            prev = column
            search(row, column+1, cur, path)
            path.pop()
        }

        return
    }
        
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let word = "ABCB"

exist(board, word)