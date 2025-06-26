let cards = [
  {
    id: 1,
    title: "Javascript",
    description: "Challenge yourself with Javascript",
    questions: "📄 20 questions",
    link: "quiz.html#javascript",
  },
  {
    id: 2,
    title: "Python",
    description: "Challenge yourself with Python",
    questions: "📄 20 questions",
    link: "quiz.html#python",
  },
  {
    id: 3,
    title: "CSS",
    description: "Challenge yourself with CSS",
    questions: "📄 20 questions",
    link: "quiz.html#css",
  },
  {
    id: 4,
    title: "HTML",
    description: "Challenge yourself with HTML",
    questions: "📄 20 questions",
    link: "quiz.html#html",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("quizModal");
  const startButtons = document.querySelectorAll(".start-quiz-btn"); // All buttons
  const confirmBtn = document.getElementById("confirmQuiz");
  const cancelBtn = document.getElementById("cancelQuiz");
  const cardsContainer = document.querySelector(".cards");

  // Loop through all start buttons and add click listener
  startButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
  console.log(cardsContainer);
  console.log(cards[0]);
  // generate cards
  cards.map((e) => {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    let h3 = document.createElement("h3");
    cardDiv.appendChild(h3);
    h3.textContent = e.title;
    let Questions = document.createElement("p");
    Questions.textContent = e.questions;
    cardDiv.appendChild(Questions);
    let description = document.createElement("p");
    description.textContent = e.description;
    cardDiv.appendChild(description);

    let btn = document.createElement("button");
    btn.classList.add("start-quiz-btn");
    btn.textContent = "Start quiz";
    btn.addEventListener("click", function () {
      console.log("clicked");
      modal.style.display = "block";
      modalStart(e.link);
    });
    cardDiv.appendChild(btn);
    cardsContainer.appendChild(cardDiv);
  });

  function modalStart(link) {
    confirmBtn.addEventListener("click", function () {
      confirmBtn.disabled = true;
      cancelBtn.disabled = true;

      const countdownEl = document.createElement("div");
      countdownEl.className = "countdown-text";
      countdownEl.textContent = "Starting in 3...";

      const buttonsContainer = document.querySelector(".modal-buttons");
      buttonsContainer.appendChild(countdownEl);

      let count = 2;
      const countdown = setInterval(() => {
        if (count > 0) {
          countdownEl.textContent = `Starting in ${count}...`;
          count--;
        } else {
          clearInterval(countdown);
          window.location.href = link;
        }
      }, 1000);
    });

    cancelBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
