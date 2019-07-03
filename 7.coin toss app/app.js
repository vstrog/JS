const coinArray = ["עץ", "פלי"];
let score = [0, 0];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

for (let i = 0; i< buttons.length; i++) {
    buttons[i].addEventListener("click", tossCoin);
} 

function tossCoin(e){
    let playerGuess = e.target.innerText;
    let computerToss = Math.floor(Math.random() * coinArray.length);
    let computerGuess = coinArray[computerToss];
    message.innerHTML = "המחשב בחר ב " + computerGuess + "<br>";
    let output;
    if(playerGuess === computerGuess){
        //win
        output = "ניצחתם!"
        score[0]++;
    }else{
        //loss
        output = "המחשב ניצח!"
        score[1]++;
    }
    message.innerHTML += output + "<br>שחקן "+ score[0] + " מחשב " + score[1];
    }