
//Reveal the correct answer.
let answers = JSON.parse(sessionStorage.getItem("answers"))

console.log(answers)

//Change the status bar in the result page.

function statusBar(correct, total){
    let correctPercentage = Math.floor((correct/total)*100);
    document.documentElement.style.setProperty("--status-bar", `${correctPercentage}%`);
    document.querySelector("div#statusBar div").innerHTML= `${correctPercentage}%`;
    document.querySelector("#scoreDisplay").innerHTML= `${correctPercentage}%`;

    messageBar(correctPercentage)
}

function messageBar(score){

    if (score >= 100){
        document.querySelector("div#message").innerHTML = "Congratulation!!!";
    }else if (score > 90){
        document.querySelector("div#message").innerHTML = "So Close to a Perfect Grade!";
    }else if (score > 80){
        document.querySelector("div#message").innerHTML = "Good Effort!";
    }else if (score > 70){
        document.querySelector("div#message").innerHTML = "Try a Bit Harder Next Time.";
    }else {
        document.querySelector("div#message").innerHTML = "You can do better!";
    }
}

function totalCorrectAns(){

    var totalCorrect = [];

    for (let i = 0; i < answers.length; i++){
        if (answers[i].status == "correct"){
            totalCorrect.push(answers[i])
        }
    }

    return totalCorrect;
}

function totalIncorrectAns(){

    var totalIncorrect = [];

    for (let i = 0; i < answers.length; i++){
        if (answers[i].status == "wrong"){
            totalIncorrect.push(answers[i])
        }
    }

    return totalIncorrect;
}

var number_of_correct = totalCorrectAns().length;
var number_of_incorrect = totalIncorrectAns().length;
//var result_display = Math.floor((totalCorrectAns().length/total)*100);

document.querySelector("#correctDisplay").insertAdjacentHTML("beforeend", number_of_correct);
document.querySelector("#incorrectDisplay").insertAdjacentHTML("beforeend", number_of_incorrect);

if (number_of_incorrect > 0){
    document.querySelector("h2").innerHTML = "Question You Got Wrong";
};

totalIncorrectAns().forEach(e => {

    let question = e.question;

    let selected = e.selected;

    let answer = e.answer;

    let questionNumber = e.id;

    
    var wrongBoard = document.createElement("div");
    wrongBoard.classList.add("wrongBoard");
    var questionBar = document.createElement("div");
    questionBar.classList.add("question");
    var questionNumbers = document.createElement("span");
    questionNumbers.classList.add("questionNumber");

    var resultBoard = document.createElement("div");
    resultBoard.classList.add("resultBoard");

    var selectedBar = document.createElement("span");
    selectedBar.classList.add("selected");
    var incorrect_icon = document.createElement("img");
    incorrect_icon.setAttribute("src", "images/incorrect_icon.png");
    incorrect_icon.setAttribute("width", "25px")
    incorrect_icon.setAttribute("height", "25px")
    var incorrect_icon_bar = document.createElement("p");
    var incorrectAns = document.createElement("p");

    var ansBar = document.createElement("span");
    ansBar.classList.add("answers");
    var correct_icon = document.createElement("img");
    correct_icon.setAttribute("src", "images/correct_icon.png");
    correct_icon.setAttribute("width", "25px");
    correct_icon.setAttribute("height", "25px");
    var correct_icon_bar = document.createElement("p");
    var correctAns = document.createElement("p");

    wrongBoard.appendChild(questionBar);
    wrongBoard.appendChild(resultBoard);

    questionBar.appendChild(questionNumbers);
    questionNumbers.textContent = `Q${questionNumber}`;
    questionBar.append(`${question}`);

    resultBoard.appendChild(selectedBar);
    selectedBar.appendChild(incorrect_icon_bar);
    selectedBar.appendChild(incorrectAns);
    incorrect_icon_bar.append(incorrect_icon, " Your Answer:");
    incorrectAns.textContent = `${selected}`;

    resultBoard.appendChild(ansBar);
    ansBar.appendChild(correct_icon_bar);
    ansBar.appendChild(correctAns);
    correct_icon_bar.append(correct_icon, " Correct Answer:");
    correctAns.textContent = `${answer}`;

    document.querySelector("#incorrect").appendChild(wrongBoard);

})
    

/*
totalCorrectAns().forEach(e => {

    let question = e.question;
    let answer = e.answer;

    let addin = `<div class="answerBoard"><div class="question">${question}</div><div class="answers">${answer}</div></div>`

    document.querySelector("#correct").insertAdjacentHTML("beforeend", addin);

}*/

statusBar(totalCorrectAns().length,answers.length);
