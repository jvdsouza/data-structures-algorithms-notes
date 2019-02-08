// reference type
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

object1 === object2 //true
object1 === object3 //false

//reference types are non-primitive types, and are made by the programmer
//not made by the programming language

// context vs scope
function a() {
  let a = 'a'; //scope
}
console.log(this) //context

function b() {
  console.log(this);
}

const object4 = {
  a: function() {
    console.log(this);
  }
}

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name} I am ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`Weee I'm a ${this.type}`)
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.introduce()
wizard2.introduce()
wizard2.play()
