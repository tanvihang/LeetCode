public class Solution {
    public long MaxTaxiEarnings(int n, int[][] rides)
    {
        long ans = 0;
        long[] dp = Enumerable.Repeat(0L, n+1).ToArray();

        IList<int[]>[] list = new IList<int[]>[n+1];
        for (int i = 0; i <= n; i++)
        {
            list[i] = new List<int[]>();
        }
        
        foreach(int[] ride in rides)
        {
            list[ride[1]].Add(ride);   
        }

        for (int i = 1; i <= n; i++)
        {
            dp[i] = dp[i - 1];

            foreach (int[] ridee in list[i])
            {
                dp[i] = Math.Max(dp[i], dp[ridee[0]] + ridee[1] - ridee[0] + ridee[2]);
            }
        }

        return dp[n];
    }
    
    public int BinarySearch()
}

public class Program
{
    public static void Main(string[] args)
    {
        int n = 20;
        int[][] rides = new[]
        {
            new int[] { 1, 6, 1 },
            new int[] { 3, 10, 2 },
            new int[] { 10, 12, 3 },
            new int[] { 11, 12, 2 },
            new int[] { 12, 15, 2 },
            new int[] { 13, 18, 1 },
        };

        Solution solution = new Solution();
        long ans = solution.MaxTaxiEarnings(n, rides);
        Console.WriteLine(ans);
        
    }
}