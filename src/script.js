const container = document.querySelector('#container');
const addQuestionCard = document.getElementById('add-question-card');
const cardButton = document.getElementById('save-btn');
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const errorMessage = document.getElementById('error');
const addQuestion = document.getElementById('add-flashcard');
const closeBtn = document.getElementById('close-btn');

let editBool = false;

addQuestion.addEventListener('click' ,() => {
    container.classList.add('hide');
    question.value = '';
    answer.value = '';
    addQuestionCard.classList.remove('hide');
});

closeBtn.addEventListener('click',(hideQuestion = () => {
    container.classList.remove('hide');
    addQuestionCard.classList.add('hide');
    if(editBool){
        editBool = false ; 
        submitQueston();
    }
})
);