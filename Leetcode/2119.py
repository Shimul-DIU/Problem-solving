num = 526
if num==0:
    print(True)
else:
    t=str(num)
    s=t[::-1]
    i=0
    r=s.lstrip('0')
    t=r[::-1]
    if t==num:
        print(True)
    else:
        print(False)
    
