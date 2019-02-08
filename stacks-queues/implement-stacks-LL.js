class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(){
    if(this.top === null){
      return null
    }
    return this.top.value;
  }

  push(value){
    let newNode = new Node(value);
    if (this.length === 0){
      this.bottom = newNode;
    }
    newNode.next = this.top
    this.top = newNode;
    this.length++;
    return newNode;
  }

  pop(){
    if (this.top === null){
      return null
    }
    if(this.length === 0) {
      this.bottom = null
    }
    this.top = this.top.next;
    this.length--;
    return this.top
  }

  isEmpty(){
    if (this.peek() === null){
      return true
    }
    return false
  }
}

list_to_stack = ['Discord', 'Udemy', 'Google']
const myStack = new Stack();
console.log(myStack.isEmpty())
console.log(myStack)
for(let i=0; i<list_to_stack.length; i++){
  myStack.push(list_to_stack[i])
}
console.log('myStack:', myStack, '\n')
myStack.pop();
console.log('myStack:', myStack, '\n')
console.log('peek:', myStack.peek())
console.log(myStack.isEmpty())
