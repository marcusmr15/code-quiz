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
  title.innerHTML = 'I. Commonly used data types DO Not include:';
  first.innerHTML = '1. strings';
  second.innerHTML = '2. booleans';
  third.innerHTML = '3. alerts';
  forth.innerHTML = '4. numbers';

  first.addEventListener('click', function() {
    wrongAnswer.classList.remove('hide')    
    questionValues2();
    startTime -= 10;
    countdown.innerHTML = 'Time: ' + startTime;
  });
  second.addEventListener('click', function() {
    wrongAnswer.classList.remove('hide')    
    questionValues2();
    startTime -= 10;
    countdown.innerHTML = 'Time: ' + startTime;
  });
  third.addEventListener('click', function() { //correct!
    correctAnswer.classList.remove('hide')    
    questionValues2();
  });
  forth.addEventListener('click', function() {
    wrongAnswer.classList.remove('hide')    
    questionValues2();
    startTime -= 10;
    countdown.innerHTML = 'Time: ' + startTime;
  });
}

function questionValues2() {
  title.innerHTML = 'II. The condition in an if / else statement is enclosed with ________.';
  first.innerHTML = '1. parenthesis';
  second.innerHTML = '2. curly brackets';
  third.innerHTML = '3. quotes';
  forth.innerHTML = '4. square brackets';

  first.addEventListener('click', function() { //correct!
    wrongAnswer.classList.add('hide')
    correctAnswer.classList.remove('hide')      
    questionValues3();
    startTime += 10;
    countdown.innerHTML = 'Time: ' + startTime;
  });
  second.addEventListener('click', function() {
    wrongAnswer.classList.remove('hide')
    correctAnswer.classList.add('hide')      
    questionValues3();
  });
  third.addEventListener('click', function() {
    wrongAnswer.classList.remove('hide')
    correctAnswer.classList.add('hide')   
    questionValues3();
    startTime -= 10;
    countdown.innerHTML = 'Time: ' + startTime;
  });
  forth.addEventListener('click', function() {
    wrongAnswer.classList.remove('hide')
    correctAnswer.classList.add('hide')    
    questionValues3();
  });
}

function questionValues3() {
  title.innerHTML = 'III. Arrays in JavaScript can be used to store _________.';
  first.innerHTML = '1. numbers and strings';
  second.innerHTML = '2. other arrays';
  third.innerHTML = '3. booleans';
  forth.innerHTML = '4. all of the above';

  first.addEventListener('click', function() { 
    wrongAnswer.classList.remove('hide')
    correctAnswer.classList.add('hide')      
    questionValues4();
    startTime -= 20;
    countdown.innerHTML = 'Time: ' + startTime;
  });
  second.addEventListener('click', function() {
    wrongAnswer.classList.remove('hide')
    correctAnswer.classList.add('hide')      
    questionValues4();
  });
  third.addEventListener('click', function() {
    wrongAnswer.classList.remove('hide')
    correctAnswer.classList.add('hide')   
    questionValues4();
    startTime += 10;
    countdown.innerHTML = 'Time: ' + startTime;
  });
  forth.addEventListener('click', function() { //correct!
    wrongAnswer.classList.add('hide')
    correctAnswer.classList.remove('hide')    
    questionValues4();
    startTime += 10;
    countdown.innerHTML = 'Time: ' + startTime;
  });
}

function questionValues4() {
  title.innerHTML = 'IV. String values must be enclosed within ________ when being assigned to variables.';
  first.innerHTML = '1. commas';
  second.innerHTML = '2. curly brackets';
  third.innerHTML = '3. quotes';
  forth.innerHTML = '4. parenthesis';

  first.addEventListener('click', function() { 
    wrongAnswer.classList.remove('hide')
    correctAnswer.classList.add('hide')    
    questionValues5();
    startTime += 30;
    countdown.innerHTML = 'Time: ' + startTime;
  });
  second.addEventListener('click', function() {
    wrongAnswer.classList.remove('hide')
    correctAnswer.classList.add('hide')      
    questionValues5();
  });
  third.addEventListener('click', function() { //correct!
    wrongAnswer.classList.add('hide')
    correctAnswer.classList.remove('hide')   
    questionValues5();
  });
  forth.addEventListener('click', function() { 
    wrongAnswer.classList.remove('hide')
    correctAnswer.classList.add('hide')    
    questionValues5();
    startTime -= 30;
    countdown.innerHTML = 'Time: ' + startTime;
  });
}

function questionValues5() {
  title.innerHTML = 'V. A very useful tool used during development and debugging for printing content to the debugger is:';
  first.innerHTML = '1. JavaScript';
  second.innerHTML = '2. terminal/bash';
  third.innerHTML = '3. for loops';
  forth.innerHTML = '4. console.log';

  questionBtns.forEach(questionBtn => {
    questionBtn.addEventListener('click', pauseCountdown) 
  })

  first.addEventListener('click', function() { 
    wrongAnswer.classList.remove('hide')
    correctAnswer.classList.add('hide')    
    results();
    startTime -= 30;
    countdown.innerHTML = 'Time: ' + startTime;
  });
  second.addEventListener('click', function() {
    wrongAnswer.classList.remove('hide')
    correctAnswer.classList.add('hide')      
    results();
    startTime += 10;
    countdown.innerHTML = 'Time: ' + startTime;
  });
  third.addEventListener('click', function() { 
    wrongAnswer.classList.remove('hide')
    correctAnswer.classList.add('hide')   
    results();
    startTime -= 20;
    countdown.innerHTML = 'Time: ' + startTime;
  });
  forth.addEventListener('click', function() { //correct!
    wrongAnswer.classList.add('hide')
    correctAnswer.classList.remove('hide')    
    results();
    clearInterval(timer);
    countdown.innerHTML = 'Time: ' + startTime;
    startTime += 70;
    countdown.innerHTML = 'Time: ' + startTime;
  });
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
    //} else if (startTime <= 10) {
      //countdown.style.color = 'red';
      //countdown.innerHTML = 'Time: ' + startTime;
    } else {
      countdown.innerHTML = 'Time: ' + startTime;
    }
  }, 1000);
}

function pauseCountdown() {
  clearInterval(timer);
  console.log('Countdown paused');
  pausedTime = startTime;
}

/*questionBtns.forEach(questionBtn => {
    questionBtn.addEventListener('click', results)
})*/

var finalScoreResult = document.querySelector('#finalScore');

function results() {
    quizQuestions.classList.add('hide')
    quizResults.classList.remove('hide')
    finalScoreResult.innerHTML = startTime;
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

