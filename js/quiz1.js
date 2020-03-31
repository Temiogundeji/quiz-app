const quoteContainer = document.querySelector('div.option-con');
const submitBtn = document.querySelector('button.btn-prev');
const nextBtn = document.querySelector('button.btn-next');
const prevBtn = document.querySelector('button.btn-prev');

let isTestEnd = false;
let isTimeElapse = false;
let result = [];
let currentQuote = 0;
const questions = [
    {
        id:1,
        question:"What is machine learning",
        options:["Mathematics of statistics","Employing mathematical models to solving life problems","Solviing problems by programming mathematical models","None of the above"],
        correctOption:"C"
    },
    {
        id:2,
        question:"What is machine learning",
        options:["Mathematics of statistics","Employing mathematical models to solving life problems","Solviing problems by programming mathematical models","None of the above"],
        correctOption:"D"
    },
    {
        id:3,
        question:"What is machine learning",
        options:["Mathematics of statistics","Employing mathematical models to solving life problems","Solviing problems by programming mathematical models","None of the above"],
        correctOption:"B"
    },
    {
        id:4,
        question:"What is machine learning",
        options:["Mathematics of statistics","Employing mathematical models to solving life problems","Solviing problems by programming mathematical models","None of the above"],
        correctOption:"C"
    }
];

window.addEventListener('load', function(e){
    e.preventDefault();
    startQuiz();
});
function loadQuiz(){
    for(let question of questions){
        const quest = document.createElement('h2');
        const radios = document.createElement('input');
        radios.type = 'radio';
        radios.name = 'option';
        for(let option in question.options){
            radios.textContent = option;
        }    
        quest.textContent = question.question;
        console.log(radios);
    }
}
function startQuiz(){
    loadQuiz();
    console.log(questions)
}
function loadPrev(){}
function loadNext(){}
function checkTimeout(){}
function calculateResult(){}
function displayResult(){}
