numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

def bubbleSort(array):
    arrayLen = len(array)

    while arrayLen > 0:
        for i in range(0, arrayLen-1):
            if array[i] > array[i+1]:
                array[i], array[i+1] = array[i+1], array[i]
        arrayLen -= 1

    return array

# print(bubbleSort(numbers))
# 
# def bubbleSortRecur(array):
#     arrayLen = len(array)
#     if arrayLen == 1:
#         return array
#     if array[0] > array[1]:
#         array[0], array[1] = array[1], array[0]
#         return bubbleSortRecur(array[1:arrayLen])
#
# print(bubbleSortRecur(numbers))
