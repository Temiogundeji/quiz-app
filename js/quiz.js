class Quiz{
    constructor(){
        _this = this;
        _this.isTestEnd = false;
        _this.isTimeElapse = false;
        _this.result = [];
        _this.currentQuote = 0;
        _this.selectElement();
        _this.questions = [
            {
                id:1,
                question:"What is machine learning",
                optionA:"Mathematics of statistics",
                optionB: "Employing mathematical models to solving life problems",
                optionC:"Solviing problems by programming mathematical models",
                optionD: "None of the above",
                correctOption:"C"
            },
            {
                id:2,
                question:"What is machine learning",
                optionA:"Mathematics of statistics",
                optionB: "Employing mathematical models to solving life problems",
                optionC:"Solviing problems by programming mathematical models",
                optionD: "None of the above",
                correctOption:"C"
            },
            {
                id:3,
                question:"What is machine learning",
                optionA:"Mathematics of statistics",
                optionB: "Employing mathematical models to solving life problems",
                optionC:"Solviing problems by programming mathematical models",
                optionD: "None of the above",
                correctOption:"C"
            },
            {
                id:4,
                question:"What is machine learning",
                optionA:"Mathematics of statistics",
                optionB: "Employing mathematical models to solving life problems",
                optionC:"Solviing problems by programming mathematical models",
                optionD: "None of the above",
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
    loadPrev(){
        let questLength = _this.questions.length;
        console.log(questLength);
        

    }
    loadNext(){}
    checkTimeout(){}
    calculateResult(){}
    displayResult(){}   

}

window.addEventListener('load', () =>{
    let quiz = new Quiz();
});