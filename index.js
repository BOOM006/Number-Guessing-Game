/*
let playerName;
do {
  playerName = prompt("Enter your name:").trim(); // Odstránenie medzier
} while (!playerName); // Ak používateľ nezadá meno, loop pokračuje

document.getElementById("welcome").textContent = `Welcome ${playerName}`;
*/

let minInput;
let maxInput;
let answer;

let guessHideLabel = document.getElementById("guessLabel");
let guessHideInput = document.getElementById("guessInput");
let guessHideButton = document.getElementById("guessSubmit");
let guessHideContainer = document.getElementById("guessContainer")

guessHideContainer.style.background = "none";
guessHideContainer.style.border = "none";


document.getElementById("numSubmit").onclick = function () {
  document.getElementById("output").textContent = "The game has started!";
  let minNumInput = document.getElementById("minNum");
  let maxNumInput = document.getElementById("maxNum");

  if (minNumInput.value === "" || maxNumInput.value === "") {
    document.getElementById("output").textContent = "Enter valid numbers!";
  } else {
    minInput = Number(minNumInput.value.trim());
    maxInput = Number(maxNumInput.value.trim());

    console.log(`Min number: ${minInput}`);
    console.log(`Max number: ${maxInput}`);

    if (minInput < maxInput) {
      document.getElementById("minOutput").textContent = `${minInput}`;
      minNumInput.style.display = "none";
      document.getElementById("maxOutput").textContent = `${maxInput}`;
      maxNumInput.style.display = "none";
      numSubmit.style.display = "none";

      guessHideContainer.style.display = "block";
      guessHideContainer.style.border = ""
      guessHideContainer.style.background = ""

      answer = Math.floor(Math.random() * (maxInput - minInput + 1)) + minInput;

      answer = Number(answer);

      guessHideLabel.style.display = "block";
      guessHideButton.style.display = "block";
      guessHideInput.style.display = "block";

      console.log(`Answer: ${answer}`);
    } else if (minInput > maxInput) {
      document.getElementById("output").textContent =
        "Minimal number can NOT be higher than the maximal number!";
    } else {
      document.getElementById("output").textContent = "Invalid number!";
    }

    let guessNumber;
    let attempts = 0;

    document.getElementById("guessSubmit").onclick = function () {
      let guessNumberInput = document.getElementById("guessInput");

      guessNumber = Number(guessNumberInput.value.trim());
      console.log(`Guessed number: ${guessNumber}`);

      if (guessNumber <= maxInput && guessNumber >= minInput) {
        attempts++;

        if (guessNumber < answer) {
          document.getElementById("output").textContent = "Too low! Try again!";
        } else if (guessNumber > answer) {
          document.getElementById("output").textContent =
            "Too high! Try again!";
        } else {
          document.getElementById(
            "output"
          ).textContent = `Congratulations! Attempts: ${attempts}!`;
        }
      } else {
        document.getElementById(
          "output"
        ).textContent = `Enter a number within the range!`;
      }
    };

    document.getElementById("resetButton").onclick = function () {
      document.getElementById("output").textContent =
        "The game has been reset!";
      minInput = null;
      maxInput = null;
      answer = null;

      guessHideLabel.style.display = "none";
      guessHideButton.style.display = "none";
      guessHideInput.style.display = "none";
      guessHideContainer.style.border = "none";
      guessHideContainer.style.background = "none";


      console.log(`Min number: ${minInput}`);
      minNumInput.style.display = "block";
      minNumInput.value = "";
      document.getElementById("minOutput").textContent = "";
      console.log(`Max number: ${maxInput}`);
      maxNumInput.style.display = "block";
      maxNumInput.value = "";
      document.getElementById("maxOutput").textContent = "";
      console.log(`Answer: ${answer}`);
      numSubmit.style.display = "block";

      document.getElementById("guessSubmit").onclick = null;
      document.getElementById("guessInput").value = "";
    };
  }
};
