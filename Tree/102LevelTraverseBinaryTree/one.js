
//  Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    //先去左边，保存之前的节点
    //收了然后去右边，重复
    let queue = new Array();
    let res = new Array();
    let resMap = new Map();
    
    queue.push([root,0])

    while(queue){
        if(queue.length > 0){
            var ans = queue.shift()

            if(ans[0].left){
                queue.push([ans[0].left,ans[1]+1])
            }
            
            if(ans[0].right){
                queue.push([ans[0].right,ans[1]+1])
            }
    
            res.push([ans[0].val,ans[1]])
            if(resMap.has(ans[1])){
                let cur = resMap.get(ans[1])
                //append into
                console.log(cur)
                cur.push(ans[0].val)
                console.log(cur)
                resMap.set(ans[1],cur)
            }else{
                resMap.set(ans[1],[ans[0].val])
            }

        }else{
            break;
        }
        
    }

    console.log(res)
    return Array.from(resMap.values())
};

//root = [3,9,20,null,null,15,7]
let root = new TreeNode(3,new TreeNode(9,null,null),new TreeNode(20,new TreeNode(15,null,null),new TreeNode(7,null,null)))


levelOrder(root)