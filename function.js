// function declaration
function sayHello () {
  console.log('Hello')
}

// function expression
const sayHello_ = function () {
  console.log('Hello')
}

// also can do like below

function sayHi () {
  console.log('Hi')
}

const sayHi_ = sayHi

sayHi_()
sayHi()

// if you print the function
console.log(sayHi)
// output should be
// [Function: sayHi]
