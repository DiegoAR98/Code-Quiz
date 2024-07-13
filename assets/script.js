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
        question: "Inside which HTML element do we put the JavaScript?",
        choiceA: "<script>",
        choiceB: "<scripting>",
        choiceC: "<javascript>",
        choiceD: "<js>",
        correctAnswer: "a"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?\n<p id='demo'>This is a demonstration.</p>",
        choiceA: "document.getElementById('demo').innerHTML = 'Hello World!';",
        choiceB: "document.getElement('p').innerHTML = 'Hello World!';",
        choiceC: "document.getElementByName('p').innerHTML = 'Hello World!';",
        choiceD: "#demo.innerHTML = 'Hello World!';",
        correctAnswer: "a"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        choiceA: "The <head> section",
        choiceB: "The <body> section",
        choiceC: "Both the <head> section and the <body> section are correct",
        choiceD: "None of the above",
        correctAnswer: "c"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choiceA: "<script src='xxx.js'>",
        choiceB: "<script name='xxx.js'>",
        choiceC: "<script href='xxx.js'>",
        choiceD: "<script file='xxx.js'>",
        correctAnswer: "a"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        choiceA: "True",
        choiceB: "False",
        correctAnswer: "b"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choiceA: "alert('Hello World');",
        choiceB: "msg('Hello World');",
        choiceC: "alertBox('Hello World');",
        choiceD: "msgBox('Hello World');",
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
        question: "How do you call a function named 'myFunction'?",
        choiceA: "myFunction()",
        choiceB: "call myFunction()",
        choiceC: "call function myFunction()",
        choiceD: "myFunction.call()",
        correctAnswer: "a"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choiceA: "if (i == 5)",
        choiceB: "if i = 5 then",
        choiceC: "if i == 5 then",
        choiceD: "if i = 5",
        correctAnswer: "a"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choiceA: "if (i != 5)",
        choiceB: "if (i <> 5)",
        choiceC: "if i <> 5",
        choiceD: "if i =! 5 then",
        correctAnswer: "a"
    },
    {
        question: "How does a WHILE loop start?",
        choiceA: "while (i <= 10; i++)",
        choiceB: "while i = 1 to 10",
        choiceC: "while (i <= 10)",
        choiceD: "while (i >= 10)",
        correctAnswer: "c"
    },
    {
        question: "How does a FOR loop start?",
        choiceA: "for (i = 0; i <= 5; i++)",
        choiceB: "for (i <= 5; i++)",
        choiceC: "for (i = 0; i <= 5)",
        choiceD: "for i = 1 to 5",
        correctAnswer: "a"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        choiceA: "//This is a comment",
        choiceB: "'This is a comment",
        choiceC: "<!--This is a comment-->",
        choiceD: "/* This is a comment */",
        correctAnswer: "a"
    },
    {
        question: "How to insert a comment that has more than one line?",
        choiceA: "/*This comment has\nmore than one line*/",
        choiceB: "<!--This comment has\nmore than one line-->",
        choiceC: "//This comment has\nmore than one line//",
        choiceD: "// This comment has\n// more than one line",
        correctAnswer: "a"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choiceA: "var colors = ['red', 'green', 'blue']",
        choiceB: "var colors = 'red', 'green', 'blue'",
        choiceC: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        choiceD: "var colors = (1:'red', 2:'green', 3:'blue')",
        correctAnswer: "a"
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        choiceA: "Math.round(7.25)",
        choiceB: "Math.rnd(7.25)",
        choiceC: "rnd(7.25)",
        choiceD: "round(7.25)",
        correctAnswer: "a"
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        choiceA: "Math.max(x, y)",
        choiceB: "top(x, y)",
        choiceC: "ceil(x, y)",
        choiceD: "Math.ceil(x, y)",
        correctAnswer: "a"
    },
    {
        question: "What is the correct JavaScript syntax for opening a new window called 'w2'?",
        choiceA: "w2 = window.open('http://www.w3schools.com');",
        choiceB: "w2 = window.new('http://www.w3schools.com');",
        correctAnswer: "a"
    },
    {
        question: "JavaScript is the same as Java.",
        choiceA: "True",
        choiceB: "False",
        correctAnswer: "b"
    },
    {
        question: "How can you detect the client's browser name?",
        choiceA: "browser.name",
        choiceB: "client.navName",
        choiceC: "navigator.appName",
        choiceD: "client.browserName",
        correctAnswer: "c"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choiceA: "onclick",
        choiceB: "onmouseclick",
        choiceC: "onchange",
        choiceD: "onmouseover",
        correctAnswer: "a"
    },
    {
        question: "How do you declare a JavaScript variable?",
        choiceA: "var carName;",
        choiceB: "variable carName;",
        choiceC: "v carName;",
        choiceD: "var: carName;",
        correctAnswer: "a"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        choiceA: "=",
        choiceB: "x",
        choiceC: "*",
        choiceD: "-",
        correctAnswer: "a"
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        choiceA: "true",
        choiceB: "NaN",
        choiceC: "false",
        choiceD: "undefined",
        correctAnswer: "a"
    },
    {
        question: "Is JavaScript case-sensitive?",
        choiceA: "Yes",
        choiceB: "No",
        correctAnswer: "a"
    }
];



// Global variables for quiz logic
var totalQuestions = quizQuestions.length;
var currentQuestionIndex = 0;
var remainingTime = 420;
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
    remainingTime = 420;
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
