
//  * Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    let myList = new Array()

    let ans = new Array()

    while(head){
        myList.push(head)
        head = head.next
    }

    console.log(myList.length)


};


//head = [1,2,3,4]
let head = new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,null))))

reorderList(head)