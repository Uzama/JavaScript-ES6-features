// immediately-invoked function expressions

(function () {
  console.log('Hello')
}()) +
// correct

(() => {
  console.log('Hi')
})() + // TypeError: (intermediate value)(...) is not a function

// Ways to create IIFE

(function () {
  console.log('Parentheses around the function')
})() +

(function () {
  console.log('Parentheses around the whole thing')
}())

!(function () {
  console.log('Bitwise NOT operator starts the expression')
}()) +

(function () {
  console.log('Unary plus starts the expression')
}())
