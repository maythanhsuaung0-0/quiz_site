document.addEventListener('DOMContentLoaded', function() {
  // Get the elements
  const modal = document.getElementById("quizModal");
  const startBtn = document.getElementById("startQuizButton");
  const confirmBtn = document.getElementById("confirmQuiz");
  const cancelBtn = document.getElementById("cancelQuiz");

  // Once the Start Quiz button is clicked
  startBtn.addEventListener("click", function(e) {
    e.preventDefault();
    modal.style.display = "block";
  });

  // When Confirm is clicked - start countdown
  confirmBtn.addEventListener("click", function() {
    // Disable buttons during countdown
    confirmBtn.disabled = true;
    cancelBtn.disabled = true;
    
    // Create countdown element
    const countdownEl = document.createElement("div");
    countdownEl.className = "countdown-text";
    countdownEl.textContent = "Starting in 3...";
    
    // Insert after buttons
    const buttonsContainer = document.querySelector(".modal-buttons");
    buttonsContainer.appendChild(countdownEl);
    
    // Start countdown
    let count = 2;
    const countdown = setInterval(() => {
      if (count > 0) {
        countdownEl.textContent = `Starting in ${count}...`;
        count--;
      } else {
        clearInterval(countdown);
        window.location.href = "quiz.html";
      }
    }, 1000);
  });

  // Cancel button
  cancelBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  // Close when clicking outside
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});