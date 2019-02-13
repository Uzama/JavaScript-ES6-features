// sayHello() -- correct
// sayHello_() -- error

// function declaration
// A Function Declaration is usable in the whole script/code block.
function sayHello () {
  console.log('Hello')
}

// function expression
// A Function Expression is created when the execution reaches it and is usable from then on.
const sayHello_ = function () {
  console.log('Hello')
}

// sayHello() -- correct
// sayHello_() -- correct

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

// Functions are values. They can be assigned, copied or declared in any place of the code.
// If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
// If the function is created as a part of an expression, it’s called a “Function Expression”.
// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
// Function Expressions are created when the execution flow reaches them.
