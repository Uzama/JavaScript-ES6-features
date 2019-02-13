// simple and concise syntax for creating functions

// function with parameters
const sum = (a, b) => a + b
console.log(sum(3, 8))

// function with empty parameters
const sayHi = () => 'Hi'
console.log(sayHi())

// for multiple line arrow function, we use {}
const func = (a, b) => {
  c = a ** b
  return c
}

// Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result.
// With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.
