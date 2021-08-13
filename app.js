//quiz variables
let timer = document.querySelector('#timer');
let quizHeader = document.querySelector('#quiz-header');
let quizLoaded = document.querySelector('#quiz-container');
let answerChoices = document.querySelector('#choice');
let answerResponse = document.querySelector('#right-v-wrong');
let submitQuiz = document.querySelector('#submit');
let startButton = document.querySelector('#startquiz')
let nextButton = document.querySelector('#next')


//score variables
let scoreList = document.querySelector('#score-list');
let claimVictory = document.querySelector('#claimVictory')

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
            answerChoices = multipleChoice[i];

        }
    }

}
//questions array
let quizQuestions = [

    new Question("What is the difference between === and ==?",
        [
            '== is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.',
            '== is used to compare boleens and === is used to compare integers',
            '== and === are the same',
            '== is used for comparison between two variables but this will check strict type, which means it will check datatype and compare two values. === is used for comparision between two variables irrespective of the datatype of variable '
        ],
        "== is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values."
    ),

    new Question("What is the difference between function declaration and function expression?",
        [
            'They are the same thing',
            'The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.',
            'funtions are typically shorter that expressions',
            'There are many differences between the two'
        ],
        "The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions."
    )
    ,

    new Question("Which keyword is best practices when declaring a variable?",
        [

            'let',
            'const',
            'var',
            'depends'

        ],
        "depends"

    ),

    new Question("Whats the difference between local and gloabal scope?",
        [

            'A global variable has a global scope which means it can be defined anywhere in your JavaScript code. Local Variables − A local variable will be visible only within a function where it is defined',
            'A global variable has a global scope which means it can be defined within a function. Local Variables − A local variable will be visible only within your JavaScript code',
            'They are the same',
            'What is global and local scope exactly?'
        ],
        "A global variable has a global scope which means it can be defined anywhere in your JavaScript code. Local Variables − A local variable will be visible only within a function where it is defined"
    )
    ,

    new Question("What is a method?",
        [

            'A method is a way of debugging your code quickly and efficiently',
            'A method is a code word for having fun while coding',
            'A method is a concise way of building a dynamic application',
            'A method is a function associated with an object, or, put differently, a method is a property of an object that is a function.'

        ],
        "A method is a function associated with an object, or, put differently, a method is a property of an object that is a function."
    )
    ,

    new Question("What is the function of the this keyword?",
        [

            'The this keyword is used within a method to refer to the current object',
            'The this keyword is used outside a method to refer to the current object inside any method',
            'This is not a keyword, as far as I know',
            'This is a keyword used to declare variables'

        ],
        "The this keyword is used within a method to refer to the current object"

    )
]

let quiz = new Quiz(quizQuestions)


// var i = 0
// currentQuestionIndex = i

// startButton.addEventListener('click', startQuiz)
// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++
//   setNextQuestion()
// })

// //question function

// function setNextQuestion() {
//     currentQuestionIndex = i
//     shuffledQuestions = quizQuestions.sort(() => Math.random() - .5)
//     questions(shuffledQuestions[currentQuestionIndex])

// }

 function startQuiz() {

     displayQuestions()
}

// function questions() {

//         let quizQuestionsIndex = 0
//         let i = 0

//         let cqTitle = document.body.append(quizTitle)
//         let cqChoices = document.body.appendChild(answerChoices)

//         cqChoices = quizQuestions[quizQuestionsIndex].multipleChoice




//         cqTitle = quizQuestions[quizQuestionsIndex].question
//         quizTitle.append(cqTitle)      

//         cqChoices.forEach(cqChoices => {
//             const button = document.createElement('button')

//             button.innerText = cqChoices.text

//             answerChoices.appendChild(button)


//         });


// }



//timer function
function countdown(params) {
    let time = 75
    setInterval(function name(params) {
        if (time >= 0) {
            timer.textContent = time;
            time--;

        }
    }, 1000)
}