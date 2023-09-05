const display = document.getElementById('display')
let equation = ''
let lastInputWasOperator = false

const appendValue = function (value) {
  equation += value
  display.value = equation
  lastInputWasOperator = false
}

function appendOperator (operator) {
  if (!lastInputWasOperator) {
    equation += operator
    display.value = equation
    lastInputWasOperator = true
  }
}

function clearDisplay () {
  equation = ''
  display.value = ''
  lastInputWasOperator = false
}

function deleteLastCharacter () { 
  equation = equation.slice(0, -1)
  display.value = equation
  lastInputWasOperator = (equation.slice(-1) in {'+': true, '-': true, '*': true, '/': true}) 
}

function calculateResult () {
  try {
    equation = equation.replace(/%/g, '*0.01')
    const result = eval(equation)
    equation = result.toString()
    display.value = equation
    lastInputWasOperator = false
  } catch (err) {
    display.value = 'Error'
  }
}
