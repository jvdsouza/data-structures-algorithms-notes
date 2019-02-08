nemo = ['a', 'nemo', 'a']

def findNemo(array):
    for i in range(0, len(array)):
        print('running')
        if array[i].lower() == 'nemo':
            return 'found Nemo at ' + str(i)

print(findNemo(nemo))
