// passing functions as values and using function expressions
function greet (sayHello, sayHi) {
  sayHello()
  sayHi()
}
// parameters are sayHello & sayHi are call callbacks or callbacks function

const sayHello = function () {
  console.log('Hello')
}

const sayHi = function () {
  console.log('Hi')
}

greet(sayHello, sayHi)

// Regular values like strings or numbers represent the data.
// A function can be perceived as an action.
// We can pass it between variables and run when we want.
