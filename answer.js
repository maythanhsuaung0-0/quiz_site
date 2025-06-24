
//Reveal the correct answer.
let answers = JSON.parse(sessionStorage.getItem("answers"))

console.log(answers)

//Change the status bar in the result page.

function statusBar(correct, total){
    let correctPercentage = Math.floor((correct/total)*100);
    document.documentElement.style.setProperty("--status-bar", `${correctPercentage}%`);
    document.querySelector("div#statusBar div").innerHTML= `${correctPercentage}%`;

    messageBar(correctPercentage)
}

function messageBar(score){

    if (score < 50){
        document.querySelector("div#message").innerHTML = "Try Hard Next Time";
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

totalIncorrectAns().forEach(e => {

    let question = e.question;
    let answer = e.answer;

    let addin = `<div class="answerBoard"><div class="question">${question}</div><div class="answers">${answer}</div></div>`

    document.querySelector("br").insertAdjacentHTML("afterend", addin);

})

statusBar(totalCorrectAns().length,answers.length);
