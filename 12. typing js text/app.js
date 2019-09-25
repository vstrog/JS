const wording = ["A complete sentence must have, at minimum, three things: a subject, verb, and an object.", "Beyond these basic elements, a complete sentence must also express a complete thought.", "A Word About Commas", "We had a three-course meal.", "We all agreed; it was a magnificent evening.", "new one"];

let startTime, endTime;

const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");
button.addEventListener("click", function(){
    if(this.innerText == "Start"){
        playText.disabled = false;
        playGame();
    }else if(this.innerText == "Done"){
        playText.disabled = true;
        button.innerText = "Start";
        endPlay();
    }
});

function endPlay(){
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    let str = playText.value;
    let wordCount = wordCounter(str);
    let speed = Math.round((wordCount/totalTime)*60);
    let finalMessage = "You typed at "+speed+" word per minute.";
    if(str != message.innerText){
        finalMessage +="<br>" +     compareWords(message.innerText,str);
    }
    message.innerHTML = finalMessage;
    //count words.
    //divide by total time words/per minute.
    //output final message to user
}

function wordCounter(strWords){
    let response = strWords.split(" ").length;
    return response;
}

function compareWords(str1, str2){
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach(function(item,index){
        if(item == words2[index]){
            cnt++;
        }
    })
    return (cnt + " correct out of "+words1.length+" words");


}

function playGame(){
    let randomNum = Math.floor(Math.random()*wording.length);
    message.innerText = wording[randomNum];
    let date = new Date();
    startTime = date.getTime();
    button.innerText = "Done";
    }