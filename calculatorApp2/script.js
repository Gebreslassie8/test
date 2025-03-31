/* script.js */
document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttonsContainer = document.querySelector('.calculator-buttons');

  // Append button value to display
  const appendToDisplay = (value) => {
    display.value += value;
  };

  // Clear the display
  const clearDisplay = () => {
    display.value = '';
  };

  // Calculate and show the result
  const calculateResult = () => {
    try {
      // Using eval for simplicity; in production consider a safer alternative
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  };

  buttonsContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() !== 'button') return;

    if (target.id === 'clear') {
      clearDisplay();
    } else if (target.id === 'equals') {
      calculateResult();
    } else {
      const value = target.getAttribute('data-value');
      appendToDisplay(value);
    }
  });
});