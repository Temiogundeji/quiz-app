const quizContainer = document.querySelector('div#quiz-con');
const submitBtn = document.querySelector('button.btn-prev');
const nextBtn = document.querySelector('button.btn-next');
const prevBtn = document.querySelector('button.btn-prev');
let questTemplate = '';

let isTestEnd = false;
let isTimeElapse = false;
let result = [];
let currentQuote = 0;
const questions = [
    {
        id:1,
        question:"What is machine learning",
        optionA: "Mathematics of statistics",
        optionB:"Employing mathematical models to solving life problems",
        optionC :"Solviing problems by programming mathematical models",
        optionD: "None of the above",
        correctOption:"D"
    },
    {
        id:2,
        question:"What is Kubernetes",
        optionA: "Mathematics of statistics",
        optionB:"Employing mathematical models to solving life problems",
        optionC :"Solviing problems by programming mathematical models",
        optionD: "None of the above",
        correctOption:"C"
    },
    {
        id:3,
        question:"What is Docker",
        optionA: "Mathematics of statistics",
        optionB:"Employing mathematical models to solving life problems",
        optionC :"Solviing problems by programming mathematical models",
        optionD: "None of the above",
        correctOption:"A"
    },
    {
        id:4,
        question:"What is API",
        optionA: "Mathematics of statistics",
        optionB:"Employing mathematical models to solving life problems",
        optionC :"Solviing problems by programming mathematical models",
        optionD: "None of the above",
        correctOption:"B"
    }
];

window.addEventListener('load', function(e){
    e.preventDefault();
    startQuiz();
});
function loadQuiz(){
    questions.forEach((quest) =>{
        let {id,question,optionA, optionB, optionC, optionD, correctOption} = quest;
        questTemplate += `
            <div>
                <span>${id}</div>
                <h2 class="quiz-quest">${question}</h2>
                <div class="quiz-option-row">
                    <label>
                        A. ${optionA}
                        <input type="radio" name="option" value="${optionA}">
                    </label>
                    <label>
                        B. ${optionB}
                        <input type="radio" name="option" value="${optionB}">
                    </label>
                </div>
                <div class="quiz-option-row">
                    <label>
                        C. ${optionC}
                        <input type="radio" name="option" value="${optionC}">
                    </label>
                    <label>
                        D. ${optionD}
                        <input type="radio" name="option" value="${optionD}">
                    </label>
                </div>
            </div>
        `;
        quizContainer.innerHTML = questTemplate;
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
