const quiz = {
  startButton: document.getElementById('start-btn'),
  nextButton: document.getElementById('next-btn'),
  questionContainer: document.getElementById('question-container'),
  questionElement: document.getElementById('question'),
  answerButtons: document.getElementById('answer-buttons'),
  currentQuestion: 0,
  questions: [
    // Same question objects as before
  ]
}

quiz.startButton.addEventListener('click', quiz.startGame);
quiz.nextButton.addEventListener('click', quiz.setNextQuestion);

quiz.startGame = function() {
  this.startButton.classList.add('hide');
  this.shuffleQuestions();
  this.questionContainer.classList.remove('hide');
  this.setNextQuestion();
}

quiz.shuffleQuestions = function() {
  this.questions.sort(() => Math.random() - 0.5);
}

quiz.setNextQuestion = function() {
  this.resetState();
  if (this.currentQuestion >= this.questions.length) {
    this.showResults();
    return;
  }
  this.showQuestion(this.questions[this.currentQuestion]);
  this.currentQuestion++;
}

quiz.showQuestion = function(question) {
  this.questionElement.textContent = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.classList.add('btn');
    button.dataset.correct = answer.correct;
    button.addEventListener('click', this.selectAnswer);
    this.answerButtons.appendChild(button);
  });
}

quiz.resetState = function() {
  this.clearStatusClass(document.body);
  this.nextButton.classList.add('hide');
  while (this.answerButtons.firstChild) {
    this.answerButtons.removeChild(this.answerButtons.firstChild);
  }
}

quiz.selectAnswer = function(event) {
  const selectedButton = event.target;
  const correct = selectedButton.dataset.correct;
  this.setStatusClass(document.body, correct);
  this.setStatusClass(selectedButton, correct);
  const isLastQuestion = this.currentQuestion === this.questions.length - 1;
  if ( !isLastQuestion ) {
    this.nextButton.classList.remove('hide');
  } else {
    this.showResults();
  }
}

quiz.setStatusClass = function(element, correct) {
  element.classList.remove('correct', 'wrong');
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

quiz.clearStatusClass = function(element) {
  element.classList.remove('correct', 'wrong');
}

quiz.showResults = function() {
  // Add your result logic here (show score, message etc.)
  this.startButton.textContent = 'Restart';
  this.startButton.classList.remove('hide');
}