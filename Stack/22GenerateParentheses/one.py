class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        stack = []
        ans = []
        open = 0
        close = 0

        def backtrack(open,close):
            if(open == close == n):
                ans.append("".join(stack))
                return
            
            if(open<n):
                stack.append("(")
                backtrack(open+1,close)
                stack.pop()

            if(close<open):
                stack.append(")")
                backtrack(open,close+1)
                stack.pop()

        backtrack(open,close)
        return ans

    def main(self):
        n = 3
        ans = self.generateParenthesis(n)
        print(ans)

myInstance = Solution.main