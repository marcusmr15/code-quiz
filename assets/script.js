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
  clearInterval(timer);
  startTime = 75;
  countdown.innerHTML = 'Time: ' + startTime;

  questionValues1();
}

var title = document.querySelector('#questionTitle');
var first = document.querySelector('.answer1');
var second = document.querySelector('.answer2');
var third = document.querySelector('.answer3');
var forth = document.querySelector('.answer4');

var correctAnswer = document.querySelector('.answerCorrect');
var wrongAnswer = document.querySelector('.answerWrong');

function questionValues1() {
  title.innerHTML = 'Commonly used data types DO Not include:';
  first.innerHTML = '1. strings';
  second.innerHTML = '2. booleans';
  third.innerHTML = '3. alerts';
  forth.innerHTML = '4. numbers';

  first.addEventListener('click', function() {
    wrongAnswer.classList.remove('hide')    
    questionValues2();
  });

  second.addEventListener('click', questionValues2);
  third.addEventListener('click', questionValues2);
  forth.addEventListener('click', questionValues2);
}

function questionValues2() {
  title.innerHTML = '2';
  first.innerHTML = '1. gg';
  second.innerHTML = '2. gg';
  third.innerHTML = '3. gg';
  forth.innerHTML = '4. gg';

  first.addEventListener('click', questionValues3);
  second.addEventListener('click', questionValues3);
  third.addEventListener('click', questionValues3);
  forth.addEventListener('click', questionValues3);
}

function questionValues3() {
  title.innerHTML = '3';
  first.innerHTML = '1. qq';
  second.innerHTML = '2. qq';
  third.innerHTML = '3. qq';
  forth.innerHTML = '4. qq';

  first.addEventListener('click', questionValues4);
  second.addEventListener('click', questionValues4);
  third.addEventListener('click', questionValues4);
  forth.addEventListener('click', questionValues4);
}

function questionValues4() {
  title.innerHTML = '4';
  first.innerHTML = '1. ww';
  second.innerHTML = '2. ww';
  third.innerHTML = '3. ww';
  forth.innerHTML = '4. ww';

  first.addEventListener('click', questionValues5);
  second.addEventListener('click', questionValues5);
  third.addEventListener('click', questionValues5);
  forth.addEventListener('click', questionValues5);
}

function questionValues5() {
  title.innerHTML = '5';
  first.innerHTML = '1. hh';
  second.innerHTML = '2. hh';
  third.innerHTML = '3. hh';
  forth.innerHTML = '4. hh';

  first.addEventListener('click', results);
  second.addEventListener('click', results);
  third.addEventListener('click', results);
  forth.addEventListener('click', results);
}

var startTime = '';
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
      quizQuestions.classList.add('hide')
      quizResults.classList.remove('hide') 

    } else {
      countdown.innerHTML = 'Time: ' + startTime;
    }
  }, 1000);
}


/*questionBtns.forEach(questionBtn => {
    questionBtn.addEventListener('click', results)
})*/

function results() {
    quizQuestions.classList.add('hide')
    quizResults.classList.remove('hide')
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

var goBackBtn = document.querySelector('.goBack')
var clearHS = document.querySelector('.clearHS')

goBackBtn.addEventListener('click', goBackToStart)

function goBackToStart() {
  startBtn.classList.remove('hide')
  quizQuestions.classList.add('hide')
  quizResults.classList.add('hide')    
  highScoreLists.classList.add('hide')
}

