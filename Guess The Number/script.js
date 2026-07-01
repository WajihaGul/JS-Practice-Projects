const guessedNumber = 7;

const btn = document.getElementById("subt");
const displayData = document.querySelector("#displayCount span");
const prevData = document.querySelector("#prevCount span");
let count = 0;

function getResult(){
    const getData = document.getElementById("guessField");

    if(getData.value > guessedNumber || getData.value < guessedNumber){
        count++;
        displayData.textContent = 10-count;
        prevData.textContent = getData.value;
    }
    else if(getData.value == guessedNumber && count <=10){
        alert("YOU GUESSED THE NUMBER CORRECTLY")
        count = 0;
        displayData.textContent = 10;
    }

    if(count > 10){
        alert("YOU FAILED")
        count = 0;
        displayData.textContent = 10;
    }
}

btn.addEventListener("click", getResult);