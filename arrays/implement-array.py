class MyArray:
    def __init__(self):
        self.length = 0
        self.data = {}

    def get(self, index):
        if self.length == 0:
            return 'undefined'
        return self.data[index]

    def push(self, item):
        self.data[self.length] = item
        self.length += 1
        return self.length

    def pop(self):
        if len(self.data) == 0:
            return 'nothing to delete'
        lastItem = self.data[len(self.length)-1]
        del self.data[len(self.length)-1]
        return lastItem

    def delete(index):
        if len(self.data) == 0:
            return 'nothing to delete'
        item = self.data[index]
        del self.data[index]
        return item

    def shiftItems(index):
        for i in range(index, self.length-1):
            self.data[i] = self.data[i+1]

        del self.data[self.length]
        self.length -= 1

newArray = MyArray()

print(newArray.length, newArray.data)
newArray.push('a')
print(newArray.length, newArray.data)
print(newArray.get(0))
