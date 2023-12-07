/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let row = grid.length
    let col = grid[0].length
    let max = 0
    let count = 0


    if(!grid)
        return 0

    for(let i =0; i<row; i++){
        for(let j = 0; j<col;j++){
            if(grid[i][j] == "1"){
                grid[i][j] = "0"
                bfs(i,j)
                max = Math.max(count,max)
                count = 0
            }
        }
    }

    return max

    function bfs(r,c){
        let surrounding = [[-1,0],[1,0],[0,-1],[0,1]]
        let popped, rr,cc
        let queue = new Array()
        queue.push([r,c])
        count++;


        while(queue.length>0){
            popped = queue.shift()
            rr = popped[0]
            cc = popped[1]

            surrounding.forEach(element => {
                let newrow = rr + element[0]
                let newcol = cc + element[1]

                if(newrow>=0 && newrow<row
                    && newcol >=0 && newcol<col
                    && grid[newrow][newcol] == "1"){
                        queue.push([newrow,newcol])
                        grid[newrow][newcol] = "0"
                        count++
                    }
            })
        
        }

    }
};

let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]