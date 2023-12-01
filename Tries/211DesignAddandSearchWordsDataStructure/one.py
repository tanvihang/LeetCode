class TrieNode():
    def __init__(self):
        # set of children
        self.children = {}
        self.isEndOfNode = False


class WordDictionary(object):

    def __init__(self): 
        self.root = TrieNode()

    def addWord(self, word):
        """
        :type word: str
        :rtype: None
        """
        cur = self.root

        for c in word:
            if(c not in cur.children):
                cur.children[c] = TrieNode()
            cur = cur.children[c]
        cur.isEndOfNode = True


    def dfs(self,index,word,root):

        cur = root

        #start looking from index
        for i in range(index,len(word)):
            c = word[i]
            if(c == "."):
                # search through all the possible using dfs
                for child in cur.children.values():
                    if(self.dfs(index+1,word,child)):
                        return True
                return False
            else:
                if(c not in cur.children):
                    return False
                cur = cur.children[c]
        return cur.isEndOfNode

    def search(self, word):
        """
        :type word: str
        :rtype: bool
        """
        cur = self.root
        return self.dfs(0,word,cur)




# Your WordDictionary object will be instantiated and called as such:
obj = WordDictionary()
obj.addWord("aat")
obj.addWord("bbt")
param_2 = obj.search(".bt")
print(param_2)