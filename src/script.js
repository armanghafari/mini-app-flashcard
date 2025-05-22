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
    };
})
);

cardButton.addEventListener('click',(submitQueston = () => {
    editBool = false;
    tempQuestion = question.value.trim();
    tempAnswer = answer.value.trim();
    if (!tempQuestion || !tempAnswer) {
        errorMessage.classList.remove('hide');
        
    } else {
        container.classList.remove("hide");
        errorMessage.classList.add("hide");
        viewList();
        question.value = '';
        answer.value = '';
    };

})
);

function viewList() {
    let listCard = document.getElementsByClassName("card-list-container");
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML += `<p class="question-div">${question.value}</p>`;
    let displayAnswer = document.createElement('p');
    displayAnswer.classList.add("answer-div" ,"hide");
    displayAnswer.innerText = answer.value;

    let link = document.createElement('a');
    link.setAttribute("href","#");
    link.setAttribute("class","show-hide-btn");
    link.innerHTML = 'show/hide';
    link.addEventListener("click",() => {
        displayAnswer.classList.toggle("hide");
    });
    div.appendChild(link);
    div.appendChild(displayAnswer);

    let buttonCon = document.createElement('div');
    buttonCon.classList.add("buttons-con");
    let editButton = document.createElement("button");
    editButton.setAttribute('class','edit');
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    editButton.addEventListener("click",() => {
        editBool = true;
        modifyElement(editButton , true);
        addQuestionCard.classList.remove("hide");
    }); 
    buttonCon.appendChild(editButton);
    // 
    div.appendChild(buttonCon);

    listCard[0].appendChild(div);
    hideQuestion();
};

function modifyElement (element , edit = false){
    let parentDiv = element.parentElement.parentElement;
    let parentQuestion = parentDiv.querySelector(".question-div").innerText;
    if (edit) {
        let parentAns = parentDiv.querySelector(".answer-div").innerText;
        answer.value = parentAns;
        question.value = parentQuestion;
        // disableButtons(true);
    };
    parentDiv.remove();
};