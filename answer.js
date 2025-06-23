

//console.log(questionList);

questionList.forEach(e => {

    let question = e.question;
    let answer = e.answer;

    let addin = `<div class="answerBoard"><div class="question">${question}</div><div class="answers">${answer}</div></div>`

    document.querySelector("br").insertAdjacentHTML("afterend", addin);
})




//document.querySelector(".question").innerHTML = "Goodbye World";


function checkup(){
    let answerBoard = document.querySelector("div.answerBoard");
    console.log(answerBoard);
}
