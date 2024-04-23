# THIS IS QUIZ APP
Object Initialization:
The quiz object is initialized with various properties:
startButton: Reference to the HTML element with the id start-btn.
nextButton: Reference to the HTML element with the id next-btn.
questionContainer: Reference to the HTML element with the id question-container.
questionElement: Reference to the HTML element with the id question.
answerButtons: Reference to the HTML element with the id answer-buttons.
currentQuestion: Keeps track of the index of the current question.
questions: An array containing objects representing quiz questions.
Event Listeners:
Event listeners are attached to the start button and next button. When clicked, these buttons trigger specific functions within the quiz object.
Start Game Function (quiz.startGame):
This function is called when the start button is clicked.
It hides the start button, shuffles the questions, reveals the question container, and sets the first question.
Shuffle Questions Function (quiz.shuffleQuestions):
Randomly shuffles the questions array using the Fisher-Yates shuffle algorithm.
Set Next Question Function (quiz.setNextQuestion):
Resets the state (clears previous answer buttons' classes).
Checks if there are more questions to display. If not, it shows the quiz results; otherwise, it shows the next question.
Show Question Function (quiz.showQuestion):
Populates the question element with the text of the current question.
Creates buttons for each answer option and adds event listeners to handle answer selection.
Reset State Function (quiz.resetState):
Clears the status classes from the HTML elements.
Hides the next button.
Removes all child elements (answer buttons) from the answer buttons container.
Select Answer Function (quiz.selectAnswer):
Handles the selection of an answer button.
Determines whether the selected answer is correct or not.
Updates the status classes of the selected button and the body element.
Shows the next button if there are more questions, otherwise shows the quiz results.
Set Status Class Function (quiz.setStatusClass):
Adds or removes the "correct" or "wrong" class to an HTML element based on whether the answer is correct.
Clear Status Class Function (quiz.clearStatusClass):
Clears the "correct" and "wrong" classes from an HTML element.
Show Results Function (quiz.showResults):
Placeholder function to handle displaying quiz results.
Typically, it could show the user's score and a message.
Changes the start button text to "Restart" and reveals it.
