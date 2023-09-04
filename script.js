const display = document.getElementById("display");
let equation = "";
let isOperatorClicked = false;

function appendValue(value) {
  equation += value;
  display.value = equation;
  isOperatorClicked = false;
}

function appendOperator(operator) {
  equation += operator;
  isOperatorClicked = true;
}

function clearDisplay() {
  equation = "";
  display.value = "";
}

function deleteLastCharacter() {
  equation = equation.slice(0, -1);
  display.value = equation;
}

function CalculateResult() {
  try {
    equation = equation.replace(/%/g, "*0.01");
    let result = eval(equation);
    equation = result.toString();
    display.value = equation;
  } catch (err) {
    display.value = "Error";
  }
}
