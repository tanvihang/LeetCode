namespace System;

//   Definition for a binary tree node.
public class TreeNode
{
    public TreeNode left;
    public TreeNode right;
    public int val;

    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution
{
    public TreeNode BstToGst(TreeNode root)
    {
        var tmp = root;
        var count = 0;
        InOrderTraversal(tmp, ref count);
        return root;
    }

    public void InOrderTraversal(TreeNode node, ref int count)
    {
        if (node == null) return;

        InOrderTraversal(node.right, ref count);
        node.val += count;
        count = node.val;
        InOrderTraversal(node.left, ref count);
    }
}

public class Program
{
    public static void Main()
    {
        var root = new TreeNode(4, new TreeNode(1, new TreeNode(), new TreeNode(2, null, new TreeNode(3))),
            new TreeNode(6, new TreeNode(5), new TreeNode(7, null, new TreeNode(8))));

        var solution = new Solution();
        solution.BstToGst(root);
        PrintNodeInOrder(root);
    }

    public static void PrintNodeInOrder(TreeNode node)
    {
        if (node == null) return;

        PrintNodeInOrder(node.right);
        Console.WriteLine(node.val);
        PrintNodeInOrder(node.left);
    }
}