class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    const hashVal = this._hash(key);
    if (!this.data[hashVal]){
      this.data[hashVal] = []
    }
    this.data[hashVal].push([key,value])
  }

  get(key) {
    const hashVal = this._hash(key);
    const allKeyValues = []
    if(this.data[hashVal]) {
      for(let i=0; i<this.data[hashVal].length; i++) {
        if (key === this.data[hashVal][i][0]) {
          allKeyValues.push(this.data[hashVal][i][1])
        }
      }
      return allKeyValues
    } else {
      return undefined
    }
  }

  keys() {
    const keysArray = [];
    for (let i=0; i<this.data.length; i++) {
      if (this.data[i]) {

        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 1)
// console.log(myHashTable.get('grapes'))
myHashTable.set('apples', 9)
// console.log(myHashTable.get('apples'))
myHashTable.set('oranges', 2)
console.log(myHashTable.keys());
