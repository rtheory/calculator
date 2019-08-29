function add(a,b){
    return parseFloat((a+b).toFixed(12));
}
function sub(a,b){
    return parseFloat((a-b).toFixed(12));
}
function mul(a,b){
    return parseFloat((a*b).toFixed(12));
}
function div(a,b){
    return parseFloat((a/b).toFixed(12));
}

function operate(op,a,b){
    switch (op){
        case "+":
            return add(a,b);
            break;
        case "−":
            return sub(a,b);
            break;
        case "×":
            return mul(a,b);
            break;
        case "÷":
            return div(a,b);
            break;
    }
}

let displayTop = document.querySelector("#displayTop");
let displayBottom = document.querySelector("#displayBottom");
let numA, op, numB;
let clearOnNextClick = false;

let clearScreen = function(){
    displayTop.textContent = "";
    displayBottom.textContent = "0";
}

document.querySelector("#clear").addEventListener("click", clearScreen);

document.querySelector("#back").addEventListener("click", function(e){
    displayBottom.textContent = displayBottom.textContent.slice(0, -1);
});

document.querySelectorAll(".button.num").forEach(btnNum => {
    btnNum.addEventListener("click", function(e){
        if (displayBottom.textContent === "0" || clearOnNextClick){
            displayBottom.textContent = e.target.textContent;
            clearOnNextClick = false;
        } else {
            displayBottom.textContent += e.target.textContent;
        }
    });
})

document.querySelectorAll(".button.op").forEach(btnNum => {
    btnNum.addEventListener("click", function(e){
        numA = +displayBottom.textContent;
        op = e.target.textContent;
        displayTop.textContent += numA + " " + op + " ";
        displayBottom.textContent = "0";
    });
})

document.querySelector("#submit").addEventListener("click", function(e){
    numB = +displayBottom.textContent;
    displayBottom.textContent = operate(op, numA, numB);
    displayTop.textContent = ""
    clearOnNextClick = true;
});

clearScreen();