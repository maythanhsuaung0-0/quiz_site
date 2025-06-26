
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

    let addin = `<div class="wrongBoard">
                    <div class="question">
                        <span class="questionNumber">Q${questionNumber}</span>
                        ${question}
                    </div>
                    <div class="resultBoard">
                        <span class="selected">
                            <p>
                                <img src="images/incorrect_icon.png" width="25px" height="25px" />
                                Your Answer:
                            </p>
                            <p>${selected}</p>
                        </span>
                        <span class="answers">
                            <p>
                                <img src="images/correct_icon.png" width="25px" height="25px" />
                                Correct Answer: 
                            </p>
                            <p>${answer}</p>
                        </span>
                    </div>
                </div>`

    document.querySelector("#incorrect").insertAdjacentHTML("beforeend", addin);

})

/*
totalCorrectAns().forEach(e => {

    let question = e.question;
    let answer = e.answer;

    let addin = `<div class="answerBoard"><div class="question">${question}</div><div class="answers">${answer}</div></div>`

    document.querySelector("#correct").insertAdjacentHTML("beforeend", addin);

}*/

statusBar(totalCorrectAns().length,answers.length);
