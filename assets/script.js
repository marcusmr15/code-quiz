var startBtn = document.querySelector('.container') //Start Quiz button
var quizQuestions = document.querySelector('.containerQ') //Questions box
var questionBtns = document.querySelectorAll('.btnQ') // quiz answer buttons
var quizResults = document.querySelector('.containerResults') // The results of the Quiz
var highScoreLists = document.querySelector('.containerHS') // High score stats
var highScoreBtn = document.querySelector('#highScores') //The high score purple btn

startBtn.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Quiz started')
    startBtn.classList.add('hide')
    quizQuestions.classList.remove('hide')
}


questionBtns.forEach(questionBtn => {
    questionBtn.addEventListener('click', results)
})

function results() {
    quizQuestions.classList.add('hide')
    quizResults.classList.remove('hide')
}

var startTime = 75;
var countdown = document.querySelector('#countdown');
var timer;
startBtn.addEventListener('click', countdownStart)

function countdownStart() {
  console.log('Countdown started')
  countdown.innerHTML = ('Time: ' + startTime);

  timer = setInterval(function() {
    startTime--;
    if (startTime <= 0) {
      clearInterval(timer);
      countdown.innerHTML = 'Time: 0';
      console.log('Countdown finished');
    } else {
      countdown.innerHTML = 'Time: ' + startTime;
    }
  }, 1000);
}

function nextQuestion() {

}

function answerSelected() {

}

highScoreBtn.addEventListener('click', viewHighScores)

function viewHighScores() {
    startBtn.classList.add('hide')
    quizQuestions.classList.add('hide')
    quizResults.classList.add('hide')
    highScoreLists.classList.remove('hide')

    clearInterval(timer);
    countdown.innerHTML = 'Time: 0';
      console.log('Countdown stopped');
}

