var quizContainer = document.getElementById("quizArea");
var answerFeedback = document.getElementById("answerFeedback");
var scoreDisplay = document.getElementById("scoreDisplay");
var completionScreen = document.getElementById("completionScreen");
var questionDisplay = document.getElementById("questionDisplay");
var timerDisplay = document.getElementById("timeRemaining");
var startButton = document.getElementById("beginButton");
var introScreen = document.getElementById("introScreen");
var highscoreSection = document.getElementById("highscoreSection");
var highscorePanel = document.getElementById("highscorePanel");
var userInitialsInput = document.getElementById("userInitials");
var initialsList = document.getElementById("initialsList");
var scoresList = document.getElementById("scoresList");
var submitScoreButton = document.getElementById("scoreSubmit");
var answerButtons = [document.getElementById("choiceOne"), document.getElementById("choiceTwo"), document.getElementById("choiceThree"), document.getElementById("choiceFour")];

// Define quiz questions
var quizQuestions = [
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choiceA: "script src='xxx.js'",
        choiceB: "script href='xxx.js'",
        choiceC: "script name='xxx.js'",
        choiceD: "script file='xxx.js'",
        correctAnswer: "a"
    },
    {
        question: "How do you create a function in JavaScript?",
        choiceA: "function myFunction()",
        choiceB: "function:myFunction()",
        choiceC: "function = myFunction()",
        choiceD: "function -> myFunction()",
        correctAnswer: "a"
    },
    {
        question: "Which of the following is correct about features of JavaScript?",
        choiceA: "It can not handle dates and time.",
        choiceB: "JavaScript is a lightweight, interpreted programming language.",
        choiceC: "JavaScript is not object-oriented.",
        choiceD: "JavaScript cannot be used for Networking applications.",
        correctAnswer: "b"
    },
    {
        question: "Which of the following function of String object combines the text of two strings and returns a new string?",
        choiceA: "add()",
        choiceB: "merge()",
        choiceC: "concat()",
        choiceD: "append()",
        correctAnswer: "c"
    },
    {
        question: "Which built-in method returns the length of the string?",
        choiceA: "length()",
        choiceB: "size()",
        choiceC: "index()",
        choiceD: "None of the above",
        correctAnswer: "a"
    },
    {
        question: "How do you declare a JavaScript variable?",
        choiceA: "var myVariable;",
        choiceB: "variable myVariable;",
        choiceC: "v myVariable;",
        choiceD: "var: myVariable;",
        correctAnswer: "a"
    }
];


// Global variables for quiz logic
var totalQuestions = quizQuestions.length;
var currentQuestionIndex = 0;
var remainingTime = 76;
var timer;
var score = 0;

// Displays the current question and choices
function displayQuestion() {
    if (currentQuestionIndex === totalQuestions) {
        return displayScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionDisplay.innerHTML = "<p>" + currentQuestion.question + "</p>";
    answerButtons[0].innerHTML = currentQuestion.choiceA;
    answerButtons[1].innerHTML = currentQuestion.choiceB;
    answerButtons[2].innerHTML = currentQuestion.choiceC;
    answerButtons[3].innerHTML = currentQuestion.choiceD;
}

// Initiates the quiz and starts the timer
function startQuiz() {
    completionScreen.style.display = "none";
    introScreen.style.display = "none";
    displayQuestion();
    timer = setInterval(function() {
        remainingTime--;
        timerDisplay.textContent = "Time left: " + remainingTime;
        if (remainingTime === 0) {
            clearInterval(timer);
            displayScore();
        }
    }, 1000);
    quizContainer.style.display = "block";
}

// Displays the final score and shows the completion screen
function displayScore() {
    quizContainer.style.display = "none";
    completionScreen.style.display = "flex";
    clearInterval(timer);
    userInitialsInput.value = "";
    scoreDisplay.textContent = "Your score: " + score + "/" + totalQuestions;
}

// Handles the score submission and updates the high score list
submitScoreButton.addEventListener("click", function() {
    if (!userInitialsInput.value) {
        alert("Please enter your initials.");
        return false;
    }
    var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    var newScore = { name: userInitialsInput.value.trim(), score: score };
    savedHighscores.push(newScore);
    localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
    displayHighScores();
});

// Displays the high scores section
//**review this function before send **
function displayHighScores() {
    completionScreen.style.display = "none";
    highscoreSection.style.display = "flex";
    highscorePanel.style.display = "block";
    initialsList.innerHTML = "";
    scoresList.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (var i = 0; i < highscores.length; i++) {
        var nameItem = document.createElement("li");
        var scoreItem = document.createElement("li");
        nameItem.textContent = highscores[i].name;
        scoreItem.textContent = highscores[i].score;
        initialsList.appendChild(nameItem);
        scoresList.appendChild(scoreItem);
    }
}

// Resets the quiz to allow another attempt
function restartQuiz() {
    highscoreSection.style.display = "none";
    introScreen.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    remainingTime = 76;
}

// Clears the high score list
function clearHighscores() {
    localStorage.clear();
    initialsList.innerHTML = "";
    scoresList.innerHTML = "";
}

// Verifies the selected answer and updates the quiz state
function verifyAnswer(selectedAnswer) {
    var correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++;
        answerFeedback.textContent = "Correct!";
    } else {
        remainingTime -= 15; // Penalize by reducing 15 seconds for wrong answer
        answerFeedback.textContent = "Wrong! 15 seconds penalized.";
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === totalQuestions) {
        displayScore();
    } else {
        displayQuestion();
    }
}
// Event listener to start the quiz
startButton.addEventListener("click", startQuiz);
