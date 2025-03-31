/* script.js */
document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttons = document.querySelector('.calculator-buttons');

  // Append value to display
  const appendToDisplay = (value) => {
    display.value += value;
  };

  // Clear display
  const clearDisplay = () => {
    display.value = '';
  };

  // Calculate result
  const calculateResult = () => {
    try {
      // Use eval for simple calculation; in a real app, consider a safer alternative.
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  };

  buttons.addEventListener('click', (e) => {
    const target = e.target;

    // If a button was clicked
    if (target.tagName.toLowerCase() === 'button') {
      if (target.id === 'clear') {
        clearDisplay();
      } else if (target.id === 'equals') {
        calculateResult();
      } else {
        const value = target.getAttribute('data-value');
        appendToDisplay(value);
      }
    }
  });
});