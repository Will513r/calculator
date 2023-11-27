let displayValue = ' ';
const deleteButton = document.getElementById("delete-button");
const addButton = document.getElementById("add-button");
const subtractButton = document.getElementById("subtract-button");

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = displayValue;
}

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function deleteCharacter() {
  var input = document.getElementById("display");
  var currentValue = input.value;

  if (currentValue.length > 0) {
    var newValue = currentValue.substring(0, currentValue.length - 1);
    displayValue = newValue;
  }

  updateDisplay();
}



function clearDisplay() {
  displayValue = " ";
  updateDisplay();
}

function calculate() {
  if (displayValue === " ") {
    return;
  }

  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}