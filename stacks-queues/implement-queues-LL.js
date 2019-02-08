class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first
  }

  enqueue(value){
    let newNode = new Node(value)

    if (this.length === 0){
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = this.last.next
    }
    this.length++;
    return newNode
  }

  dequeue(){
    if (this.length <= 1){
      this.last = null;
      return null;
    }
    const holdingFirst = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingFirst
  }

  isEmpty(){
    if (this.length === 0){
      return true;
    }
    return false;
  }
  //isEmpty;
}

const myQueue = new Queue();
console.log(myQueue);
console.log('add:', myQueue.enqueue('Joy'), '\n')
console.log(myQueue.last);
console.log('add:', myQueue.enqueue('Matt'), '\n')
console.log(myQueue.last);
console.log('add:', myQueue.enqueue('Pavel'), '\n')
console.log('peeking:', myQueue.peek());
console.log(myQueue);
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
