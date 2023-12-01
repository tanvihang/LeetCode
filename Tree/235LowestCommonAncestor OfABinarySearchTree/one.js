 // Definition for a binary tree node.
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {

    if((root.val >= p.val && root.val <= q.val) || (root.val <= p.val && root.val >= q.val)){
        console.log(root.val)
        return root.val
    }

    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left,p,q)
    }

    if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right,p,q)
    }
};

//root = [6,2,8,0,4,7,9,null,null,3,5]
let root = new TreeNode(6,new TreeNode(2,new TreeNode(0,null,null),new TreeNode(4,new TreeNode(3,null,null),new TreeNode(5,null,null))),new TreeNode(8,new TreeNode(7,null,null),new TreeNode(9,null,null)))

//p and q
let p = new TreeNode(2,null,null)
let q = new TreeNode(8,null,null)

lowestCommonAncestor(root,p,q)