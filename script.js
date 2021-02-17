var correctLetters = [];
var guessedLetters = [];
var correctGuessedLetters = [];
var guessNum = 0;
var rank = "";
var word = "";

document.addEventListener('DOMContentLoaded', function() {
    correctLetters, word = generateWord();
    document.getElementById("guessBtn").addEventListener("click", function() {
        letterCheck(document.getElementById("guessedLetter").value);
    });
});

function letterCheck(letter) {
    var bool = false;

    letter = letter.toUpperCase();
    if (guessedLetters.length !== 0) {
        for (i = 0; i < guessedLetters.length; i++) {
            if (letter == guessedLetters[i]) {
                bool = true;
            }
        }
        if (bool) {
            alert("Letter already entered!");
            document.getElementById("guessedLetter").value = "";
        } else if (bool == false) {
            guessedLetters.push(letter);
            guessLetter()
        }
    }else {
        guessedLetters.push(letter);
        guessLetter()
    }
 
}

function guessLetter() {
    
    var curGuess = guessedLetters[guessedLetters.length - 1];

    document.getElementById("currentGuess").innerHTML += curGuess;
    guessNum += 1;
    console.log(guessNum);

   for (i = 0; i < correctLetters.length; i++) {
       if (curGuess == correctLetters[i]) {
            document.getElementById("correctGuess").innerHTML += curGuess;
            correctGuessedLetters.push(curGuess);
            console.log(correctGuessedLetters);
       }
   }

    if (correctGuessedLetters.sort().join(',')=== correctLetters.sort().join(',')){
        if (guessNum >= 25) {
            rank = "amatuer";
        } else if (guessNum >= 20 && guessNum < 25) {
            rank = "ok";
        } else if (guessNum >= 15 && guessNum < 20) {
            rank = "not bad";
        } else if (guessNum >= 10 && guessNum < 15) {
            rank = "semi-pro";
        } else if (guessNum >= 5 && guessNum < 10) {
            rank = "pro";
        }
        alert("You won!, the correct word was " + word + ".\nIt took you " + guessNum + " guesses.\nYou are a " + rank + " guesser!");
        location.reload();
    }
    else console.log('not a match');

    document.getElementById("numOfGuess").innerHTML = guessNum;
    document.getElementById("guessedLetter").value = "";
}

function generateWord() {
    var randNum = Math.floor(Math.random() * 10);
    var wordBankArr = [
        "BANKS",
        "TRAINS",
        "BROCCOLI",
        "LONDON",
        "AMERICA",
        "PLAYGROUND",
        "DESKTOP",
        "UTOPIA",
        "GENERATIONS",
        "APARTMENTS"
    ];

    var word = wordBankArr[randNum];
    console.log(word);
    correctLetters = word.split("");

    return correctLetters, word;
}