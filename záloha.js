let player;
do {
  player = prompt("Enter your name:").trim(); // Odstránenie medzier
} while (!player); // Ak používateľ nezadá meno, loop pokračuje

document.getElementById("welcome").textContent = `Hello ${player}!`;

let minNum, maxNum; // Premenné musia byť globálne
let answer; // Premenná answer musí byť globálna

document.getElementById("NumSubmit").onclick = function () {
  let inputMinField = document.getElementById("minNum");
  let inputMaxField = document.getElementById("maxNum");

  let minInput = inputMinField.value.trim(); // Odstránenie whitespace
  let maxInput = inputMaxField.value.trim();

  // Overenie, či používateľ zadal hodnotu
  if (minInput === "" || maxInput === "") {
    document.getElementById("output").textContent = "Enter the numbers";
    return; // Ukončí funkciu, aby ďalej nespracovávalo neplatné dáta
  }

  minNum = Number(minInput);
  maxNum = Number(maxInput);

  if (minNum < maxNum) {
    document.getElementById("minOutput").textContent = `${minNum}`;
    inputMinField.style.display = "none";
    this.style.display = "none"; // Skryje submit button

    document.getElementById("maxOutput").textContent = `${maxNum}`;
    inputMaxField.style.display = "none";
    this.style.display = "none"; // Skryje submit button

    checkAndGenerate(); // Skontroluje, či môžeme vypočítať answer
  } else {
    document.getElementById("output").textContent =
      "Minimal number can NOT be higher than maximal number!";
    return;
  }
};

function checkAndGenerate() {
  if (minNum !== undefined && maxNum !== undefined) {
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; // Vytvorím odpoveď globálne
    console.log(answer); 
  }
}

let attempts = 0;
let running = true;
let guess;

document.getElementById("guessSubmit").onclick = function () {
  guess = Number(document.getElementById("guessInput").value); // Načítanie hodnoty ako číslo

  if (isNaN(guess)) {
    document.getElementById("answerOutput").textContent =
      "Please enter a valid number";
    return; // Nezapočíta sa ako pokus
  }

  if (guess < minNum && guess > maxNum) {
    document.getElementById("answerOutput").textContent =
      "Please enter a number within range!";
    return; // Nezapočíta sa ako pokus
  }

  console.log(guess);

  attempts++; // Započíta pokus

  if (guess === answer) {
    document.getElementById(
      "output"
    ).textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    running = false; // Ukončí hru
  } else if (guess < answer) {
    document.getElementById("output").textContent = "Too low! Try again.";
  } else {
    document.getElementById("output").textContent =
      "Too high! Try again.";
  }
};

/*
const result = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
  guess = Number(guess);

     
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Number is too LOW!");
    } else if (guess > answer) {
      window.alert("Number is too HIGH!");
    } else {
      window.alert(
        `CORRECT! The answer was ${answer}. It took you ${attempts} attempts `
      );
      running = false;
    }
  }

}

*/
