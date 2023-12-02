/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {

    //create set looping mat
    let row = mat.length
    let col = mat[0].length
    // console.log(row)
    // console.log(col)

    let hori = new Array(row).fill(0)
    let vert = new Array(col).fill(0)

    let map = new Map()

    //set map for searchin through arr
    for(let i =0 ;i<row;i++){
        for(let j=0; j<col;j++){
            map.set(mat[i][j],[i,j])
        }
    }

    let arrLen = arr.length
    // console.log(arrLen)
    let item

    for(let k = 0; k<arrLen;k++){
        item = map.get(arr[k])
        
        hori[item[0]] +=1
        vert[item[1]] +=1

        // console.log(hori)
        // console.log(vert)

        //当该行的数量达到尾的长度
        if(hori[item[0]] == col || vert[item[1]] == row)
            return k
    }

};

let arr = [2,8,7,4,1,3,5,6,9]
let mat = [[3,2,5],[1,4,6],[8,7,9]]

console.log(firstCompleteIndex(arr,mat))