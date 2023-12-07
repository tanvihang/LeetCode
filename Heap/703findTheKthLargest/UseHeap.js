function MinHeap(initData = []) {
    this.heap = initData;
    this.comparator = (a,b) => a-b;
}

MinHeap.prototype = {
    constructor: MinHeap,
    size() {
        return this.heap.length;
    },
    getMin() {
        return this.heap[0];
    },
    extractMin() {
        //顶就是最小的
        let size = this.size();
        if(size<=1){
            return this.heap[0]
        }else{
            //取头，弹尾
            let min = this.heap[0]
            this.heap[0] = this.heap.pop()
            this.minHeapify(0)
            return min
        }
    },
    push(num) {
        this.heap.push(num)
        //after pushing need to heapify, the pushed value go up
        let index = this.size()-1;
        while(index>0){
            let parent = (index) >> 1;
            this.swapPosition(index,parent)
            index = parent;
        }
    },
    swapPosition(index1, index2) {
        [this.heap[index2], this.heap[index1]] = [this.heap[index1], this.heap[index2]];
    },
    minHeapify(index) {
        //往下移动
        while(index<this.size()){

            let lc = index*2 +1;
            let rc = index*2 +2;

            let cur = this.heap[index], left = this.heap[lc], right = this.heap[rc]

            if(cur>left || cur>right){
                let targetIndex = left<right || right ===undefined?lc:rc;
                this.swapPosition(targetIndex,index)
                index = targetIndex;
            }else{
                break
            }

        }
    }
}
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.minHeap = new MinHeap();
    this.k = k;
    nums.forEach(num => {
        this.add(num);
    })
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let min = this.minHeap.getMin();

    if( min<val || this.minHeap.size() < this.k){
        //push inside
        this.minHeap.push(val)
        if(this.minHeap.size() > this.k){
            this.minHeap.extractMin();
        }
    }
};