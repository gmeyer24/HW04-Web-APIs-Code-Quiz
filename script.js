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
  // add more questions here with the same format
];
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const startButtonEl = document.getElementById("startButton");
const endGameEl = document.getElementById("endGame");
// const scoreBox = document.getElementById("scoreBox");
const submitButtonEl = document.getElementById("submit");
const playAgainsubmiButtonEl = document.getElementById("playAgain");

var score =  0;
var currentQuestion = 0;


endGameEl.setAttribute("class", "hide");
playAgainsubmiButtonEl.setAttribute("class", "hide");

// start quiz
function startQuiz() {
  var currentQuestion = 0;
  var score = 0;
  startButtonEl.setAttribute("class", "hide");
  loadQuestion();
  console.log("Start Quiz");
}

// need to create functions and methods
// pickcurrentQuestion - use random generator Math.random
function loadQuestion() {
  if (currentQuestion >= quizQuestions.length) {
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
  var selectedOption = event.target.innerHTML;
  console.log(selectedOption);
  if (selectedOption === quizQuestions[currentQuestion].answer) {
    console.log("correct");
    score++;
  } else {
    console.log("incorrect");
  }
  currentQuestion++;
  optionsEl.innerHTML = "";
  loadQuestion();
}

// show correct answer
function showResult() {}

// display final score and enter initials - stores high score in local storage
function displayScore() {
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
  var initialsInput = document.querySelector("#initials");
  event.preventDefault();
  console.log(initialsInput.value);
  console.log(score);

  endGameEl.setAttribute("class", "hide");
  playAgainsubmiButtonEl.setAttribute("class", "visible");
}

function playAgain(event) {
  event.preventDefault();
  score = 0;
  currentQuestion = 0;
  endGameEl.setAttribute("class", "hide");
  playAgainsubmiButtonEl.setAttribute("class", "hide");
  startButtonEl.setAttribute("class", "visible");
  loadQuestion();
  console.log("Play Again");
}

function highscorePage() {}

// create the timer and high score tracker - localstorage

startButtonEl.addEventListener("click", startQuiz);

optionsEl.addEventListener("click", selectOption);

submitButtonEl.addEventListener("click", submitScore);

playAgainsubmiButtonEl.addEventListener("click", playAgain);

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


// TO DO:
// make game start over
// log score to local storage and to new highscore page
// add timer and every wrong question take away 5 secs
// show if answer is right or wrong when guessing 
// css sheet
// readme doc 

// create input element and submit button and apend to endGameEl
// function submitScore(){
//     const initialsInput = document.getElementById("initial").value;
//     // check if exisiting scores in local storage
//     const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//     // add the new score to the highscores list
//     highScores.push({initialsInput, score: finalScore});
//     // store the updated highscores list in local storage
//     localStorage.setItem("highScores", JSON.stringify(highScores));

//     window.location.href = "highscores.html";
// };
