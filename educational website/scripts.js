document.addEventListener("DOMContentLoaded", function() {
    const quizButton = document.getElementById('quiz-button');
    const quizPopup = document.getElementById('quiz-popup');
    const quizForm = document.getElementById('ai-quiz');
    const quizResult = document.getElementById('quiz-result');

    quizButton.addEventListener('click', () => {
        quizPopup.classList.remove('hidden');
        quizResult.classList.add('hidden'); 
    });

    quizForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(quizForm);
        let score = 0;

        
        for (let i = 1; i <= 5; i++) {
            const question = `q${i}`;
            const correctAnswer = `a`;

             
            if (formData.get(question) === correctAnswer) {
                score++;
            }
        }

        const totalQuestions = 5; // Total number of questions
        const percentage = (score / totalQuestions) * 100;
        quizResult.innerHTML = `You scored ${score} out of ${totalQuestions} (${percentage}%)`;
        quizResult.classList.remove('hidden');
    });
});



/* give user feedback */
document.addEventListener("DOMContentLoaded", function() {
    const confirmationMessage = document.getElementById('confirmation-message');
  
    // Function to show confirmation message
    function showConfirmationMessage() {
      confirmationMessage.classList.remove('hidden');
      setTimeout(() => {
        confirmationMessage.classList.add('hidden');
      }, 3000); // Hide the message after 3 seconds (adjust as needed)
    }
  
    // Example: Add event listener to form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission for this example
      // Perform form submission logic here
      // Example: If form is submitted successfully, call the showConfirmationMessage function
      showConfirmationMessage();
    });
  });




  