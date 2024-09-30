const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-button');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => selectOption(button, option));
        optionsElement.appendChild(button);
    });
}

function selectOption(button, selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    // Highlight the selected option
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(btn => {
        btn.disabled = true; // Disable all buttons after selection
    });
    button.classList.add('selected');

    // Check if the answer is correct
    if (selectedOption === correctAnswer) {
        score++;
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.innerHTML = `<h2>Your Score: ${score} out of ${questions.length}</h2>`;
    restartButton.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.innerHTML = '';
    questionContainer.style.display = 'block';
    nextButton.style.display = 'block';
    restartButton.style.display = 'none';
    showQuestion();
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// Start the quiz
showQuestion();
