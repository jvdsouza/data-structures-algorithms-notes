class Node:
    def __init__(self, value, next=None):
        self.value: value
        self.next: next

class LinkedList:
    def __init__(self, value):
        self.head = {
            'value': value,
            'next': None
        }
        self.tail = self.head
        self.length = 1

    def append(self, value):
        newNode = Node(value)
        self.tail['next'] = newNode
        self.tail = newNode
        self.length += 1

        return self

    def prepend(self, value):
        newNode = Node(value)
        newNode.next = self.head
        self.head = newNode;
        self.length += 1

        return self

    def printList(self):
        array = []
        currentNode = self.head

        while currentNode != None:
            array += currentNode.value

        return array

myLinkedList = LinkedList(10)
print(myLinkedList)
# myLinkedList.append(5)
# myLinkedList.append(16)
# myLinkedList.prepend(1)
# print(printList())
