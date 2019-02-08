# array = [1, 2, 3, 9], sum = 8
# array2 = [1, 2, 4, 4], sum = 8

# def bruteCheckSumInArray(array, sum):
#     for i in range(0, len(array)-1):
#         for j in range(i+1, len(array)):
#             if array[i]+array[j] == sum:
#                 return True
#     return False
#
# print(bruteCheckSumInArray([1, 2, 3, 9], 8))

def checkSumInArray(array, sum):
    complimentSet = set() #make an empty set

    for i in range(0, len(array)):
        if sum - array[i] in complimentSet:
            return True #return if the sum is achieved through the compliment
        else:
            complimentSet.add(sum - array[i]) #add the compliment to the set

    return False

print(checkSumInArray([1, 2, 4], 8))
