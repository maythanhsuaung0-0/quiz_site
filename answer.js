
//Reveal the correct answer.

questionList.forEach(e => {

    let question = e.question;
    let answer = e.answer;

    let addin = `<div class="answerBoard"><div class="question">${question}</div><div class="answers">${answer}</div></div>`

    document.querySelector("br").insertAdjacentHTML("afterend", addin);

})

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

statusBar(50,100);
