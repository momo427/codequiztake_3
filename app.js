//quiz variables
let timer = document.querySelector('#timer');
let quizHeader = document.querySelector('#quiz-header');
let answerChoices = document.querySelector('#choice');
let answerResponse = document.querySelector('#right-v-wrong');
let submitQuiz = document.querySelector('#submit');
let startButton = document.querySelector('#startquiz')
let nextButton = document.querySelector('#next')

var highScorePage = document.querySelector('.highScorePage')
var playerName = document.querySelector("#playerName");
var submit = document.querySelector("#submit");
var quizResults = document.querySelector(".quizResults");
var finalScore = document.querySelector("#finalScore");
var highScores = document.querySelector(".highScores");
var clearHighScores = document.querySelector("#clearHighScores");
var restartButton = document.querySelector("#restartButton");
var scoreBoard = document.querySelector("#scores");



//ES6
//Quiz
function Quiz(quizQuestions) {
    this.quizQuestions = quizQuestions;
    this.score = 0;
    this.quizQuestionsIndex = 0
}


Quiz.prototype.getQuestionsIndex = function () {
    return this.quizQuestions[this.quizQuestionsIndex];
}

Quiz.prototype.response = function (answer) {
    if (this.getQuestionsIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.quizQuestionsIndex++;
}

Quiz.prototype.complete = function () {
    return this.quizQuestionsIndex == this.quizQuestions.length
}

//Quiz Questions 

function Question(question, multipleChoice, answer) {
    this.question = question;
    this.multipleChoice = multipleChoice;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (multipleChoice) {
    return this.answer === multipleChoice;

}


function displayQuestions() {
    if (quiz.complete()) {
        showScores()
    } else {
        let quizTitle = document.querySelector('#question');
        quizTitle.innerHTML = quiz.getQuestionsIndex().question;

        let multipleChoice = quiz.getQuestionsIndex().multipleChoice;
        for (let i = 0; i < multipleChoice.length; i++) {
            let answerChoices = document.querySelector('#choice' + i);
            answerChoices.innerHTML = multipleChoice[i];
            response("btn" + i, multipleChoice[i]);

        }
        showProgress();
    }
}
// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.quizQuestionsIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.quizQuestions.length}`;
};


function response(id, response) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.response(response);
        displayQuestions();
    }
};
//questions array
let quizQuestions = [

    new Question("What is the difference between === and ==?",
        [
            '== is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.',
            '== is used to compare boleens and === is used to compare integers',
            '== and === are the same',
            '== is used for comparison between two variables but this will check strict type, which means it will check datatype and compare two values. === is used for comparision between two variables irrespective of the datatype of variable '
        ],
        '== is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.'
    ),

    new Question("What is the difference between function declaration and function expression?",
        [
            'They are the same thing',
            'The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.',
            'funtions are typically shorter that expressions',
            'There are many differences between the two'
        ],
        'The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.'
    )
    ,

    new Question("Which keyword is best practices when declaring a variable?",
        [

            'let',
            'const',
            'var',
            'depends'

        ],
        'const'

    ),

    new Question("Whats the difference between local and gloabal scope?",
        [

            'A global variable has a global scope which means it can be defined anywhere in your JavaScript code. Local Variables − A local variable will be visible only within a function where it is defined',
            'A global variable has a global scope which means it can be defined within a function. Local Variables − A local variable will be visible only within your JavaScript code',
            'They are the same',
            'What is global and local scope exactly?'
        ],
        'A global variable has a global scope which means it can be defined anywhere in your JavaScript code. Local Variables − A local variable will be visible only within a function where it is defined'
    )
    ,

    new Question("What is a method?",
        [

            'A method is a way of debugging your code quickly and efficiently',
            'A method is a code word for having fun while coding',
            'A method is a concise way of building a dynamic application',
            'A method is a function associated with an object, or, put differently, a method is a property of an object that is a function.'

        ],
        'A method is a function associated with an object, or, put differently, a method is a property of an object that is a function.'
    )
    ,

    new Question("What is the function of the this keyword?",
        [

            'The this keyword is used within a method to refer to the current object',
            'The this keyword is used outside a method to refer to the current object inside any method',
            'This is not a keyword, as far as I know',
            'This is a keyword used to declare variables'

        ],
        'The this keyword is used within a method to refer to the current object'

    )
]

let quiz = new Quiz(quizQuestions)
let score = localStorage.getItem(quiz.score)
let scoreList=[];

function startQuiz() {
    displayQuestions()
}

//Scores

function showScores() {
    let scoreHTML =
        `
    <div class='highscoreBuild'>
    <h1>Good Job</h1>
    <h2> Your scored: ${quiz.score} </h2>
    <div>

    
    `;
    let quizLoaded = document.querySelector('#quiz-container');
    quizLoaded.innerHTML = scoreHTML;
    highScorePage.style.visibility = 'visible';
    localStorage.setItem('quiz.score', quiz.score);
    console.log(quiz.score)

};


//record scores 
function recordScore(x){
    let str;
    if (localStorage.getItem("keepScore") === null){
        if (typeof x === typeof undefined ){
        } else{
            scoreList.push( {name : `${x}`, score : `${quiz.score}` })
            str = JSON.stringify(scoreList)
            localStorage.setItem("keepScore", str); 
        }
    } else{

        str = localStorage.getItem("keepScore"); 
        str = JSON.parse(str);
        str.push( {name : `${x}`, score : `${quiz.score}` })
        scoreList = str;
        str = JSON.stringify(str);
        localStorage.setItem("keepScore",str)
    }
}


function clearScore(){
    scoreBoard.innerHTML = "Recent Scores Cleared";
    scoreList=[];
    localStorage.clear()
}



function displayScores(){
    let scoreKeeper="";
    let x;
    if (localStorage.getItem("keepScore") === null){
        scoreBoard.innerHTML = "Currently no scores are stored"

    }else{
        
        scoreList=localStorage.getItem("keepScore");
        scoreList = JSON.parse(scoreList);
        x = scoreList.sort(function(b,a){
            return a.score + b.score
        })
        scoreList=[];
        for (let i in x ){
            scoreList.push(`<p>${x[i].name} - Score: ${x[i].score}</p>`)
        }
        for (let i in scoreList){
            scoreKeeper = scoreKeeper + scoreList[i]
        }
        scoreBoard.innerHTML = scoreKeeper;
    }
}

function saveScore(){
    if (playerName.value !== ""){
        recordScore(playerName.value);
    }
}


//timer function
function countdown() {
    let time = 120
    setInterval(function () {
        if (time >= 0) {
            timer.textContent = time;
            time--;
        } else {
            showScores()
        }
    }, 1000)
}

