
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
    let flag = 0 
    let prev
    let front,back


    while(head){
        myList.push(head)
        head = head.next
    }

    while(myList.length > 0){
        if(flag == 0){
            front = myList.shift()
            head = front
            flag = 1
            back = myList.pop()   
        }else{
            front = myList.shift()
            back = myList.pop()
            flag = 2    
        }
        

        if(flag == 2)
        {
            prev.next = new ListNode()
            prev.next = front   
        }

        front.next = back
        prev = back

    }

    if(prev){
        prev.next = null
    }else{
        front.next = null
    }
    console.log(front)
    console.log(prev)
    showAll(head)

};


function showAll(head){
    let tmp = head
    while(tmp){
        console.log(tmp.val)
        tmp = tmp.next
    }
}

//head = [1,2,3,4]
let head = new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5,null)))))

reorderList(head)