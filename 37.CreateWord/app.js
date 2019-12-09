        const MESSAGE = document.querySelector(".message");
        const GUESS = document.querySelector("input");
        const BUTTON = document.querySelector("button");
        let inplay = false;
        let scramble = "";
        let scrambled = "";
        let score = 0;
        const myArray = ["javascript", "angular", "react", "vue", "jquery", "website", "css", "html", "document", "less", "course", "new", "sass"];
        BUTTON.addEventListener("click", function () {
            if (!inplay) {
                inplay = true;
                score = 0;
                BUTTON.innerHTML = "Guess";
                GUESS.classList.toggle("hidden");
                scramble = createWord();
                scrambled = randomArray(scramble.split("")).join("");
                MESSAGE.innerHTML = scrambled;
            }
            else {
                let tempGuess = GUESS.value;
                score++;
                if (tempGuess === scramble) {
                    console.log("correct");
                    inplay = false;
                    MESSAGE.innerHTML = "Correct it was " + scramble + " it took " + score + " guesses";
                    BUTTON.innerHTML = "Start";
                    GUESS.classList.toggle("hidden");
                }
                else {
                    console.log("guess again");
                    MESSAGE.innerHTML = "Wrong " + scrambled;
                }
            }
        })
 
        function createWord() {
            let randomIndex = Math.floor(Math.random() * myArray.length);
            let tempWord = myArray[randomIndex];
            return tempWord;
        }
 
        function randomArray(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                let temp = arr[i];
                let j = Math.floor(Math.random() * (i + 1));
                arr[i] = arr[j];
                arr[j] = temp;
            }
            return arr;
        }