public class Solution {
    public long MaxTaxiEarnings(int n, int[][] rides)
    {
        //first need to sort by ending of rides
        Array.Sort(rides, (a,b) => a[1]-b[1]);
        int rideCount = rides.Length;

        long[] dp = new long[rideCount+1];

        for (int i = 0; i < rideCount; i++)
        {
            int startIndex = BinarySearch(rides,i,rides[i][0]);
            dp[i + 1] = Math.Max(dp[i], dp[startIndex] + rides[i][1] - rides[i][0] + rides[i][2]);
            
        }

        return dp[rideCount];
    }

    public int BinarySearch(int[][] rides, int high, int target)
    {
        int low = 0;

        while (low < high)
        {
            int mid = low + (high - low) / 2;
            if (rides[mid][1] > target)
            {
                high = mid;
            }
            else
            {
                low = mid + 1;
            }
        }

        return low;
    }
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