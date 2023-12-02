class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        set = {}
        nums.sort()
        ans = []
        first = 1
        length = len(nums)-1

        for i in range(length):
            cur = nums[i]

            #不去遍历一样的元素
            if(cur != nums[i-1] or first):
                first = 0
                left = i+1
                right = length
                while(left<right):
                    tmp = nums[left] + nums[right]
                    if(cur + tmp == 0):
                        ans.append([cur,nums[left],nums[right]])
                        # set[(cur,nums[left],nums[right])] = 1
                        # 再次裁剪
                        left+=1
                        while(nums[left] == nums[left-1] and left<right):
                            left+=1
                    elif(cur + tmp > 0):
                        right-=1
                    else:
                        left+=1
        
        return ans
    
    def playingWithSet(self):
        mySet = {}
        mySet[(1,2)] = 1
        mySet[(1,2)] = 1
        print(mySet[(1,2)])
        for set in mySet:
            print(list(set))

    def main(self):
        nums = [0,0,0,0]
        anss = self.threeSum(nums)
        # self.playingWithSet()
        print(anss)

aInstance = Solution()
aInstance.main()