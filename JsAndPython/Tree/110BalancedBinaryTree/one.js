// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/*
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function(root) {


    let max=0
    let min=0
    let count = -1
    let flag = 1
    let dada = 0

    function dfs(node){
        if(node == null){

            if(flag==1){
                min = count
                flag = 0
            }

            max = Math.max(max,count)
            min = Math.min(min,count)
            console.log("count: " + count +" || " + "max: " + max +" || " + "min: " + min)
        
            let diff = max-min
            if(diff > 1 || diff < -1){
                dada = 1
                return false 
            } 

            return
        }

        console.log(node.val)

        count += 1
        dfs(node.left)
        dfs(node.right)
        count -= 1


    }

    dfs(root)
    console.log(dada)
    if(dada == 0){
        console.log("true")
        return true
    }else{
        console.log("false")
        return false
    }

};


let root = new TreeNode(3, new TreeNode(9,new TreeNode(77,null,null),null),new TreeNode(20,new TreeNode(15,null,null),new TreeNode(7,new TreeNode(91,null,null),null)))

isBalanced(root)