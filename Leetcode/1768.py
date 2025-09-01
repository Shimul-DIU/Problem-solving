ans=''
word1,word2='sd','erld'

if len(word1)<len(word2):
    for i in range(len(word1)):
        ans+=word1[i]+word2[i]
    for j in range(len(word1),len(word2)):
        ans+=word2[j]
elif len(word1)>len(word2):
    for i in range(len(word2)):
        ans+=word1[i]+word2[i]
    for j in range(len(word2),len(word1)):
        ans+=word1[j]
else:
    for i  in range(len(word1)):
        ans+=word1[i]+word2[i]
print(ans) 



