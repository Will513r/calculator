let displayValue = ' ';

function updateDisplay(value) {
  const display = document.getElementById("display");
  display.textContent = displayValue;
}

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}
