// 10 --> 5 --> 16
//
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }
class Node{
  constructor(value){
    this.value = value,
    this.next = null
    // this.prev = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      // prev: null
    }
    this.tail = this.head;
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)

    // newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length ++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)

    newNode.next = this.head;
    // this.head.prev = newNode;
    this.head = newNode;
    this.length ++;
    return this
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
      this.length++;
    }

    if (index === 0) {
      return prepend(value)
      this.length++;
    }

    let i = 0;
    let currentNode = this.head;
    let newNode = new Node(value)

    while (currentNode !== null || i <= index) {
      if (i !== index - 1) {
        currentNode = currentNode.next;
        i++;
      } else {
        newNode.value = value
        // newNode.prev = currentNode
        newNode.next = currentNode.next
        currentNode.next = newNode
        this.length++;
        return currentNode
      }
    }
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next
      // this.head.prev = null
    }

    let i = 0;
    let currentNode = this.head;

    while (currentNode !== null || i <= index) {
      if (i !== index - 1) {
        currentNode = currentNode.next;
        i++;
      } else {
        // currentNode.prev = currentNode
        currentNode.next = currentNode.next.next
        console.log(this)
        break
      }
    }
  }

  reverse() {
    if (!this.head.next) {
      return this
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next
    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp
    }
    this.head.next = null;
    this.head = first;
    return this.printList()
  }
}


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
// console.log(myLinkedList.printList())
myLinkedList.remove(2);
// console.log(myLinkedList.printList())
console.log(myLinkedList.reverse())
