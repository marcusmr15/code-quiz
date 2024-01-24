var startBtn = document.querySelector('.container') //Start Quiz button
var quizQuestions = document.querySelector('.containerQ') //Questions box
var questionBtns = document.querySelectorAll('.btnQ') // quiz answer buttons
var quizResults = document.querySelector('.containerResults') // The results of the Quiz
var highScoreLists = document.querySelector('.containerHS') // High score stats
var highScoreBtn = document.querySelector('#highScores') //The high score purple btn

var startTime = 75;
var countdown = document.querySelector('#countdown');
var timer;
startBtn.addEventListener('click', countdownStart)

function countdownStart() {
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

function countdownPause() {
  clearInterval(timer);
  console.log('Countdown paused');
  countdown.innerHTML = 'Time: ' + startTime;
}

function countdownReset() {
  clearInterval(timer);
  startTime = 75;
  countdown.innerHTML = 'Time: ' + startTime;
  console.log('Countdown reset');
}

startBtn.addEventListener('click', startQuiz)

function startQuiz() {
  console.log('Quiz started')
  startBtn.classList.add('hide')    
  quizQuestions.classList.remove('hide')
  countdown.innerHTML = 'Time: ' + startTime;
  questionValues1();
}

var title = document.querySelector('#questionTitle');
var first = document.querySelector('.answer1');
var second = document.querySelector('.answer2');
var third = document.querySelector('.answer3');
var forth = document.querySelector('.answer4');

var penaltyTime = 10;

var correctAnswer = document.querySelector('.answerCorrect');
var wrongAnswer = document.querySelector('.answerWrong');

function questionValues1() {
  title.innerHTML = 'I. Commonly used data types DO Not include:';
  first.innerHTML = '1. strings';
  second.innerHTML = '2. booleans';
  third.innerHTML = '3. alerts'; //correct
  forth.innerHTML = '4. numbers';

  first.addEventListener('click', handleFirstAnswer);
  second.addEventListener('click', handleSecondAnswer);
  third.addEventListener('click', handleThirdAnswer);
  forth.addEventListener('click', handleForthAnswer);
}

function handleFirstAnswer() {
  if (first.innerHTML === '1. strings') {
    wrongAnswer.classList.remove('hide');
    removeEventListeners();
    questionValues2();
    startTime -= penaltyTime;
    countdown.innerHTML = 'Time: ' + startTime;
  }
}

function handleSecondAnswer() {
  if (second.innerHTML === '2. booleans') {
    wrongAnswer.classList.remove('hide');
    removeEventListeners();
    questionValues2();
    startTime -= penaltyTime;
    countdown.innerHTML = 'Time: ' + startTime;
  }
}

function handleThirdAnswer() {
  if (third.innerHTML === '3. alerts') {
    correctAnswer.classList.remove('hide');
    removeEventListeners();
    questionValues2();
  }
}

function handleForthAnswer() {
  if (forth.innerHTML === '4. numbers') {
    wrongAnswer.classList.remove('hide');
    removeEventListeners();
    questionValues2();
    startTime -= penaltyTime;
    countdown.innerHTML = 'Time: ' + startTime;
  }
}

function questionValues2() {
  title.innerHTML = 'II. The condition in an if / else statement is enclosed with ________.';
  first.innerHTML = '1. parenthesis'; //correct!
  second.innerHTML = '2. curly brackets';
  third.innerHTML = '3. quotes';
  forth.innerHTML = '4. square brackets';

  first.addEventListener('click', handleFirstAnswer2);
  second.addEventListener('click', handleSecondAnswer2);
  third.addEventListener('click', handleThirdAnswer2);
  forth.addEventListener('click', handleForthAnswer2);
}

function handleFirstAnswer2() {
  if (first.innerHTML === '1. parenthesis') {
    wrongAnswer.classList.add('hide');
    correctAnswer.classList.remove('hide');
    removeEventListeners();
    questionValues3();
  }
}

function handleSecondAnswer2() {
  if (second.innerHTML === '2. curly brackets') {
    wrongAnswer.classList.remove('hide');
    correctAnswer.classList.add('hide');
    removeEventListeners();
    questionValues3();
    startTime -= penaltyTime;
    countdown.innerHTML = 'Time: ' + startTime;
  }
}

function handleThirdAnswer2() {
  if (third.innerHTML === '3. quotes') {
    wrongAnswer.classList.remove('hide');
    correctAnswer.classList.add('hide');
    removeEventListeners();
    questionValues3();
    startTime -= penaltyTime;
    countdown.innerHTML = 'Time: ' + startTime;
  }
}

function handleForthAnswer2() {
  if (forth.innerHTML === '4. square brackets') {
    wrongAnswer.classList.remove('hide');
    correctAnswer.classList.add('hide');
    removeEventListeners();
    questionValues3();
    startTime -= penaltyTime;
    countdown.innerHTML = 'Time: ' + startTime;
  }
}

function questionValues3() {
  title.innerHTML = 'III. Arrays in JavaScript can be used to store _________.';
  first.innerHTML = '1. numbers and strings';
  second.innerHTML = '2. other arrays';
  third.innerHTML = '3. booleans';
  forth.innerHTML = '4. all of the above'; //correct!

  first.addEventListener('click', handleFirstAnswer3);
  second.addEventListener('click', handleSecondAnswer3);
  third.addEventListener('click', handleThirdAnswer3);
  forth.addEventListener('click', handleForthAnswer3);
}

function handleFirstAnswer3() {
  if (first.innerHTML === '1. numbers and strings') {
    wrongAnswer.classList.remove('hide');
    correctAnswer.classList.add('hide');
    removeEventListeners();
    questionValues4();
    startTime -= penaltyTime;
    countdown.innerHTML = 'Time: ' + startTime;
  }
}

function handleSecondAnswer3() {
  if (second.innerHTML === '2. other arrays') {
    wrongAnswer.classList.remove('hide');
    correctAnswer.classList.add('hide');
    removeEventListeners();
    questionValues4();
    startTime -= penaltyTime;
    countdown.innerHTML = 'Time: ' + startTime;
  }
}

function handleThirdAnswer3() {
  if (third.innerHTML === '3. booleans') {
    wrongAnswer.classList.remove('hide');
    correctAnswer.classList.add('hide');
    removeEventListeners();
    questionValues4();
    startTime -= penaltyTime;
    countdown.innerHTML = 'Time: ' + startTime;
  }
}

function handleForthAnswer3() {
  if (forth.innerHTML === '4. all of the above') {
    wrongAnswer.classList.add('hide');
    correctAnswer.classList.remove('hide');
    removeEventListeners();
    questionValues4();
  }
}

function questionValues4() {
  title.innerHTML = 'IV. String values must be enclosed within ________ when being assigned to variables.';
  first.innerHTML = '1. commas';
  second.innerHTML = '2. curly brackets';
  third.innerHTML = '3. quotes'; //correct!
  forth.innerHTML = '4. parenthesis';

  first.addEventListener('click', handleFirstAnswer4);
  second.addEventListener('click', handleSecondAnswer4);
  third.addEventListener('click', handleThirdAnswer4);
  forth.addEventListener('click', handleForthAnswer4);
}

function handleFirstAnswer4() {
  if (first.innerHTML === '1. commas') {
    wrongAnswer.classList.remove('hide');
    correctAnswer.classList.add('hide');
    removeEventListeners();
    questionValues5();
    startTime -= penaltyTime;
    countdown.innerHTML = 'Time: ' + startTime;
  }
}

function handleSecondAnswer4() {
  if (second.innerHTML === '2. curly brackets') {
    wrongAnswer.classList.remove('hide');
    correctAnswer.classList.add('hide');
    removeEventListeners();
    questionValues5();
    startTime -= penaltyTime;
    countdown.innerHTML = 'Time: ' + startTime;
  }
}

function handleThirdAnswer4() {
  if (third.innerHTML === '3. quotes') {
    wrongAnswer.classList.add('hide');
    correctAnswer.classList.remove('hide');
    removeEventListeners();
    questionValues5();
  }
}

function handleForthAnswer4() {
  if (forth.innerHTML === '4. parenthesis') {
    wrongAnswer.classList.remove('hide');
    correctAnswer.classList.add('hide');
    removeEventListeners();
    questionValues5();
    startTime -= penaltyTime;
    countdown.innerHTML = 'Time: ' + startTime;
  }
}

function questionValues5() {
  title.innerHTML = 'V. A very useful tool used during development and debugging for printing content to the debugger is:';
  first.innerHTML = '1. JavaScript';
  second.innerHTML = '2. terminal/bash';
  third.innerHTML = '3. for loops';
  forth.innerHTML = '4. console.log'; //correct!

  first.addEventListener('click', handleFirstAnswer5);
  second.addEventListener('click', handleSecondAnswer5);
  third.addEventListener('click', handleThirdAnswer5);
  forth.addEventListener('click', handleForthAnswer5);
}

function handleFirstAnswer5() {
  if (first.innerHTML === '1. JavaScript') {
    wrongAnswer.classList.remove('hide');
    correctAnswer.classList.add('hide');
    countdownPause();
    removeEventListeners();
    results();
    //startTime -= penaltyTime;
    //countdown.innerHTML = 'Time: ' + startTime;
  }
}

function handleSecondAnswer5() {
  if (second.innerHTML === '2. terminal/bash') {
    wrongAnswer.classList.remove('hide');
    correctAnswer.classList.add('hide');
    countdownPause();
    removeEventListeners();
    results();
    //startTime -= penaltyTime;
    //countdown.innerHTML = 'Time: ' + startTime;
  }
}

function handleThirdAnswer5() {
  if (third.innerHTML === '3. for loops') {
    wrongAnswer.classList.remove('hide');
    correctAnswer.classList.add('hide');
    countdownPause();
    removeEventListeners();
    results();
    //startTime -= penaltyTime;
    //countdown.innerHTML = 'Time: ' + startTime;
  }
}

function handleForthAnswer5() {
  if (forth.innerHTML === '4. console.log') {
    wrongAnswer.classList.add('hide');
    correctAnswer.classList.remove('hide');
    countdownPause();
    removeEventListeners();
    results();
  }
}

function removeEventListeners() {
  first.removeEventListener('click', handleFirstAnswer);
  second.removeEventListener('click', handleSecondAnswer);
  third.removeEventListener('click', handleThirdAnswer);
  forth.removeEventListener('click', handleForthAnswer);

  first.removeEventListener('click', handleFirstAnswer2);
  second.removeEventListener('click', handleSecondAnswer2);
  third.removeEventListener('click', handleThirdAnswer2);
  forth.removeEventListener('click', handleForthAnswer2);

  first.removeEventListener('click', handleFirstAnswer3);
  second.removeEventListener('click', handleSecondAnswer3);
  third.removeEventListener('click', handleThirdAnswer3);
  forth.removeEventListener('click', handleForthAnswer3);

  first.removeEventListener('click', handleFirstAnswer4);
  second.removeEventListener('click', handleSecondAnswer4);
  third.removeEventListener('click', handleThirdAnswer4);
  forth.removeEventListener('click', handleForthAnswer4);

  first.removeEventListener('click', handleFirstAnswer5);
  second.removeEventListener('click', handleSecondAnswer5);
  third.removeEventListener('click', handleThirdAnswer5);
  forth.removeEventListener('click', handleForthAnswer5);
}  

function results() {
  quizQuestions.classList.add('hide')
  quizResults.classList.remove('hide')
  finalScoreResult.innerHTML = startTime;
}

var finalScoreResult = document.querySelector('#finalScore');
//var submitBtn =document.querySelector('.'); 

highScoreBtn.addEventListener('click', viewHighScores)

function viewHighScores() {
    startBtn.classList.add('hide')
    quizQuestions.classList.add('hide')
    quizResults.classList.add('hide')
    highScoreLists.classList.remove('hide')
    wrongAnswer.classList.add('hide')
    correctAnswer.classList.add('hide') 
    countdownReset();
    countdown.innerHTML = 'Time: 0';
}
 

var goBackBtn = document.querySelector('.goBack')
var clearHS = document.querySelector('.clearHS') // not yet in use

goBackBtn.addEventListener('click', goBackToStart)

function goBackToStart() {
  startBtn.classList.remove('hide')
  //quizQuestions.classList.add('hide')
  quizResults.classList.add('hide')    
  highScoreLists.classList.add('hide')
  countdownReset();
  countdown.innerHTML = 'Time: 0';
}
