let _this = this;

window.addEventListener('load', function(e){
    e.preventDefault();
    const quiz = new Quiz();
});
class Quiz{
    constructor(){   
        _this = this;
        _this.isTestEnd = false;
        _this.isTimeElapse = false;
        _this.result = [];
        _this.currentQuote = 0;
        _this.selectElements();
        _this.loadQuiz();
        _this.init();
    }

    init(){
        _this.questions = [
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
        ]
    }
    selectElements(){
        const quoteContainer = document.querySelector('div.option-con');
        const submitBtn = document.querySelector('button.btn-prev');
        const nextBtn = document.querySelector('button.btn-next');
        const prevBtn = document.querySelector('button.btn-prev');
        const cancelBtn = document.querySelector('button.btn-cancel');
        const optionRadio = document.querySelectorAll('input[type=radio]')
        const quizQuest = document.querySelector('h2.quiz-quest');

    }
    loadQuiz(){}
    loadPrev(){}
    loadNext(){}
    checkTimeout(){}
    calculateResult(){}
    displayResult(){}   
}