let display = document.getElementById('display');
let expression = '';

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function() {
    const value = this.getAttribute('data-value');
    
    if (value === 'C') {
    
      expression = '';
      display.value = '';
    } else if (value === '=') {
      
      try {
        expression = eval(expression);
        display.value = expression;
      } catch (error) {
        display.value = 'Error';
        expression = '';
      }
    } else {
      
      expression += value;
      display.value = expression;
    }
  });
});