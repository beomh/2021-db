//const Number = document.getElementById("num");
const output = document.getElementsByClassName("js-title");
const slider = document.getElementById("js-range"); 
const printForm = document.getElementById("js-guess");
const display = document.getElementById("js-result");

function randomNum(min, max){
    const randNum = Math.floor(Math.random()*(max-min+1)) + min;
    return randNum; 
}

const handlePrint = (e) => {
    e.preventDefault();

    const maxvar = slider.value
    //const num = Number.value
    const num = printForm.querySelector("input");
    const randnum = randomNum(0, maxvar);
    const displaySpan2 = output[0].querySelector("span");
    displaySpan2.innerHTML = `${maxvar}`;
    const displaySpan = display.querySelector("span");
    if(num.value>randnum){
        displaySpan.innerHTML = `
        You choose: ${num.value}, the machine choose: ${randnum}<br>
        You win!<br>`;
    }
    else if(num.value<randnum){
        displaySpan.innerHTML = `
        You choose: ${num.value}, the machine choose: ${randnum}<br>
        You lost!<br>`;
    }
    else{
        displaySpan.innerHTML = `
        You choose: ${num.value}, the machine choose: ${randnum}<br>
        Draw!<br>`;
    }
    
};

printForm.addEventListener("submit", handlePrint); 