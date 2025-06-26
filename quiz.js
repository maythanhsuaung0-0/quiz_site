let choices_list = document.querySelector(".questions-list")
let track = document.querySelector(".track")
let container = document.querySelector(".transparent-card")
let question = document.querySelector("#questionCard h3")
let button = document.querySelector(".next")
let submitButton = document.querySelector(".submit")
let prevButton = document.querySelector(".prev")
let back = document.querySelector(".back")
let answered = []
let index = 0
let isAnswered = false
async function fetchData(quizType) {
  let data;
  if (quizType === 'html') {
    await fetch("./public/data/html.json").then((res) => res.json()).then((e) => data = e).catch((err) => console.log("fking err", err))
  }
  else if (quizType === 'javascript') {
    await fetch("./public/data/javascript.json").then((res) => res.json()).then((e) => data = e).catch((err) => console.log("fking err", err))
  }
  else if (quizType === 'python') {
   console.log('fetch from pt')
    await fetch("./public/data/python.json").then((res) => res.json()).then((e) => data = e).catch((err) => console.log("fking err", err))
  }
  else {

    await fetch("./public/data/css.json").then((res) => res.json()).then((e) => data = e).catch((err) => console.log("fking err", err))
  }
  return data

}

async function useData() {
  const pathname = window.location.hash.slice(1)
    console.log('hash',pathname)
  let q_and_a = await fetchData(pathname)
  setTimeout(() => {
    button.classList.remove("none")
    let questions;
    switch (pathname) {
      case 'html':
        questions = q_and_a.html
        break;
      case 'javascript':
        questions = q_and_a.javascript
        break;
      case 'python':
        questions = q_and_a.python
        break;

      default:
        questions = q_and_a.css
        break;
    }
    loadQuestion(question, questions, index)
    button.addEventListener("click", function() {
      if (index !== 20) {
        choices_list.dataset.checked = "false"
        loadQuestion(question, questions, index)

        if (isAnswered == false) {
          alert("you must answered all questions")
        }
        else {
          isAnswered = false;
        }
      }
      else {
        window.sessionStorage.setItem("answers", JSON.stringify(answered))
        window.location.href = "/result.html"
      }

    }, 300)
  })


}
function checkAnswer(q, current, self, parent) {
  isAnswered = true;
  if (index < 20) {
    index += 1
  }
  console.log("question" + q.answer + " ans" + current)
  let ans;
  let modified_q = { ...q };
  delete modified_q.choices
  if (q.answer == current) {
    parent.classList.remove("wrong")
    parent.classList.add("correct")
    ans = { ...modified_q, "selected": current, "status": "correct" }
  }
  else {
    parent.classList.add("wrong")
    ans = { ...modified_q, "selected": current, "status": "wrong" }

  }
  answered.push(ans)
}
function loadQuestion(question, questions, questionNo) {
  console.log('ans', answered)
  let done = false;
  let q = questions[questionNo]
  track.innerText = `${questionNo + 1} of ${questions.length}`
  question.innerText = q.question
  choices = q.choices.map((e, i) => {
    var radio = document.createElement("input")
    var label = document.createElement("label")
    var div = document.createElement("div")
    radio.setAttribute("name", q.question)
    radio.setAttribute("id", e)
    radio.setAttribute("type", "radio")
    div.appendChild(radio)
    div.appendChild(label)
    radio.classList.add("question")
    div.classList.add("radio-card")
    label.textContent = e
    radio.addEventListener('change', function() {
      if (choices_list.dataset.checked == "true") {
        console.log("answers can't be changed")
        div.classList.add("shake")
        setTimeout(
          () => {
            div.classList.remove("shake")
          }, 300
        )
      }
      else {
        choices_list.dataset.checked = "true"
        checkAnswer(q, e, this, div)
      }
    })
    return div
  })
  if (choices_list.children) {
    choices_list.innerHTML = ""

  }
  choices.forEach((e) => {
    choices_list.appendChild(e)
  })

}
// call all the functions
useData()
back.addEventListener("click", function() {
  console.log("now", answered.length)
  if (answered.length > 0) {
    let quit = confirm("Are you sure you want to leave the progress? You will lose the current record")
    console.log('quit', quit)
    if (quit) {
      sessionStorage.clear()
      window.location.href = "/index.html"
    }
  }
  else {
    sessionStorage.clear()
    window.location.href = "/index.html"

  }


})
