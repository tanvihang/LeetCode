/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {

    let ans = new Array()
    let row = heights.length
    let col = heights[0].length
    let rightBorder = col-1
    let bottomBorder = row-1

    for(let i=0; i<row;i++){
        for(let j=0;j<col;j++){
            bfs(i,j)
        }
    }

    console.log(ans)

    function bfs(r,c){
        let surrounding = [[-1,0],[1,0],[0,-1],[0,1]]
        let queue = new Array()
        let flag1 = 0
        let flag2 = 0
        queue.push([r,c])
        let ocean = heights.map(row => [...row]);
        ocean[r][c] = true

        let shifted, rr, cc
        let newRow,newCol,str

        while(queue.length){
            shifted = queue.shift()
            rr = shifted[0]
            cc = shifted[1]
            val = heights[rr][cc]

            //两个角落
            if(rr == 0 && cc == rightBorder || rr == bottomBorder && cc == 0)
            {
                ans.push([r,c])
                break
            }
            
            //流经过补两个角落分别左上和右下
            if(rr == 0 || cc == 0){
                flag1 = 1
            }

            if(cc == rightBorder || rr == bottomBorder){
                flag2 = 1
            }

            if(flag1 + flag2 == 2){
                ans.push([r,c])
                break
            }

            surrounding.forEach(elements =>{
                newRow = elements[0] + rr
                newCol = elements[1] + cc
                str = newRow + "" + newCol
                if(newRow>=0 && newRow<row
                    && newCol >=0 && newCol<col
                    && heights[newRow][newCol] <= val && ocean[newRow][newCol] !== true){
                        queue.push([newRow,newCol])
                        ocean[newRow][newCol] = true
                }
            })
            
        }

    }

};

let heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]

pacificAtlantic(heights)