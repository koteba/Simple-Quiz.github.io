const questions = [
    {
    question: "Whis is largest animal in the world ?",
    answers: [
            {text : "Shark" ,correct:true},
            {text : "Blue Whale" ,correct:false},
            {text : "Elephant" ,correct:false},
            {text : "Giraffe" ,correct:false},
    ]

    },
    {

        question: "Whis is smallest country in the world ?",
        answers: [
                {text : "Vatican" ,correct:true},
                {text : "Kuwait" ,correct:false},
                {text : "Nepal" ,correct:false},
                {text : "Shar Lanka" ,correct:false},
        ]


    },
    {

        question: "Whis is largest desert in yhe world ?",
        answers: [
                {text : "ASD" ,correct:false},
                {text : "Blue Whale" ,correct:false},
                {text : "Elephant" ,correct:false},
                {text : "Giraffe" ,correct:true},
        ]


    },

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;
function startQuestion(){
    currentQuestionIndex = 0;
    score =0;   
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct = answer.correct;
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
        score++;

    }else {
        selectedBtn.classList.add("incorrect");
        
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled ="true";

    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ' + score + ' out of ' + questions.length + '!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handelNextButton(){

    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();

    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }else{
        startQuestion();

    }

});

startQuestion();
