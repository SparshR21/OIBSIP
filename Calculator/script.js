const history = document.getElementById('history');
const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
  history.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const expression = display.value;
  try {
    const result = eval(expression);
    history.value = expression;
    display.value = result;
  } catch (error) {
    history.value = '';
    display.value = 'Error';
  }
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  const validKeys = /^[0-9+\-*/.=\b]$/;
  if (validKeys.test(key)) {
    if (key === 'Enter') {
      calculate();
    } else if (key === 'Escape') {
      clearDisplay();
    } else if (key === 'Backspace') {
      deleteLast();
    } else {
      appendToDisplay(key);
    }
  }
});
