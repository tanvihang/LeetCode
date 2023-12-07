var Trie = function() {
    this.NextTries = new Array(26)
    this.isEndOfNode = false
    
    for(let i =0;i<26;i++)
        this.NextTries[i]=null
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    //检查root里面是否有
    let tmpRoot = this

    for(let i = 0; i<word.length;i++){
        if(tmpRoot.NextTries[word.charCodeAt(i)-97] == null){
            tmpRoot.NextTries[word.charCodeAt(i)-97] = new Trie()
            tmpRoot = tmpRoot.NextTries[word.charCodeAt(i)-97]
        }else{
            tmpRoot = tmpRoot.NextTries[word.charCodeAt(i)-97]
        }
    }

    tmpRoot.isEndOfNode = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let tmpRoot = this

    for(let i = 0; i<word.length;i++){
        if(tmpRoot.NextTries[word.charCodeAt(i)-97] == null){
            return false
        }
        tmpRoot = tmpRoot.NextTries[word.charCodeAt(i)-97]
    }

    return tmpRoot.isEndOfNode
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let tmpRoot = this

    for(let i = 0; i<prefix.length;i++){
        if(tmpRoot.NextTries[prefix.charCodeAt(i)-97] == null){
            return false
        }
        tmpRoot = tmpRoot.NextTries[prefix.charCodeAt(i)-97]
    }

    return true

};


let root = new Trie()

root.insert("acc")

console.log(root.search("acc"))

console.log(root.startsWith("ac"))