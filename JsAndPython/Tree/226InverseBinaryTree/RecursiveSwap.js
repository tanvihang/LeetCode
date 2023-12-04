/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    return recursiveSwap(root);
};

function recursiveSwap(node){
    if(node===null){
        return null;
    }
    let l;
    let r;

    l = recursiveSwap(node.left);
    r = recursiveSwap(node.right);

    node.left = r;
    node.right = l;

    return node;
}