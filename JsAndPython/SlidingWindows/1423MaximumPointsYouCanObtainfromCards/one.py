class Solution(object):
    def maxScore(self, cardPoints, k):
        """
        :type cardPoints: List[int]
        :type k: int
        :rtype: int
        """
        left = 0
        right = len(cardPoints)

        if(k == right):
            return sum(cardPoints)
        
        right -=1

        tmpl =0
        tmpr = right

        Sum = 0
        Sum1 = 0
        count = 0

        while True:
            if(count == k):
                break
            leftVal = cardPoints[left]
            rightVal = cardPoints[right]
            leftVal1 = cardPoints[tmpl]
            rightVal1 = cardPoints[tmpr]

            if(leftVal>=rightVal):
                Sum += leftVal
                Sum1 += cardPoints[tmpr]
                left+=1
                tmpr-=1
            else:
                Sum+=rightVal
                Sum1 += cardPoints[tmpl]
                right-=1
                tmpl+=1
            count+=1

        return max(Sum,Sum1)

    def main(self):
        cardPoints = [1,79,80,1,1,1,200,1]
        k = 3
        max = self.maxScore(cardPoints,k)
        print(max)

myInstance = Solution()
myInstance.main()