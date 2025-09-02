nums=[4,5,6,7,8,7,8]
uniq={}
for i in nums:
    if i not in uniq:
        uniq.update({i:1})
    else:
        uniq[i]+=1
ans=[]
for key,value in uniq.items():
    if value==2:
        ans.append(key)
print(ans) 