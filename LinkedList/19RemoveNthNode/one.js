
// * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let last = null
    let cur = head

    while(cur){
        const next = cur.next
        cur.next = last
        last = cur
        cur = next  
    }

    head = last

    removeNth(head,n)
    showAll(head)

    function removeNth(head,n){
        let pre
        cur = head
        for(let i = 1; i<n;i++){
            pre = cur
            cur = cur.next
        }

        
        if(pre)
            if(cur)
                pre.next = cur.next 
        else{
            pre = cur
            cur = cur.next
            pre.next = cur.next
        }
    }
};

function showAll(head){
    let tmp = head
    while(tmp){
        console.log(tmp.val)
        tmp = tmp.next
    }
}

// let head = new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5,null)))))
let head = new ListNode(1,new ListNode(2,null))

let n = 1

removeNthFromEnd(head,n)