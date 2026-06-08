// const input1 = document.querySelector(".inp1");
// const input2 = document.querySelector(".inp2");
// input1.addEventListener("input", calculator);
// input2.addEventListener("input", calculator);
// let result = document.querySelector(".p");
// const sume = document.querySelector(".plus");
// const subtract = document.querySelector(".minus");
// const multiply = document.querySelector(".multiplying");
// const divide = document.querySelector(".dividying");
// sume.addEventListener("click", calculator);
// subtract.addEventListener("click", calculator);
// multiply.addEventListener("click", calculator);
// divide.addEventListener("click", calculator);

// function calculator(event) {
//   const num1 = parseFloat(input1.value);
//   const num2 = parseFloat(input2.value);

//   const target = event.target;
//   if (isNaN(num1) || isNaN(num2)) {
//     result.textContent = "Введите корректное значение";
//     return;
//   }
//   if (target === sume) {
//     const fin = num1 + num2;
//     result.textContent = `Результат: ${fin}`;
//   } else if (target === subtract) {
//     const sub = num1 - num2;
//     result.textContent = `Результат: ${sub}`;
//   } else if (target === multiply) {
//     const mult = num1 * num2;
//     result.textContent = `Результат: ${mult}`;
//   } else if (target === divide && num2 !== 0) {
//     const divi = num1 / num2;
//     result.textContent = `Результат: ${divi}`;
//   }
// }

// (Камень, ножницы, бумага);

// const getStoneBtn = document.querySelector(".stone");
// const getScissorsBtn = document.querySelector(".scissors");
// const getPaperBtn = document.querySelector(".paper");
// const resultOfGame = document.querySelector(".result_game");
// const computerAnswer = document.querySelector(".computer_answer");
// const computerWins = document.querySelector(".computer");
// const usersWins = document.querySelector(".user");

// const allAnswers = ["stone", "scissors", "paper"];

// function randomAnswer(answer) {
//   const computerChoise = Math.floor(Math.random() * 3);
//   const computerAnswer = allAnswers[computerChoise];
//   return computerAnswer;
// }

// let counterUser = 0;
// let counterComputer = 0;

// getStoneBtn.addEventListener("click", (event) => {
//   const computerChoise = randomAnswer();
//   console.log(computerChoise);
//   const userChoise = allAnswers[0];
//   if (computerChoise === allAnswers[2]) {
//     resultOfGame.textContent = "you lose!:(";
//     counterComputer += 1;
//     computerWins.innerHTML = counterComputer;
//   }
//   if (computerChoise === allAnswers[1]) {
//     resultOfGame.textContent = "you win!:)";
//     counterUser += 1;
//     usersWins.innerHTML = counterUser;
//   }
//   if (computerChoise === allAnswers[0]) {
//     resultOfGame.textContent = "draw";
//   }
// });
// getScissorsBtn.addEventListener("click", (event) => {
//   const computerChoise = randomAnswer();
//   console.log(computerChoise);
//   const userChoise = allAnswers[1];
//   if (computerChoise === allAnswers[0]) {
//     resultOfGame.textContent = "you lose!:(";
//     counterComputer += 1;
//     computerWins.innerHTML = counterComputer;
//   }
//   if (computerChoise === allAnswers[2]) {
//     resultOfGame.textContent = "you win!:)";
//     counterUser += 1;
//     usersWins.innerHTML = counterUser;
//   }
//   if (computerChoise === allAnswers[1]) {
//     resultOfGame.textContent = "draw";
//   }
// });
// getPaperBtn.addEventListener("click", (event) => {
//   const computerChoise = randomAnswer();
//   console.log(computerChoise);
//   const userChoise = allAnswers[2];
//   if (computerChoise === allAnswers[2]) {
//     resultOfGame.textContent = "draw";
//   }
//   if (computerChoise === allAnswers[0]) {
//     resultOfGame.textContent = "you win!:)";
//     counterUser += 1;
//     usersWins.innerHTML = counterUser;
//   }
//   if (computerChoise === allAnswers[1]) {
//     resultOfGame.textContent = "you lose!:(";
//     counterComputer += 1;
//     computerWins.innerHTML = counterComputer;
//   }
// });
// const minutes_inp = document.querySelector(".minutes_inp");
// const p_days = document.querySelector(".days_p");
// minutes_inp.addEventListener("input", converter);
// function converter(event) {
//   const number_input = parseFloat(minutes_inp.value);
//   if (isNaN(number_input)) {
//     return;
//   }
//   const days = Math.floor(number_input / 1440);
//   const ostacha = Math.floor(number_input % 1440);
//   const hours = Math.floor(ostacha / 60);
//   const minutes = Math.floor(number_input % 60);
//   // console.log(days);
//   // console.log(ostacha);
//   p_days.textContent = `${days}днів ${hours} годин ${minutes} хвилин`;
//   console.log(hours);
//   console.log(minutes);
// }
const button1 = document.querySelector(".button-1");
const button2 = document.querySelector(".button-2");
const button3 = document.querySelector(".button-3");
const button4 = document.querySelector(".button-4");
const button5 = document.querySelector(".button-5");
const button6 = document.querySelector(".button-6");
const button7 = document.querySelector(".button-7");
const button8 = document.querySelector(".button-8");
const button9 = document.querySelector(".button-9");

const scientists = [
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

// 1.
function _19thCentury(scientists) {
  const century = scientists.filter((scientist) => {
    return scientist.born >= 1801 && scientist.born <= 1900;
  });
  return century;
}

button1.addEventListener("click", () => {
  const result = _19thCentury(scientists);
  console.log(result);
});
// 2. Сортировка по алфавиту
function AlphabetofScientists(scientists) {
  // Добавили [...scientists], чтобы sort не ломал исходный массив
  const result = [...scientists].sort((a, b) => {
    const name_a = a.name;
    const name_b = b.name;
    return name_a.localeCompare(name_b);
  });
  return result;
}

// 3. Сортировка по количеству прожитых лет
function orderYears(scientists) {
  return [...scientists].sort((a, b) => {
    const lifeYearsA = a.dead - a.born;
    const lifeYearsB = b.dead - b.born;
    return lifeYearsA - lifeYearsB;
  });
}

// 4. Родился позже всех
function futureborned(scientists) {
  // Добавили [...scientists], чтобы sort не ломал исходный массив
  const orderYearsArr = [...scientists].sort((a, b) => {
    return b.born - a.born;
  });
  return orderYearsArr[0];
}

// 5. Совпадают первые буквы имени и фамилии
function findMatchingLetters(scientists) {
  return scientists.filter((scientist) => {
    const firstLetterName = scientist.name[0].toLowerCase();
    const firstLetterSurname = scientist.surname[0].toLowerCase();
    return firstLetterName === firstLetterSurname;
  });
}

// 6. Год рождения Альберта Эйнштейна
function findtheBirth(scientists) {
  // Твоя логика с reduce сохранена
  const birth = scientists.reduce((accumulator) => {
    const AlbertsBirth = scientists[0].born;
    return AlbertsBirth;
  }); // добавлен стартовый аккумулятор для надежности reduce
  return `Альберт народився у ${birth} році`;
}

// 7. Фамилии на "С"
function SurnamewithC(scientists) {
  const findLetter = scientists.filter((scientist) => {
    return scientist.surname[0] == "C";
  });
  return findLetter; // Изменили console.log на return, чтобы вернуть результат в кнопку
}

// 8. Удалить ученых на букву "А"
function deleteLetter(scientists) {
  const result = scientists.filter((scientist) => {
    const deleteA = scientist.name[0] == "A";
    if (deleteA) {
      return false;
    } else {
      return true;
    }
  });
  return result;
}

// 9. Самый старый и самый молодой
function which_scientist(scientists) {
  const oldest = scientists.reduce((max, scientist) => {
    const currentAge = scientist.dead - scientist.born;
    const maxAge = max.dead - max.born;
    if (currentAge > maxAge) {
      return scientist;
    } else {
      return max;
    }
  });

  const youngest = scientists.reduce((min, scientist) => {
    const currentAge = scientist.dead - scientist.born;
    const minAge = min.dead - min.born;
    if (currentAge < minAge) {
      return scientist;
    } else {
      return min;
    }
  });

  return {
    theYoungest: youngest,
    theOldest: oldest,
  };
}

// ==========================================
// НАВЕШИВАНИЕ ОБРАБОТЧИКОВ КЛИКА
// ==========================================

button2.addEventListener("click", () => {
  const result = AlphabetofScientists(scientists);
  console.log("Вчені за алфавітом:", result);
});

button3.addEventListener("click", () => {
  const result = orderYears(scientists);
  console.log("Вчені за кількістю прожитих років:", result);
});

button4.addEventListener("click", () => {
  const result = futureborned(scientists);
  console.log("Вчений, який народився найпізніше:", result);
});

button5.addEventListener("click", () => {
  const result = findMatchingLetters(scientists);
  console.log("Вчені з однаковими першими літерами імені та прізвища:", result);
});

button6.addEventListener("click", () => {
  const result = findtheBirth(scientists);
  console.log(result);
});

button7.addEventListener("click", () => {
  const result = SurnamewithC(scientists);
  console.log("Вчені, прізвища яких починаються на 'С':", result);
});

button8.addEventListener("click", () => {
  const result = deleteLetter(scientists);
  console.log("Список вчених без літери 'А' в імені:", result);
});

button9.addEventListener("click", () => {
  const result = which_scientist(scientists);
  console.log("Наймолодший та найстаріший вчені:", result);
});
