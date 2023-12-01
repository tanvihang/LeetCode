var WordDictionary = function() {
    this.children = new Array(26)
    this.isEndOfWord = false

    for(let i = 0; i<26;i++)
        this.children[i] = null
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let cur = this
    let wl = word.length

    for(let i = 0; i < wl; i++){
        if(cur.children[word.charCodeAt(i) - 97] == null){
            //create children
            cur.children[word.charCodeAt(i) - 97] = new WordDictionary()
        }
        cur = cur.children[word.charCodeAt(i) - 97]
    }

    cur.isEndOfWord = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let cur = this
    let wl = word.length

    return dfs1(word,0,cur)

    function dfs1(word, index, root){
        if(root == null){
            return false
        }
        if(index = word.length){
            console.log("b")
            return root.isEndOfWord
        }
            
        if(word[index] != '.'){
            return root != null && dfs1(word,index+1,root.children[word.charCodeAt(i)-97])
        }
        else{
            for(let j = 0 ; j<26;j++){
                if(cur.children[j]){
                    if(dfs1(word,index+1,cur.children[j]))
                        {
                            return true
                        }          
                }
            }
        }
        return false
    }

    function dfs(node,startIndex){
        console.log("StartIndex: " + startIndex)
        
        cur = node
        for(let i = startIndex ; i < wl; i++){
            
            console.log(i)
            if(word[i] == '.')
            {
                for(let j = 0 ; j<26;j++){
                    if(cur.children[j]){
                        if(dfs(cur.children[j],i+1))
                            {
                                return true
                            }          
                    }
                }
                return false
            }
            else
            {
                if(cur.children[word.charCodeAt(i)-97] == null)
                   return false

                cur = cur.children[word.charCodeAt(i)-97]  
            }
        }

        console.log(startIndex)
        return cur.isEndOfWord
    }

};


// Your WordDictionary object will be instantiated and called as such:
var obj = new WordDictionary()
obj.addWord("bat")
var param_2 = obj.search("b..")
console.log(param_2)