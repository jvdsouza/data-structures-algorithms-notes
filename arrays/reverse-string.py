#Create a function that reverses a string:

def reverse(string):
    #check type
    if len(string) < 2 or type(string) != str:
        return 'not good'

    reverseStr = ''
    strLen = len(string)-1

    for i in range(strLen, -1, -1):
        reverseStr += string[i]

    return reverseStr

def reverse2(string):
    return string[::-1]

print(reverse('test'))
print(reverse2('test'))
