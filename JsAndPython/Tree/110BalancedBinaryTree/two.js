
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

function Item(height,isBalanced){
    this.height = height
    this.isBalanced = isBalanced
}

var isBalanced = function(root) {
    
    function dfs(root){
        if (root == null){
            return new Item(0,1)
        }

        let left = dfs(root.left)
        let right = dfs(root.right)

        let balanced = left.isBalanced && right.isBalanced && Math.abs((left.height - right.height) <=1)
        console.log(balanced)

        return new Item(Math.max(left.height,right.height)+1, balanced)
    }

    let item =  dfs(root)

    return item.isBalanced? true:false;

};

let root = new TreeNode(3, new TreeNode(9,new TreeNode(77,null,null),null),new TreeNode(20,new TreeNode(15,null,null),new TreeNode(7,new TreeNode(91,null,null),null)))

isBalanced(root)