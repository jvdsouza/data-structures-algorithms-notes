array1 = [0,3,4,31]
array2 = [4,6,30]

def mergeSortedArrays(arr1, arr2):
    if len(arr1) == 0:
        return arr2
    if len(arr2) == 0:
        return arr1
    if type(arr1) != list or type(arr2) != list:
        return 'not good'
    i = 0
    j = 0
    # combinedArray = arr1+arr2
    combinedArray = []
    # combinedArray.sort()
    arr1Item = arr1[i]
    arr2Item = arr2[j]

    while i < len(arr1) or j < len(arr2):
        print(arr1Item, arr2Item)
        if arr1Item < arr2Item:
            combinedArray.append(arr1Item)
            i += 1
            arr1Item = arr1[i]

        else:
            combinedArray.append(arr2Item)
            j += 1
            arr2Item = arr2[j]

    return combinedArray

print(mergeSortedArrays(array1, array2))
