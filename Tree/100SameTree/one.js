
// Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    function dfs(p,q){
        // 如果都是终止节点，返回
        if(p==null && q==null){
            return 1
        }

        //如果是单个节点为Null返回-1
        //如果他们俩的节点不同，返回-1
        if(p==null || q==null || p.val!==q.val){
            return -1
        }

        // let left = dfs(p.left,q.left)
        // //直接返回
        // if(left == -1){
        //     return -1
        // }

        // //直接返回
        // let right = dfs(p.right,q.right)
        // if(right == -1){
        //     return -1
        // }
        
        //都成功通过，就是没有问题
        return (dfs(p.left,q.left) && dfs(p.right,q.right))
    
    }


    let ans = dfs(p,q)
    console.log(ans)
};

let p = new TreeNode(1,null,new TreeNode(2,null,null))
let q = new TreeNode(1,null,new TreeNode(2,null,null))

isSameTree(p,q)