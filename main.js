const double = function (x) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArrow = x => x * 2
console.log('doubleArrow', doubleArrow(7))

const doubleArrow1 = x => {return x * 2}
console.log('doubleArrow', doubleArrow1(7))

const Arrow = x => ({
  name: 'Heropy'
})
console.log('Arrow', Arrow())

const a = 7
function doble() {
  console.log(a * 2)
}
doble();

(function () {
  console.log(a * 2)
})();

(function () {
  console.log(a * 2)
}())

function timeout(cb) {
  setTimeout(() => {
    console.log('Heropy')
    cb()
  }, 3000)
}
timeout(() => {
  console.log('Done!')
})

const heropy = {
  firstName: 'Heropy',
  lastName: 'Park',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(heropy.getFullName())

function user(first, last) {
  this.firstName = first
  this.lastName = last
}
user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const heropy1 = new user('Heropy', 'Park')
const amy = new user('Amy', 'Clarke')
const neo = new user('Neo', 'Smith')

console.log(heropy1)
console.log(amy)
console.log(neo)
console.log(heropy1.getFullName())

const heropy2 = {
  name: 'Heropy',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
heropy2.normal()
heropy2.arrow()

const amy1 = {
  name: 'Amy',
  normal: heropy2.normal,
  arrow: heropy2.arrow
}
amy1.normal()
amy1.arrow()

function User1(name) {
  this.name = name
}
User1.prototype.normal = function () {
  console.log(this.name)
}
User1.prototype.arrow = function () {
  console.log(this.name)
}

const lee = new User1('lee')

lee.normal()
lee.arrow()

const timer = {
  name: 'uhan!',
  timeout: function () {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout()

const hello = {
  name: 'hello',
  normal() {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
hello.normal()
hello.arrow()

class Use {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
const one = new Use('one', 'Park')
const two = new Use('two', 'cow')
const three = new Use('three', 'Tree')

console.log(one)
console.log(two.getFullName())
console.log(three.getFullName())

class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}

const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}