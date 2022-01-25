# number=[10,20,30,40,5,80]
# index=0
# min=number[0]
# while index<len(number):
#     if number[index]<min:
#         min=number[index]
#     index+=1
# print(min)

# s=input("enter your string")
# m=dict()
# for x in s:
#     if x not in m:
#         m[x]=0
#     m[x]+=1
# print(m)



# number = int(input("enter a number: "))
# sqrt = number ** 0.5
# print("square root:", sqrt)

# low=1
# high=10
# mid = low+(high-low)/2
# print(mid)


# prices=[7,1,5,3,6,4]
# mtn=prices[0]
# bp=0
# for i in range(1,len(prices)):
#     if bp<prices[i]-mtn:
#         bp=prices[i]-mtn
#     if mtn>prices[i]:
#         mtn=prices[i]
# print(bp)

nums=[1,1,2]
# c=0
# for i in range(len(num)):
#     if num[c]!=num[i]:
#         c+=1
#         num[c]=num[i]
# print(c)


# c=[]
# c2=0
# c3=[]
# for i in range(len(nums)):
#     if nums[i] not in c:
#         c2+=1
#         c.append(nums[i])
#     else:
#         c3.append(nums[i])
# print(c)

nums=[1,2,3,1]
for i in range(len(nums)):
    for j in range(0,i):
        if nums[i]==nums[j]:
            print(True)
print(False)
