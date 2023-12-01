from collections import deque

class Solution(object):
    def orangesRotting(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        q = deque()
        time = 0
        fresh = 0

        ROWS, COLS = len(grid), len(grid[0])

        for r in range(ROWS):
            for c in range(COLS):
                if(grid[r][c] == 1):
                    fresh+=1
                if(grid[r][c] == 2):
                    q.append([r,c])
                
        directions = [[1,0],[-1,0],[0,1],[0,-1]]

        # 这一段是每次一次过解决掉队列里面的东西
        while q and fresh>0:
            #一次过处理队列内的所有东西
            for i in range(len(q)):
                #q = [[1,2]]
                r,c = q.popleft()

                for rr,cc in directions:
                    newRow, newCol = rr+r, cc+c
                    if(newRow<0 or newCol < 0 or newRow == ROWS or newCol ==COLS
                       or grid[newRow][newCol] != 1):
                        continue
                    grid[newRow][newCol] = 2
                    q.append([newRow,newCol])
                    fresh-=1
            time+=1

        return time if fresh == 0 else -1

    def main():
        grid = [[2,1,1],[1,1,0],[0,1,1]]
        solutionInstance = Solution()
        solutionInstance.orangesRotting(grid)

Solution.main()