class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode
      return this
    }
    else{
      //assign a 'pointer' to the root to use to traverse the tree
      let currentNode = this.root
      //use the currentNode 'pointer' and traverse while the children are not null
      while(currentNode){
        //if the inserting value is greater than current node
        if (value > currentNode.value) {
          if (currentNode.right === null) { //if we reach the end of the tree
            currentNode.right = newNode
            return this
          } //end if
          currentNode = currentNode.right
        } else if (value < currentNode.value) { //if the inserting value is lesser than current node
          if (currentNode.left === null) { //if we reach the end of the tree
            currentNode.left = newNode
            return this
          } //end if
          currentNode = currentNode.left
        } //end if else if
      } //end while
    }
  }

  lookup(value){
    let currentNode = this.root

    while(currentNode){
      //if the value being searched is greater than current node
      if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (value < currentNode.value) { //if the value being searched is lesser than current node
        currentNode = currentNode.left
      } else if (value === currentNode.value) {
        return currentNode
      }
      //end if else if
    } //end while
    return null
  }

  remove(value) {
    //travel to Node
    //travel to right of node
    //traverse all the way down to the left
    //connect left and right of deleted node to the node way down to the left
    //make down to the left's parent node's left null
    if(!this.root) {
      return null
    }

    let currentNode = this.root
    let parentNode = null;

    while(currentNode) {
      if(value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value)
        //Option 1: no right child
        if (currentNode.right === null) {
            if (parentNode === null) { //if we're at root
              this.root = currentNode.left;
            } else {
              //if parent > curent value, make current left child
              //a child of the parent
              if (currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left
              }
              //if parent < current vlaue, make left child a right child of parent
              else if (currentNode.value > parentNode.value) {
                paretnNode.right = currentNode.left
              }
            }
        }
        //Option 2: right child which doesnt have a left child
        else if (currentNode.right.left === null) {
          if(parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            }
            //if parent<current, make right child a right child of parent
            else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        }
        if (currentNode.left === null) {
        //Option 3: right child that has a left child
          //find the Right child's left most child
          let leftMost = currentNode.right.left
          let leftMostParent = currentNode.right
          while(leftMost.left !== null) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }
          //Parent's left subtree is now leftMost's right subtree
          leftMostParent.left = leftMost.right;
          leftMost.left = currentNode.left;
          leftMost.right = currentNode.right;

          if(parentNode === null){
            this.root = leftMost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftMost
            }
          }
        }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)), '\n')
console.log(JSON.stringify(myTraverse(tree.root)), '\n')
// console.log(tree)
// console.log(tree.lookup(2))
// console.log(tree.lookup(0))

//     9
//  4     20
//1  6  15  170

function myTraverse(node) {
  const tree = {value: node.value};
  tree.left = node.left === null ? null:myTraverse(node.left)
  tree.right = node.right == null? null:myTraverse(node.right)
  return tree

  // if (node.left !== null) {
  //   console.log(node.left, '\n')
  //   tree.left = node.left
  //   myTraverse(node.left)
  // } else if (node.left === null) {
  //   tree.left = null
  // }
  // if (node.right !== null) {
  //   console.log(node.right, '\n')
  //   tree.right = node.right
  //   myTraverse(node.left)
  // } else if (node.right === null) {
  //   tree.right = null
  // }
  // return tree
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
