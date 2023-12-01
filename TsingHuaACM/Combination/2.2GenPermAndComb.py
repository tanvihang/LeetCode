# need to return the array of permutation eg: {ABC,BCA,CAB,...}
def gen_perm(n,m):

    curLev = 0
    path = []
    tag = [0] * 100

    def gen_perm_backtrack(curLev,n,m,path,tag):
        if(curLev == m):
            #print the path 
            print(path)
            return path

        for i in range(n):
            # 如果不属于在里面的
            if(not tag[i]):
                path.append(i+1)
                tag[i] = 1
                gen_perm_backtrack(curLev+1,n,m,path,tag)
                path.pop()
                tag[i] = 0

    return gen_perm_backtrack(curLev,n,m,path,tag)

def gen_comb(n,m):
    
    curLev = 0
    path = []
    startIndex = 0
    
    def gen_comb_backtrack(curLev,n,m,path,startIndex):

        if(curLev == m):
            print(path)
            return

        for i in range(startIndex,n):
            path.append(i+1)
            gen_comb_backtrack(curLev+1,n,m,path,i+1)
            path.pop()

    return gen_comb_backtrack(curLev,n,m,path,startIndex)


def gen_perm_swap(n,m):

    curLev = 0
    path = []
    tag = [0] * 100

    def gen_perm_swap_backtrack(curLev,n,m,path,tag):
        if(curLev == n):
            print(path)
            return
        
        for i in range(n):
            if(not tag[i]):
                tag[i] = 1
                path.append(i+1)
                gen_perm_swap_backtrack(curLev+1,n,m,path,tag)
                path.pop()
                tag[i] = 0
    
    return gen_perm_swap_backtrack(curLev,n,m,path,tag)

def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n*factorial(n-1)

def main():
    # gen_perm(3,2)

    # gen_comb(4,2)

    gen_perm_swap(4,2)

main()