//All Button Scripts
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteChar() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
  }
  
  function calculate() {
    let currentValue = document.getElementById('display').value;
    if (currentValue) {
      document.getElementById('display').value = eval(currentValue);
    }
  }
  