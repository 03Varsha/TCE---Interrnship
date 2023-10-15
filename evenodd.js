function checkOddEven() {
    const inputElement = document.getElementById("input");
    const resultElement = document.getElementById("result");
  
    const number = parseFloat(inputElement.value);
  
    if (isNaN(number)) {
      resultElement.textContent = "Please enter a valid number.";
    } else if (number % 2 === 0) {
      resultElement.textContent = "The number is even.";
    } else {
      resultElement.textContent = "The number is odd.";
    }
  }
  
  const checkButton = document.getElementById("checkButton");
  checkButton.addEventListener("click", checkOddEven);
