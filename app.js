//quiz variables
let timer = document.querySelector('#timer');
let quizHeader = document.querySelector('#quiz-header');
let quizLoaded = document.querySelector('#quiz');
let quizTitle = document.querySelector('#question-title');
let multipleChoice = document.querySelector('#multiple-choice');
let answerResponse = document.querySelector('#right-v-wrong');
let submitQuiz = document.querySelector('#submit');


//score variables
let scoreList = document.querySelector('#score-list');
let claimVictory = document.querySelector('#claimVictory')



//questions array
var quizQuestions = [
    {
        question: "What is the difference between === and ==?",
        multipleChoice: [
             '== is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.',
             '== is used to compare boleens and === is used to compare integers',
             '== and === are the same',
             '== is just better than ===',
             '== is used for comparison between two variables but this will check strict type, which means it will check datatype and compare two values. === is used for comparision between two variables irrespective of the datatype of variable '
        ],
        answer: "== is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values."
    },
    {
        question: "What is the difference between function declaration and function expression?",
        multipleChoice: [
            
                 'They are the same thing',
                 'The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.',
                 'funtions are typically shorter that expressions',
                 'There are many differences between the two'
            ],
        answer: "The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions."

    },
    {
        question: "Which keyword is best practices when declaring a variable?",
        multipleChoice: [
            
                 'let',
                 'const',
                 'var',
                 'depends'
            
        ],
        answer: "depends"

    },
    {
        question: "Whats the difference between local and gloabal scope?",
        multipleChoice: [
            
                 'A global variable has a global scope which means it can be defined anywhere in your JavaScript code. Local Variables − A local variable will be visible only within a function where it is defined',
                'A global variable has a global scope which means it can be defined within a function. Local Variables − A local variable will be visible only within your JavaScript code',
                 'They are the same',
                 'What is global and local scope exactly?'
            

        ],
        answer: "A global variable has a global scope which means it can be defined anywhere in your JavaScript code. Local Variables − A local variable will be visible only within a function where it is defined"

    },
    {
        question: "What is a method?",
        multipleChoice: [
            
                 'A method is a way of debugging your code quickly and efficiently',
                 'A method is a code word for having fun while coding',
                 'A method is a concise way of building a dynamic application',
                 'A method is a function associated with an object, or, put differently, a method is a property of an object that is a function.'
            
        ],
        answer: "A method is a function associated with an object, or, put differently, a method is a property of an object that is a function."

    },
    {
        question: "What is the function of the this keyword?",
        multipleChoice: [
            
                 'The this keyword is used within a method to refer to the current object',
                 'The this keyword is used outside a method to refer to the current object inside any method',
                 'This is not a keyword, as far as I know',
                 'This is a keyword used to declare variables'
            
        ],
        answer: "The this keyword is used within a method to refer to the current object"

    }
]



//score function
function Tally(params) {
    if (condition) {

    } else {

    }
}


//question function
function questions() {


    quizQuestions.forEach(quizQuestions => {
        let cqTitle = document.createElement('h4')
        let cqChoices = document.createElement('li')

        cqChoices.innerText = quizQuestions.multipleChoice
        multipleChoice.appendChild(cqChoices)
        cqTitle.innerText = quizQuestions.question
        quizTitle.appendChild(cqTitle)

    })

}



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