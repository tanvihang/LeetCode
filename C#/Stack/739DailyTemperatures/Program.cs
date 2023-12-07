namespace System;

public class Solution {
    public int[] DailyTemperatures(int[] temperatures) {
        Stack<int> myStack = new Stack<int>();

        int length = temperatures.Length;
        int[] answer = new int[length];

        myStack.Push(temperatures[0]);
        int count = 1;
        int j = 1;

        for(int i = 1;i<length;i++){
            System.Console.WriteLine(i);
            if(temperatures[i]>myStack.Peek()){
                myStack.Pop();
                if(j == i){
                    answer[j++] = count;
                }else{
                    answer[]
                }
                myStack.Push(temperatures[i]);
            }else{
                myStack.Push(temperatures[i]);
                j++;
                count++;
            }
        }

        PrintArr(answer);

        return temperatures;
    }
    
    public void PrintArr(int[] arr){
        for(int i = 0; i <arr.Length;i++){
            System.Console.Write(arr[i]+" ");
        }
    }
}


public class Program {
    public static void Main(){
        Solution solution = new Solution();
        int [] temperatures = {73,74,75,71,69,72,76,73};
        int [] ans = solution.DailyTemperatures(temperatures);
        Console.WriteLine(ans);
    }
}