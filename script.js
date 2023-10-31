// Create the quiz object.. properties: user option, correct answer, wrong ansswer, options[make into array], questions[create into array]
const quizQuestions = [
  {
    question: "Where is JavaScript used?",
    options: ["computer", "textbook", "notebook", "car"],
    answer: "computer",
  },
  {
    question: "What method can you use to make a string into an array?",
    options: ["includes", "split", "sort", "push"],
    answer: "split",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in JavaScript?",
    options: ["string", "array", "var", "const"],
    answer: "var",
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    options: ["const", "let", "var", "string"],
    answer: "const",
  },

  {
    question: "What type of language is JavaScript?",
    options: ["object-oriented", "object-base", "assembly", "english"],
    answer: "object-base",
  },

  // add more questions here with the same format if I want
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const startButtonEl = document.getElementById("startButton");
const endGameEl = document.getElementById("endGame");
const submitButtonEl = document.getElementById("submit");
const playAgainButtonEl = document.getElementById("playAgain");
const timerDisplay = document.getElementById("timer-display");

var timeLimitInSeconds = 30;
var timeRemaining = timeLimitInSeconds;
var timerInterval;

var score = 0;
var currentQuestion = 0;

endGameEl.setAttribute("class", "hide");
playAgainButtonEl.setAttribute("class", "hide");

// start quiz
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  timerDisplay.textContent = timeRemaining;
  startButtonEl.setAttribute("class", "hide");
  loadQuestion();
  startTimer();
  console.log("Start Quiz");
}

// create timer
function startTimer() {
  timerInterval = setInterval(function () {
    timeRemaining--;
    timerDisplay.textContent = timeRemaining;
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      timeOut();
    }
  }, 1000);
}

function timeOut() {
  // timer runs out
  alert("Time's up! Quiz is over.");
  clearInterval(timerInterval);
  displayScore();
}

// pickcurrentQuestion
function loadQuestion() {
  if (currentQuestion >= quizQuestions.length) {
    questionEl.textContent = "";
    optionsEl.innerHTML = "";
    displayScore();
    return;
  }
  questionEl.textContent = quizQuestions[currentQuestion].question;
  optionsEl.innerHTML = "";
  var ulEl = document.createElement("ul");
  for (let i = 0; i < quizQuestions[currentQuestion].options.length; i++) {
    var buttonsEl = document.createElement("button");
    ulEl.append(buttonsEl);
    buttonsEl.textContent = quizQuestions[currentQuestion].options[i];
  }
  optionsEl.append(ulEl);
}

// get userOption
// check for correct
// else wrong
function selectOption(event) {
  var selectedButton = event.target;
  var selectedOption = selectedButton.textContent;
  console.log(selectedOption);

  var feedback = document.createElement("div");
  if (selectedOption === quizQuestions[currentQuestion].answer) {
    console.log("correct");
    // show answer is correct
    feedback.textContent = "Correct!";
    score++;
  } else {
    console.log("incorrect");
    // show answer is incorrect
    feedback.textContent = "Incorrect!";
    // subtrack time for wrong answer, 10 sec
    timeRemaining -= 10;
    // make sure time doesn't go below 0
    timeRemaining = Math.max(0, timeRemaining);
  }
  optionsEl.appendChild(feedback);

  // Disable button clicks after selecting an option
  var buttons = document.querySelectorAll("#options button");
  buttons.forEach(function (button) {
    button.disabled = true;
  });

  // Delay for a few seconds before moving to the next question or ending the quiz
  setTimeout(function () {
    optionsEl.removeChild(feedback); // Remove the feedback
    currentQuestion++;
    optionsEl.innerHTML = ""; // Clear the options container
    loadQuestion(); // Load the next question or end the quiz
  }, 2000); // 2000 milliseconds (2 seconds) delay before moving to the next question
}

// display final score and enter initials - stores high score in local storage
function displayScore() {
  clearInterval(timerInterval);
  endGameEl.setAttribute("class", "visible");
  questionEl.setAttribute("class", "hide");
  optionsEl.setAttribute("class", "hide");
  var divEl = document.createElement("div");
  divEl.textContent = `Your score is ${Math.round(
    (score / quizQuestions.length) * 100
  )}% `;
  endGameEl.append(divEl);
}

function submitScore(event) {
  event.preventDefault();
  var initialsInput = document.querySelector("#initials").value;
  console.log(initialsInput);
  console.log(score);

  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.push({ initials: initialsInput, score: score });
  localStorage.setItem("highscores", JSON.stringify(highscores));

  endGameEl.setAttribute("class", "hide");
  playAgainButtonEl.setAttribute("class", "visible");

  // redirect to highscores page if you make this active
  // window.location.href = "highscores.html";
}

function playAgain(event) {
  event.preventDefault();
  console.log("Play Again");
  currentQuestion = 0;
  score = 0;
  timeRemaining = timeLimitInSeconds;
  clearInterval(timerInterval);
  console.log(
    "Current Question: ${currentQuestion}, Score: ${score}, Time Remaining: ${timeRemaining}"
  );
  optionsEl.innerHTML = "";
  endGameEl.setAttribute("class", "hide");
  playAgainButtonEl.setAttribute("class", "hide");
  startButtonEl.setAttribute("class", "visible");
  // startQuiz();
  // loadQuestion();
  location.reload();
}

startButtonEl.addEventListener("click", startQuiz);

optionsEl.addEventListener("click", selectOption);

submitButtonEl.addEventListener("click", submitScore);

playAgainButtonEl.addEventListener("click", playAgain);

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

