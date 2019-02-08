class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.stack = []
  }

  peek(){
    if(this.stack.length === 0){
      return null
    }
    return this.stack[this.stack.length-1];
  }

  push(value){
    this.stack.push(value)
    return this
  }

  pop(){
    this.stack.pop();
    return this
  }

  isEmpty(){
    if (this.stack.length === 0){
      return true
    }
    return false
  }
}

list_to_stack = ['Discord', 'Udemy', 'Google']
