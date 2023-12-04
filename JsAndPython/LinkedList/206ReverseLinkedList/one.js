// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

// 输入：head = [1,2]
// 输出：[2,1]

// 输入：head = []
// 输出：[]


//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let last = null
    let cur = head

    while(cur){
        const next = cur.next
        cur.next = last
        last = cur
        cur = next
    }


    //返回last是因为cur已经是null
    console.log(last)
};

//head = [1,2,3,4,5]
let head = new ListNode(1,new ListNode(2,new ListNode(3, new ListNode(4, new ListNode(5, )))))

reverseList(head)