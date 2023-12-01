import random

#设某个游戏里面一个物品的存储方式是 <id, 稀有度>，请根据稀有度由大至小进行排序，若稀有度相同，则根据 ID 由小至大进行排序。
#输入 vector<vector<int>> bag
#返回 vector<vector<int>> bag

item = [{'id':1, "rarity": 99}]

for i in range(100):
    item.append({'id':i, 'rarity': random.randint(1,100)})

random.shuffle(item)

for a in item:
    print(a)


#trying insertion sort
def insertionSort(arr):
    for i in range(1,len(arr)):

        key = arr[i]
        j = i-1

        #排序稀有度
        while j>=0 and key['rarity'] < arr[j]['rarity']:
            arr[j+1] = arr[j]
            j-=1

        #排序id
        while j>=0 and key['rarity'] == arr[j]['rarity'] and key['id'] < arr[j]['id']:
            arr[j+1] = arr[j]
            j-=1

        arr[j+1] = key

insertionSort(item)

print("after sort")
for a in item:
    print(a)
        