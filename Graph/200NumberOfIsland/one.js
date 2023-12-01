/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let row = grid.length
    let col = grid[0].length

    let visited = new Set()
    let island = 0

    if(!grid)
        return 0

    for(let i =0; i<row; i++){
        for(let j = 0; j<col;j++){
            if(grid[i][j] == "1" && !visited.has(i+""+j)){
                bfs(i,j)
                island++
                console.log(visited)
            }
        }
    }

    console.log(island)
    return island

    function bfs(r,c){
        let queue = new Array()
        queue.push([r,c])
        visited.add(r+""+c);

        while(queue.length>0){
            let popped = queue.shift()
            let rr = popped[0]
            let cc = popped[1]
            
            let surrounding = [[-1,0],[1,0],[0,-1],[0,1]]

            surrounding.forEach(element => {
                let newrow = rr + element[0]
                let newcol = cc + element[1]
                let str = newrow + "" + newcol

                if(newrow>=0 && newrow<row
                    && newcol >=0 && newcol<col
                    && grid[newrow][newcol] == "1"
                    && !visited.has(str)){
                        visited.add(str)
                        queue.push([newrow,newcol])
                    }
            })
        
        }

    }
};

let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

numIslands(grid)