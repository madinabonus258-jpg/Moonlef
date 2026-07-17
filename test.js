const questions = [

    {
        level:"A1",
        question:"I ____ a student.",
        answers:["am","is","are","be"],
        correct:0
    },

    {
        level:"A1",
        question:"She ____ from Canada.",
        answers:["am","is","are","be"],
        correct:1
    },

    {
        level:"A2",
        question:"Yesterday we ____ to the cinema.",
        answers:["go","went","gone","going"],
        correct:1
    }

];


let currentQuestion = 0;
let score = 0;

let levelScores = {
    A1:0,
    A2:0,
    B1:0,
    B2:0,
    C1:0,
    C2:0
};

let selectedAnswer = null;


const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersDiv = document.querySelector(".answers");
const progressBar = document.querySelector(".progress-bar");
const nextButton = document.getElementById("next");


function loadQuestion(){

    selectedAnswer = null;

    const q = questions[currentQuestion];

    questionNumber.textContent =
    `Question ${currentQuestion + 1} / ${questions.length}`;

    questionText.textContent = q.question;


    progressBar.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;


    answersDiv.innerHTML = "";


    q.answers.forEach((answer,index)=>{

        let button = document.createElement("button");

        button.textContent = answer;


        button.onclick = function(){

            selectedAnswer = index;

            document
            .querySelectorAll(".answers button")
            .forEach(btn =>
                btn.classList.remove("selected")
            );

            button.classList.add("selected");

        };


        answersDiv.appendChild(button);

    });

}



nextButton.onclick = function(){

    if(selectedAnswer === null){

        alert("Please choose an answer.");
        return;

    }


    if(selectedAnswer === questions[currentQuestion].correct){

        score++;

        levelScores[
        questions[currentQuestion].level
        ]++;

    }


    currentQuestion++;


    if(currentQuestion < questions.length){

        loadQuestion();

    }
    else{

        localStorage.setItem(
            "score",
            score
        );


        localStorage.setItem(
            "levelScores",
            JSON.stringify(levelScores)
        );


        location.href = "result.html";

    }

};


loadQuestion();
