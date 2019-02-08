# //Google question
# //Find the first recurring value
# //Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]:
# //It should return 2
#
# //Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]:
# //It should return 1
#
# //Given an array = [2, 3, 4, 5]:
# //It should return undefined

def hash(value, length):
    if type(value) != int:
        return "error: this value is not an int"
    return str(value%length)

def firstReccur(array):
    seenVals = {}
    arrLen = len(array)

    for i in range(0, arrLen):
        hashVal = hash(array[i], arrLen)
        try:
            seenVals[hashVal]
            return array[i]
        except:
            seenVals[hashVal] = array[i]

    return 'undefined'

#tests
print(firstReccur([2, 5, 1, 2, 3, 5, 1, 2, 4]) == 2)
print(firstReccur([2, 1, 1, 2, 3, 5, 1, 2, 4]) == 1)
print(firstReccur([2, 5, 5, 1, 2, 3, 5, 1, 2, 4]) == 5)
print(firstReccur([2, 3, 4, 5]) == 'undefined')
