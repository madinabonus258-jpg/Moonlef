const score = localStorage.getItem("score");

const levelText = document.getElementById("level");
const scoreText = document.getElementById("score");
const startButton = document.getElementById("start");

scoreText.textContent = `Score: ${score}/30`;

let level = "";
let page = "";

if(score <= 5){

    level = "🌱 A1";
    page = "a1.html";

}
else if(score <= 10){

    level = "🍃 A2";
    page = "a2.html";

}
else if(score <= 15){

    level = "📖 B1";
    page = "b1.html";

}
else if(score <= 20){

    level = "🌿 B2";
    page = "b2.html";

}
else if(score <= 25){

    level = "🌙 C1";
    page = "c1.html";

}
else{

    level = "⭐ C2";
    page = "c2.html";

}

levelText.textContent = level;

startButton.onclick = function(){

    location.href = page;

};
