
 // Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {

  //当root为空，sub不为空，他不为子树
  if(root == null && subRoot!==null)
    return false 

  //检测是否为同样的
  if(sameTree(root,subRoot))
    return true


  let ans = (isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot))
  return ans
};

function sameTree(root,subRoot){

  if(root == null && subRoot == null)
  {
    return true
  }

  //if same recursively check
  if(root && subRoot && root.val == subRoot.val)
  {
    return sameTree(root.left, subRoot.left) && sameTree(root.right, subRoot.right)
  }

  //one empty and another not empty
  return false
}


//root = [3,4,5,1,2,null,null,null,null,0]
let root = new TreeNode(3,new TreeNode(4,new TreeNode(1,null,null),new TreeNode(2,new TreeNode(0,null,null),null)),new TreeNode(5,null,null))
// subRoot = [4,1,2]
let subroot = new TreeNode(4,new TreeNode(1,null,null),new TreeNode(2,null,null))

isSubtree(root,subroot)