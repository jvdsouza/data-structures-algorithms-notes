boxes = [1,2,3,4,5]

def pairArray(array):
    for item1 in array:
        for item2 in array:
            print(str(item1) + ', ' + str(item2))

pairArray(boxes)
