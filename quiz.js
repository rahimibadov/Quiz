
const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the largest country  in the world by population?",
        answers: [
            { text: "Russia", correct: false},
            { text: "USA", correct: false},
            { text: "India", correct: true},
            { text: "China", correct: false},
        ]
    },
    {
        question: "Which is the largest city  in the world by population?",
        answers: [
            { text: "Mexico", correct: false},
            { text: "Beijing", correct: false},
            { text: "Tokio", correct: true},
            { text: "Dehli", correct: false},
        ]
    },
    {
        question: "which is the smallest country in the world by area?",
        answers: [
            { text: "Vatican", correct: true},
            { text: "Liechtenstein", correct: false},
            { text: "Malta", correct: false},
            { text: "San Marino", correct: false},
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answers: [
            { text: "Amazon", correct: false},
            { text: "Nile", correct: true},
            { text: "Yangtze", correct: false},
            { text: "Lena", correct: false},
        ]
    },
    {
        question: "Which is the largest continent in the world?",
        answers: [
            { text: "Europe", correct: false},
            { text: "America", correct: false},
            { text: "Asia", correct: true},
            { text: "Africa", correct: false},
        ]
    },
    {
        question: "Which is the biggest planet in our solar system?",
        answers: [
            { text: "Saturn", correct: false},
            { text: "Earth", correct: false},
            { text: "Mars", correct: false},
            { text: "Jupiter", correct: true},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        }else{
            showScore()
        }
    }

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();






