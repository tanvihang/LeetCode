class Solution(object):

    

    def solve(self, board):
        """
        :type board: List[List[str]]
        :rtype: None Do not return anything, modify board in-place instead.
        """
        def dfs(r,c):
            if(r<0 or c<0 or r>= row or c>=col or board[r][c] != "O"):
                return
            
            board[r][c] = 'T'
            dfs(r+1,c)
            dfs(r-1,c)
            dfs(r,c+1)
            dfs(r,c-1)
        
        row = len(board)
        col = len(board[0])
        
        #1. change to T
        for i in range(row):
            for j in range(col):
                if(i == 0 or i == row-1 or j == 0 or j ==col-1):
                    dfs(i,j)

        #2. change board O to X
        for i in range(row):
            for j in range(col):
                if(board[i][j] == 'O'):
                    board[i][j] = 'X'

        for i in range(row):
            for j in range(col):
                if(board[i][j] == 'T'):
                    board[i][j] = 'O'
        

        

    def main():
        board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
        solution_instance = Solution()
        solution_instance.solve(board)
        print(board)


Solution.main()