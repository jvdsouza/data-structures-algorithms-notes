const strings = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes in a 32 bit system

//push
strings.push('e'); //O(1)

//pop
strings.pop(); //O(1)
strings.pop();

//unshift
strings.unshift('x'); //O(n)

//splice
strings.splice(2, 0, 'alien'); //O(n)

console.log(strings);
