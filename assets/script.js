document.getElementById('startbtn').addEventListener('click', function() {
    var timeLeft = 75; // Duration of the timer in seconds
    var timerElement = document.getElementById('timer');
  
    // Update the timer element with the current time
    var resetTimer = function() {
      timerElement.textContent = 'Time left: ' + timeLeft + 's';
      timeLeft--; // Decrement the time left
  
      // Stop the timer when it reaches 0
      if (timeLeft < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = 'Game Over!';
        // You can also trigger any other actions to be performed when the time is up
      }
    };
  
    // Call updateTimer every second
    var timerInterval = setInterval(resetTimer, 1000);
  
    // Update the timer immediately when the button is clicked
    resetTimer();
  });