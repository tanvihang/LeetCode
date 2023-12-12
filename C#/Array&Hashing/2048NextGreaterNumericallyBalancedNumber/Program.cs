public class Solution {
    public int NextBeautifulNumber(int n) {

        //Max int 2137483647
        //Max beautiful number 122444
        //10^6 = 10000000
        for(int i = n+1; i <= 122444;i++){
            if(isBalance(i)){
                return i;
            }   
        }
    }

    public int isBalance(int num){
        int[] count = new int[10];

        while(x>0){
            count[x%10]++;
            x/=10;
        }

        for(int i = 0; i<10;i++){
            if(count[i]>0 && count[i] != i){
                return false;
            }
        }

        return true;
    }
}

public class Program{
    public static void Main(){
        int n = 1000;
        int ans = new Solution().NextBeautifulNumber(n);
    }
}