/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    let row = board.length
    let col = board[0].length
    //save position in board to avoid revisit
    let set = new Set()
    let len = word.length
    let firstLetter = word[0]

    for(let r =0; r<row;r++){
        for(let c=0;c<col;c++){
            if(firstLetter == board[r][c]){  
                if(dfs(r,c,0)){
                    console.log("True")
                    return true

                }
            }
                
        }
    }

    return false
    //think what we need in this recursive
    //当前的row(r)和column(c)以及处于第几阶段i
    function dfs(r,c,i){

        if(i === len)
            return true

        if(r<0 || c<0 || r>=row || c>=col || board[r][c] !== word[i] || set.has(r+""+c))
            return false

        set.add(r+""+c)
        let res =  dfs(r-1,c,i+1) || dfs(r+1,c,i+1) || dfs(r,c-1,i+1) || dfs(r,c+1,i+1)
        // console.log(set)
        set.delete(r+""+c)

        return res
    }


};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]

word = "SEE"

exist(board,word)