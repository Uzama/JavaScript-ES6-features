// A closure is a function that remembers its outer variables and can access them
// in JavaScript, all functions are naturally closures

// Example 1
let name = 'Uzama'

let func = () => {
  console.log(name)
}
name = 'Zaid'
func()

// answer is Zaid

// Example 2
function makeWorker () {
  let name = 'Pete'
  let func = () => {
    console.log(name)
  }
  return func
}

name = 'John'

// create a function
let work = makeWorker()

// call it
work()
// answer is 'Pete'

// When code wants to access a variable – it is first searched for in the inner Lexical Environment, then in the outer one, then the more outer one and so on until the end of the chain
// A function gets outer variables as they are now; it uses the most recent values.

function makeCounter () {
  let count = 0
  return function () {
    return count++
  }
}

count = 9 // can not change from outside

let counter1 = makeCounter()
let counter2 = makeCounter()

console.log(counter1()) // 0
console.log(counter1()) // 1
console.log(counter2()) // 0åå

// There is no way. The counter is a local function variable, we can’t access it from the outside.
// For every call to makeCounter() a new function Lexical Environment is created, with its own counter. So the resulting counter functions are independent.
