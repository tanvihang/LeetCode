using System.Reflection;

public class Solution {
    public int[] DailyTemperatures(int[] temperatures) {
        return temperatures;
    }
}

public class Program{
    public static void Main(){
        Console.WriteLine("Main");

        Solution mySolution = new Solution();

        int [] arr = new int[2];
        arr[0] = 2;
        arr[1] = 1;

        int[] ans = mySolution.DailyTemperatures(arr);
        System.Console.WriteLine(ans[0]);
    }
}