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
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/1280px-Albert_Einstein_Head_cleaned.jpg",
  },
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
    photo:
      "https://static.tildacdn.com/tild3239-3766-4437-b563-313537636236/0fb7abcf7ca88b9f0d73.jpg",
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/960px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
    photo: "https://library.vladimir.ru/wp-content/uploads/2021/06/kyuri.jpeg",
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Portrait_Confused_With_Johannes_Kepler_1610.jpg/330px-Portrait_Confused_With_Johannes_Kepler_1610.jpg",
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Nikolaus_Kopernikus.jpg",
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkIa987JKYwxg1zNn_lfxuRFH2RJy93_mYviOco4R__nZ-InC3XLcvxXPUE95__up9knZ4aovKRE5_mp93rXMYrHyin6Sjwme_2xtpw&s=10",
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
    photo:
      "https://chemistry.herzen.spb.ru/wp-content/uploads/2020/04/%D0%9A%D1%8D%D1%82%D1%80%D0%B8%D0%BD-%D0%91%D0%BB%D0%BE%D0%B4%D0%B6%D0%B5%D1%82%D1%82.jpg",
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
    photo:
      "https://habrastorage.org/getpro/habr/upload_files/757/f05/af3/757f05af33a35b1e4e19a5f00ecb0d68.jpg",
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
    photo:
      "https://images.squarespace-cdn.com/content/v1/6859cdab1f0d903d21547e64/1751057746052-Y1PCR4KSDS1RXDP9N9P3/image-asset.jpeg",
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
    photo:
      "https://www.mpg.de/11718399/original-1771321239.jpg?t=ZXlKM2FXUjBhQ0k2T1RZMkxDSnZZbXBmYVdRaU9qRXhOekU0TXprNWZRPT0tLTAzZTNlNDQyY2I4YzM0YzQyODMwNTFiNzU5N2ZjYzc5MDRmOWJhNjk",
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Hammarstr%C3%B6m%2C_Hanna_%281829%E2%80%931914%29.png",
  },
];

function renderScientists(list) {
  const container = document.querySelector("#scientists-grid");
  if (!container) return;

  container.innerHTML = list
    .map(
      (scientist) => `
        <img src="${scientist.photo || ""}" alt="${scientist.name} ${scientist.surname}" />
      `,
    )
    .join("");
}

renderScientists(scientists);

// 1.
function _19thCentury(scientists) {
  const century = scientists.filter((scientist) => {
    return scientist.born >= 1801 && scientist.born <= 1900;
  });
  return century;
}

button1.addEventListener("click", () => {
  renderScientists(_19thCentury(scientists));
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
  renderScientists(AlphabetofScientists(scientists));
});

button3.addEventListener("click", () => {
  renderScientists(orderYears(scientists));
});

button4.addEventListener("click", () => {
  renderScientists([futureborned(scientists)]);
});

button5.addEventListener("click", () => {
  renderScientists(findMatchingLetters(scientists));
});

button6.addEventListener("click", () => {
  renderScientists(
    scientists.filter((scientist) => scientist.name === "Albert"),
  );
});

button7.addEventListener("click", () => {
  renderScientists(SurnamewithC(scientists));
});

button8.addEventListener("click", () => {
  renderScientists(deleteLetter(scientists));
});

button9.addEventListener("click", () => {
  const { theYoungest, theOldest } = which_scientist(scientists);
  renderScientists([theOldest, theYoungest]);
});
