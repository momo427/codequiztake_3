//quiz variables
let timer = document.querySelector('#timer');
let quizHeader = document.querySelector('quiz-header');
let quizLoaded = document.querySelector('quiz');
let quizTitle = document.querySelector('question-title');
let multipleChoice = document.querySelector('multiple-choice');
let answerResponse = document.querySelector('right-v-wrong');
let submitQuiz = document.querySelector('submit');

//score variables
let scoreList = document.querySelector('score-list');
let claimVictory = document.querySelector('claimVictory')

//questions array
let quizQuestions = [
    {
        question: "",
        multipleChoice: [],
        answer: ""
    },
    {
        question: "",
        multipleChoice: [],
        answer: ""

    },
    {
        question: "",
        multipleChoice: [],
        answer: ""

    },
    {
        question: "",
        multipleChoice: [],
        answer: ""

    },
    {
        question: "",
        multipleChoice: [],
        answer: ""

    },
    {
        question: "",
        multipleChoice: [],
        answer: ""

    },
    {
        question: "",
        multipleChoice: [],
        answer: ""

    },
    {
        question: "",
        multipleChoice: [],
        answer: ""

    }
]

//timer function
function countdown(params) {
    let time = 75
    setInterval(function name(params) {
        if (time >= 0) {
        timer.textContent = time;
            time--;
            console.log(time)
        }
    }, 1000)
}

//score function
function Tally(params) {
    if (condition) {

    } else {

    }
}


//question function
function questions(params) {
    if (condition) {

    } else {

    }
}