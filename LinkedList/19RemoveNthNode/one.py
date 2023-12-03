# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def print(self):
        cur = self
        while(cur):
            print(cur.val)
            cur = cur.next

class Solution(object):
    def removeNthFromEnd(self, head, n):

        def getLength(head):
            length = 0
            while(head):
                length += 1
                head = head.next
            return length
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        quick = head
        slow = head

        length = getLength(head)

        for i in range (n):
            quick = quick.next


        for i in range(n,length-1):
            quick = quick.next
            slow = slow.next

        slow.next = quick

        head.print()
        return head


        
    def main(self):
        # head = ListNode(1,ListNode(2,ListNode(3,ListNode(4,ListNode(5,None)))))
        head = ListNode(1,None)
        n = 1
        self.removeNthFromEnd(head,n)


myInstance = Solution()

myInstance.main()