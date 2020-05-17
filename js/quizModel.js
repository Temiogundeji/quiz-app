class Model {
    constructor() {
        this.quizes = [
            {
                id: 1, question: 'What is two times two',
                optionA: '4', optionB:'22',optionC: '4', optionD:'22',
                corectOpt: 'optionA'
            },
            {
                id: 2, question: 'What is two times two',
                optionA: '4', optionB:'22',optionC: '4', optionD:'22',
                corectOpt: 'optionB'
            }
        ];

        this.isCorrect = false;
        this.isComplete = false;
        this.isSelected = false;
        this.score = 0;
    }

    addQuestion(question,a,b,c,d,correct) {
       const quiz = {
            id: this.quizes.length > 0 ? this.quizes[this.quizes.length - 1].id + 1 : 1,
            question:question,
            optionA: a,
            optionB:b,
            optionC:c,
            optionD:d,
            correctOpt:correct
        }
        this.quizes.push(quiz);
    }

    editQuestion( id, a,b,c,d,correct) {
        this.quizes = this.quizes.map(quiz => quiz.id === id ? {id:id, optionA:a, optionB:b, c:optionC, d: optionD}: quiz);
    }

    deleteQuestion(id) {
        this.quizes = quizes.filter(quiz => quiz.id !== id)
    }

}