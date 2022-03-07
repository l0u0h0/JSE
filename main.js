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

