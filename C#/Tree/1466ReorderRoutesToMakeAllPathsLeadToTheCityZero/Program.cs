public class Solution {
    public int MinReorder(int n, int[][] connections) {

        // List<List<int[]>> tree = new List<List<int[]>>();
        IList<Tuple<int, int>>[] e = new IList<Tuple<int, int>>[n];
        
        int[] visited = Enumerable.Repeat(0, n - 1).ToArray();
        int count = 0;
        
        //creating tree
        for(int i =0; i < n-1 ;i++){
            // tree.Add(new List<int[]>());
            e[i] = new List<Tuple<int, int>>();
        }

        //appending node into tree
        foreach(int[] conn in connections){
            //1 at the second means need to change direction
            // tree[conn[0]].Add(new int[]{conn[1],1});
            // tree[conn[1]].Add(new int[]{conn[0],0});
            
            e[conn[0]].Add(new Tuple<int, int>(conn[1],1));
            e[conn[1]].Add(new Tuple<int, int>(conn[0],0));
        }

        Queue<int> queue = new Queue<int>();
        queue.Enqueue(0);

        while (queue.Count > 0)
        {
            int city = queue.Dequeue();
            visited[city] = 1;
            
            //push the city inside
            // foreach (int[] cityInNode in tree[city])
            // {
            //     //not visited
            //     if (visited[cityInNode[0]] == 0)
            //     {
            //         if (cityInNode[1] == 1)
            //         {
            //             count += 1;
            //         }
            //
            //         queue.Enqueue(cityInNode[0]);
            //         visited[cityInNode[0]] = 1;
            //     }
            // }

            foreach (Tuple<int, int> t in e[city])
            {
                if (visited[t.Item1] == 0)
                {
                    if (t.Item2 == 1)
                        count += 1;
                    queue.Enqueue(t.Item1);
                    visited[t.Item1] = 1;
                }
            }
        }
        

        return count;
    }
}

public class Program{
    public static void Main(){
        int n = 6;
        int[][] connections = {
            new int[]{1,0},
            new int[]{1,2},
            new int[]{3,2},
            new int[]{3,4}
        };

        Solution solution = new Solution();
        int ans = solution.MinReorder(n,connections);
        Console.WriteLine(ans);
    }
}