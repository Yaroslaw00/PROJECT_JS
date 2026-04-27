const input1 = document.querySelector(".inp1");
const input2 = document.querySelector(".inp2");
const result = document.querySelector(".p");

function calculator() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2;
    result.textContent = `Результат: ${sum}`;
  } else {
    result.textContent = "Введите оба числа";
  }
}

input1.addEventListener("input", calculator);
input2.addEventListener("input", calculator);
