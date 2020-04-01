const questContainer = document.querySelector('div.option-con');
const submitBtn = document.querySelector('button.btn-prev');
const nextBtn = document.querySelector('button.btn-next');
const prevBtn = document.querySelector('button.btn-prev');
let questionTemplate = '';

let isTestEnd = false;
let isTimeElapse = false;
let result = [];
let currentQuote = 0;
const questions = [
    {
        id:1,
        question:"What is machine learning",
        options:[
            "Mathematics of statistics",
            "Employing mathematical models to solving life problems",
            "Solviing problems by programming mathematical models",
            "None of the above"
        ],
        correctOption:"D"
    },
    {
        id:2,
        question:"What is Kubernetes",
        options:[
            "Mathematics of statistics",
            "Employing mathematical models to solving life problems",
            "Solviing problems by programming mathematical models",
            "None of the above"
        ],
        correctOption:"C"
    },
    {
        id:3,
        question:"What is Docker",
        options:[
            "Mathematics of statistics",
            "Employing mathematical models to solving life problems",
            "Solviing problems by programming mathematical models",
            "None of the above"
        ],
        correctOption:"A"
    },
    {
        id:4,
        question:"What is API",
        options:[
            "Mathematics of statistics",
            "Employing mathematical models to solving life problems",
            "Solviing problems by programming mathematical models",
            "None of the above"
        ],
        correctOption:"B"
    }
];

window.addEventListener('load', function(e){
    e.preventDefault();
    startQuiz();
});
function loadQuiz(){
    const questHeading = document.createElement('h2');
    const optionsList = document.createElement('ul');
    const optionItem = document.createElement('li');
    questions.forEach((question, i) =>{
        console.log(question.question);
        questHeading.textContent = question.question;
        optionsList.type = "square";
        for(let i=0; i < question.options.length; i++){
            optionItem.textContent = question.options[i];
            // optionsList.appendChild(optionItem);
            console.log(question.options[i]);
        }
    });
}
function startQuiz(){
    loadQuiz();
}
function loadPrev(){}
function loadNext(){}
function checkTimeout(){}
function calculateResult(){}
function displayResult(){}
