
//  * Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let queue = new Array()
    let levelItem = new Array()
    let ans = new Array()

    queue.push(root)
    if(root)
        ans.push(root.val)
    while(queue.length!==0){
        while(queue.length!==0){
            let pop = queue.shift()
            console.log("Shifted from current level item: " + pop)
            levelItem.push(pop)
        }

        while(levelItem.length!==0){
            let shift = levelItem.shift()
            console.log("???")
            console.log(shift)
            console.log("???")

            if(shift !== null && shift.left!==null){
                queue.push(shift.left)
            }
    
            if(shift !== null && shift.right!==null){
                queue.push(shift.right)
            }
        }

        //last in queue is the most right handside
        let last = queue[queue.length-1]
        if(last){
            ans.push(queue[queue.length-1].val)
        }
        
        
    }

    console.log(ans)

    
};

//[1,2,3,null,5,null,4]
let root = new TreeNode(1,new TreeNode(2,null,new TreeNode(5,null,null)),new TreeNode(3,null,new TreeNode(4,null,null)))

rightSideView(root)