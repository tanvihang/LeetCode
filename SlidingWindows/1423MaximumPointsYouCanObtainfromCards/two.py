class Solution(object):
    def maxScore(self, cardPoints, k):
        """
        :type cardPoints: List[int]
        :type k: int
        :rtype: int
        """

        minNum = 0
        sum = 0
        total = 0
        arrLen = len(cardPoints)

        j = arrLen-k

        for q in range (j):
            sum += cardPoints[q]
  
        
        total = sum
        minNum = sum
        front = 0

        for i in range (j,arrLen):
            sum = sum -  cardPoints[front] + cardPoints[i]
            minNum = min(sum,minNum)
            total+=cardPoints[i]
            front+=1

        return total-minNum

    def main(self):
        cardPoints = [1,2,3,4,5,6,1] 
        k = 3
        return self.maxScore(cardPoints, k)
    
myInstance = Solution()
myInstance.main()