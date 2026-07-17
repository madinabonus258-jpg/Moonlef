/* ===========================
   MOONLEAF PLACEMENT TEST
   Part 1
=========================== */

const questions = [

/* ===== A1 ===== */

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
    level:"A1",
    question:"They ____ friends.",
    answers:["am","is","are","be"],
    correct:2
},

{
    level:"A1",
    question:"There ____ a cat on the sofa.",
    answers:["is","are","am","be"],
    correct:0
},

{
    level:"A1",
    question:"Choose the correct article.",
    answers:[
        "a orange",
        "an orange",
        "the orange",
        "orange"
    ],
    correct:1
},

/* ===== A2 ===== */

{
    level:"A2",
    question:"Yesterday we ____ to the cinema.",
    answers:["go","went","gone","going"],
    correct:1
},

{
    level:"A2",
    question:"She ____ dinner when I called.",
    answers:[
        "cooked",
        "was cooking",
        "is cooking",
        "cook"
    ],
    correct:1
},

{
    level:"A2",
    question:"My brother is ____ than me.",
    answers:[
        "tall",
        "taller",
        "tallest",
        "more tall"
    ],
    correct:1
},

{
    level:"A2",
    question:"I have lived here ____ 2021.",
    answers:[
        "for",
        "since",
        "during",
        "ago"
    ],
    correct:1
},

{
    level:"A2",
    question:"Choose the correct sentence.",
    answers:[
        "She doesn't like coffee.",
        "She don't like coffee.",
        "She doesn't likes coffee.",
        "She not like coffee."
    ],
    correct:0
},

/* ===== B1 ===== */

{
    level:"B1",
    question:"If it rains tomorrow, we ____ at home.",
    answers:[
        "stay",
        "stayed",
        "will stay",
        "staying"
    ],
    correct:2
},

{
    level:"B1",
    question:"I ____ this book already.",
    answers:[
        "read",
        "have read",
        "reads",
        "reading"
    ],
    correct:1
},

{
    level:"B1",
    question:"The cake ____ yesterday.",
    answers:[
        "made",
        "was made",
        "is made",
        "making"
    ],
    correct:1
},

{
    level:"B1",
    question:"Choose the correct word.",
    answers:[
        "success",
        "successful",
        "succeed",
        "successfully"
    ],
    correct:1
},

{
    level:"B1",
    question:"What does 'borrow' mean?",
    answers:[
        "Take something and return it later",
        "Give something permanently",
        "Sell something",
        "Throw something away"
    ],
    correct:0
}

];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersDiv = document.querySelector(".answers");
const progressBar = document.querySelector(".progress-bar");
const nextButton = document.getElementById("next");

loadQuestion();

function loadQuestion(){

    selectedAnswer = null;

    const q = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion+1} / ${questions.length}`;

    questionText.textContent = q.question;

    progressBar.style.width =
        `${((currentQuestion+1)/questions.length)*100}%`;

    answersDiv.innerHTML = "";

    q.answers.forEach((answer,index)=>{

        const button=document.createElement("button");

        button.textContent=answer;

        button.onclick=function(){

            selectedAnswer=index;

            document
            .querySelectorAll(".answers button")
            .forEach(btn=>btn.classList.remove("selected"));

            button.classList.add("selected");

        };

        answersDiv.appendChild(button);

    });

}

nextButton.onclick=function(){

    if(selectedAnswer===null){

        alert("Please choose an answer.");

        return;

    }

    if(selectedAnswer===questions[currentQuestion].correct){

        score++;

    }

    currentQuestion++;

    if(currentQuestion<questions.length){

        loadQuestion();

    }else{

        localStorage.setItem("score",score);

        location.href="result.html";

    }

};
