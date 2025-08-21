""" n=int(input())
j=[]
for i in range(n-1):
    j.append(int(input()))

for k in range(1,n+1):
    if k not in j:
        print(k) """
n=int(input())
nums=[]
for i in range(n):
    nums.append(int(input()))

print(nums.count(max(nums)))