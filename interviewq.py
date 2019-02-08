array1 = ['a', 'b', 'c', 'x']
array2 = ['r', 'y', 'a']

def findMatch(arr1, arr2):
    for item in arr1:
        if item in arr2:
            return True
    return False

print(findMatch(array1, array2))
