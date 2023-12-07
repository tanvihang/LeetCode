
 // * Definition for a binary tree node.
 public class TreeNode {
      public int val;
      public TreeNode left;
      public TreeNode right;
      public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
          this.val = val;
          this.left = left;
          this.right = right;
      }
  }

public class Solution {
    public int Rob(TreeNode root)
    {
        Tuple<int, int> myTuple = PostOrder(root);
        return Math.Max(myTuple.Item1, myTuple.Item2);
    }

    public Tuple<int,int> PostOrder(TreeNode node)
    {
        
        if (node == null)
        {
            return new Tuple<int, int>(0,0);
        }

        Tuple<int,int> left = PostOrder(node.left);
        Tuple<int, int> right = PostOrder(node.right);

        return new Tuple<int, int>((node.val + left.Item2 + right.Item2),
            (Math.Max(left.Item1, left.Item2)) + Math.Max(right.Item1, right.Item2));

    }
}

public class Program
{
    public static void Main(string[] args)
    {
        TreeNode root = new TreeNode(3, new TreeNode(2, null, new TreeNode(3, null, null)),
            new TreeNode(3, null, new TreeNode(1, null, null)));

        Solution solution = new Solution();
        solution.Rob(root);
    }
}