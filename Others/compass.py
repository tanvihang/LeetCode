#给定两个数字 0 <= src, dst <= 360, 请计算旋转角度，答案范围为 -180 <= 答案 <= 180

#直观理解都是 dst-src

#1 0, >180 eg:src = 340, dst = 140; ans = 360 + diff = 160
#2 0, <180 eg: src = 330, dst = 30; ans = 360 + diff = 30
#3 1, >180; eg:src = 130, dst = 350; ans = 360 - diff = -140
#4 1, <180; eg: src = 150, dst = 180; ans = diff

src = int(input(" 0<=Src<=360 "))
dst = int(input(" 0<=Dst<=360 "))
ans = 0

#返回最靠近结果 0<=ans<=180


# if(diff > 0):
#     if(diff > 180):
#         ans = -(360-dst+src)
#     else:
#         ans = dst-src
# else:
#         ans = 360-src+dst

diff = dst - src

if(diff>180):
    print("a")
    diff = diff -360
elif(diff < -180):
    print("b")
    diff = diff +360

print(diff)