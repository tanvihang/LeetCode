using System.Collections;

public class Solution {
    public int MinimumEffortPath(int[][] heights)
    {
        int M = heights.Length;
        int N = heights[0].Length;

        List<Tuple<int, int, int>> edges = new List<Tuple<int, int, int>>();
        
        //getting edges
        for (int i = 0; i < M; i++)
        {
            for (int j = 0; j < N; j++)
            {
                int loc = i * N + j;
                
                //vertical
                if (i < M - 1)
                {
                    edges.Add(new Tuple<int, int, int>(Math.Abs(heights[i+1][j] - heights[i][j]), loc, loc+N));
                }

                if (j < N - 1)
                {
                    edges.Add(new Tuple<int, int, int>(Math.Abs(heights[i][j+1] - heights[i][j]), loc, loc+1));
                }
            }
        }
        
        edges.Sort((x, y) =>
        {
            if (x.Item1 > y.Item1)
            {
                return 1;
            }

            if (x.Item1 < y.Item1)
            {
                return -1;
            }

            return 0;
        });

        DSU dsu = new DSU(M * N);
        foreach (var edge in edges)
        {
            //combine edges together from small to big and check if it is connected from start to end
            dsu.union(edge.Item2,edge.Item3);
            if (dsu.connected(0, M * N - 1))
            {
                return edge.Item1;
            }
        }

        return 0;
    }

    //Union set data structure
    public class DSU
    {
        private int[] pre;
        private int count;

        //initialize
        public DSU(int N)
        {
            count = N;
            pre = new int[N];

            //let them parent is same first
            for (var i = 0; i < N; i++)
            {
                pre[i] = i;
            }
        }
        
        //find function - (find its parent)
        //other than finding its parent, it also cut the length of him to parent
        public int find(int x)
        {
            if (x != pre[x])
            {
                pre[x] = find(pre[x]);
            }

            return pre[x];
        }
        
        //union function, in this section the parent of x will be parent of y
        public void union(int x, int y)
        {
            int parentX = find(x);
            int parentY = find(y);

            if (parentX == parentY)
            {
                return;
            }

            pre[parentX] = parentY;
            count--;
            return;
        }
        
        //connected function, check if two set is connected
        public bool connected(int x, int y)
        {
            return find(x) == find(y);
        }
        
    }
    
}

public class Program
{
    public static void Main(string[] args)
    {
        int[][] height = new int[3][];
        height[0] = new int[] { 1, 2, 2 };
        height[1] = new int[] { 3,8,2 };
        height[2] = new int[] { 5,3,5 };

        Solution solution = new Solution();
        var ans = solution.MinimumEffortPath(height);
        Console.WriteLine(ans);
    }
}