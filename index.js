const input1 = document.querySelector(".inp1");
const input2 = document.querySelector(".inp2");
input1.addEventListener("input", calculator);
input2.addEventListener("input", calculator);
let result = document.querySelector(".p");
const sume = document.querySelector(".plus");
const subtract = document.querySelector(".minus");
const multiply = document.querySelector(".multiplying");
const divide = document.querySelector(".dividying");
sume.addEventListener("click", calculator);
subtract.addEventListener("click", calculator);
multiply.addEventListener("click", calculator);
divide.addEventListener("click", calculator);

function calculator(event) {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);

  const target = event.target;
  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Введите корректное значение";
    return;
  }
  if (target === sume) {
    const fin = num1 + num2;
    result.textContent = `Результат: ${fin}`;
  } else if (target === subtract) {
    const sub = num1 - num2;
    result.textContent = `Результат: ${sub}`;
  } else if (target === multiply) {
    const mult = num1 * num2;
    result.textContent = `Результат: ${mult}`;
  } else if (target === divide && num2 !== 0) {
    const divi = num1 / num2;
    result.textContent = `Результат: ${divi}`;
  }
}

// (Камень, ножницы, бумага);

const getStoneBtn = document.querySelector(".stone");
const getScissorsBtn = document.querySelector(".scissors");
const getPaperBtn = document.querySelector(".paper");
const resultOfGame = document.querySelector(".result_game");
const computerAnswer = document.querySelector(".computer_answer");

const allAnswers = ["stone", "scissors", "paper"];

function randomAnswer(answer) {
  const computerChoice = Math.floor(Math.random() * 3);
  const computerAnswer = allAnswers[computerChoice];
  return computerAnswer;
}

getStoneBtn.addEventListener("click", (event) => {
  const computerChoice = randomAnswer();
  console.log(computerChoice);
});

getScissorsBtn.addEventListener("click", (event) => {
  const computerChoice = randomAnswer();
  console.log(computerChoice);
});

getPaperBtn.addEventListener("click", (event) => {
  const computerChoice = randomAnswer();
  console.log(computerChoice);
});
