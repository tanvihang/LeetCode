public class Solution {
    private long fuel = 0;
    public long MinimumFuelCost(int[][] roads, int seats) {
        //create tree based on the array
        int node = roads.Length + 1;

        List<List<int>> tree = new List<List<int>>();

        for (int i =0; i<node;i++){
            tree.Add(new List<int>());
        }

        foreach(int[] r in roads){
            tree[r[0]].Add(r[1]);
            tree[r[1]].Add(r[0]);
        }

        bool[] visited = new bool[node];
        visited[0] = true;

        dfs(0,tree,visited,seats);
        return fuel;
    }

    private int dfs(int city, List<List<int>> tree, bool[] visited, int seats){
        int people = 1;

        foreach(int neighbor in tree[city]){
            if(!visited[neighbor]){
                visited[neighbor] = true;
                people+=dfs(neighbor,tree,visited,seats);
            }
        }

        if(city != 0){
            // 重点在于这边添加的人数
            fuel += (people + seats -1)/seats;
        }

        return people;
    }
}



public class Program{
    public static void Main(){
        //jagged array
        int[][] roads = {new int[]{0,1},new int[]{0,2}, new int[]{0,3}};
        int seats = 3;

        Solution solution = new Solution();
        long answer = solution.MinimumFuelCost(roads,seats);
        System.Console.WriteLine(answer);
    }
}