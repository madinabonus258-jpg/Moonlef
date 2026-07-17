const questions = [
{
    question: "I ____ from Uzbekistan.",
    answers: ["am", "is", "are", "be"],
    correct: 0
},
{
    question: "She ____ a student.",
    answers: ["am", "is", "are", "be"],
    correct: 1
},
{
    question: "They ____ football every weekend.",
    answers: ["play", "plays", "playing", "played"],
    correct: 0
},
{
    question: "What colour is the sky on a clear day?",
    answers: ["Blue", "Green", "Red", "Black"],
    correct: 0
},
{
    question: "He ____ to school every day.",
    answers: ["goes", "go", "going", "gone"],
    correct: 0
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

function loadQuestion() {

    selectedAnswer = null;

    const q = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    questionText.textContent = q.question;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    answersDiv.innerHTML = "";

    q.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.onclick = function () {

            selectedAnswer = index;

            document.querySelectorAll(".answers button").forEach(btn => {
                btn.style.background = "#e8d29a";
            });

            button.style.background = "#b7d8b0";

        };

        answersDiv.appendChild(button);

    });

}

nextButton.onclick = function () {

    if (selectedAnswer === null) {
        alert("Please choose an answer.");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert(`Test Finished!\n\nScore: ${score}/${questions.length}`);
    }

};

loadQuestion();
