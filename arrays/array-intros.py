strings = ['a', 'b', 'c', 'd'];

#append
strings.append('e') #O(1), can be O(n) with moving memory allocation
print(strings)

#pop
strings.pop(); #O(1)
strings.pop();
print(strings)

#insert
strings.insert(0, 'x') #O(n)
print(strings)
strings.insert(2, 'alien') #O(n)
print(strings)
