//quiz variables
let timer = document.querySelector('#timer');
let quizHeader = document.querySelector('#quiz-header');
let quizLoaded = document.querySelector('#quiz');
let quizTitle = document.querySelector('#question-title');
let answerChoices = document.querySelector('#answer-buttons');
let answerResponse = document.querySelector('#right-v-wrong');
let submitQuiz = document.querySelector('#submit');
let startButton = document.querySelector('#startquiz')
let nextButton = document.querySelector('#next')


//score variables
let scoreList = document.querySelector('#score-list');
let claimVictory = document.querySelector('#claimVictory')



//questions array
const quizQuestions = [
    {
        question: "What is the difference between === and ==?",
        multipleChoice: [{
            text:'== is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.',
            text:'== is used to compare boleens and === is used to compare integers',
            text:'== and === are the same',
            text:'== is used for comparison between two variables but this will check strict type, which means it will check datatype and compare two values. === is used for comparision between two variables irrespective of the datatype of variable '
        }],
        answer: "== is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values."
    },
    {
        question: "What is the difference between function declaration and function expression?",
        multipleChoice: [{

            text:'They are the same thing',
            text:'The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.',
            text:'funtions are typically shorter that expressions',
            text:'There are many differences between the two'
        }],
        answer: "The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions."

    },
    {
        question: "Which keyword is best practices when declaring a variable?",
        multipleChoice: [{

            text:'let',
            text:'const',
            text:'var',
            text:'depends'

        }],
        answer: "depends"

    },
    {
        question: "Whats the difference between local and gloabal scope?",
        multipleChoice: [{

            text:'A global variable has a global scope which means it can be defined anywhere in your JavaScript code. Local Variables − A local variable will be visible only within a function where it is defined',
            text:'A global variable has a global scope which means it can be defined within a function. Local Variables − A local variable will be visible only within your JavaScript code',
            text:'They are the same',
            text:'What is global and local scope exactly?'
        }],
        answer: "A global variable has a global scope which means it can be defined anywhere in your JavaScript code. Local Variables − A local variable will be visible only within a function where it is defined"

    },
    {
        question: "What is a method?",
        multipleChoice: [{

            text:'A method is a way of debugging your code quickly and efficiently',
            text:'A method is a code word for having fun while coding',
            text:'A method is a concise way of building a dynamic application',
            text:'A method is a function associated with an object, or, put differently, a method is a property of an object that is a function.'

        }],
        answer: "A method is a function associated with an object, or, put differently, a method is a property of an object that is a function."

    },
    {
        question: "What is the function of the this keyword?",
        multipleChoice: [{

            text:'The this keyword is used within a method to refer to the current object',
            text:'The this keyword is used outside a method to refer to the current object inside any method',
            text:'This is not a keyword, as far as I know',
            text:'This is a keyword used to declare variables'

        }],
        answer: "The this keyword is used within a method to refer to the current object"

    }
]



var i = 0
currentQuestionIndex = i

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

//question function

function setNextQuestion() {
    currentQuestionIndex = i
    shuffledQuestions = quizQuestions.sort(() => Math.random() - .5)
    questions(shuffledQuestions[currentQuestionIndex])
    
}

function startQuiz() {
    
    questions()
}

function questions() {

        let quizQuestionsIndex = 0
        let i = 0

        let cqTitle = document.body.append(quizTitle)
        let cqChoices = document.body.appendChild(answerChoices)

        cqChoices = quizQuestions[quizQuestionsIndex].multipleChoice

        
       
        
        cqTitle = quizQuestions[quizQuestionsIndex].question
        quizTitle.append(cqTitle)      

        cqChoices.forEach(cqChoices => {
            const button = document.createElement('button')
        
            button.innerText = cqChoices.text
    
            answerChoices.appendChild(button)
            
            
        });


}



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