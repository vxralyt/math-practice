let score = 0;
let currentanswer = 0;
let total = 0;

function genQuestion() {
  let a = Math.floor(Math.random() * 20) + 24;
  let b = Math.floor(Math.random() * 20) + 14;

  currentanswer = a + b;
  document.getElementById("question").textContent = `What is ${a} + ${b}?`;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  let useranswer = Number(document.getElementById("answer").value);

  if (useranswer === currentanswer) {
    total++;
    score++;
    document.getElementById("feedback").textContent = "Correct! Great Job!";
  } else {
    total++;
    document.getElementById(
      "feedback"
    ).textContent = `That wasn't correct. The correct answer was ${currentanswer}.`;
  }
  document.getElementById("score").textContent = score;
  document.getElementById("total").textContent = total;
  document.getElementById("percent").textContent = score/total;
  genQuestion();
}

genQuestion();
