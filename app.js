//create a trivia like game.
// based on the results of 7 different questions, you will either 
// get 1 of 4 different groups of nature related zones with a list of activities that best match your
//preferences 
// question 1. do you prefer to relax in warm, hot or cold environments?
//question 2. what is your activity level?
//question 3. would you rather activities where you can bring your dogs?
// question 4. are you more into group or solo activities?
// Define your quiz questions and options

const quizData = [
    {
        question: "What is the scientific name for coast redwoods?",
        options: ["Pinus", "Sequoia sempervirens", "Cantharellus cibarius", "Sudowoodo"],
        answer: "Sequoia sempervirens"
    },
    {
        question: "Which is the California state fish you can find in the kelp forests?",
        options: ["Central California Steelhead", "Ichthyosaur", "Garabaldi", "Kern River Rainbow Trout"],
        answer: "Garabaldi"
    },
    {
        question: "What is the average annual rainfall of desert regions in California?",
        options: ["3 inches", "6 inches", "length of a football", "7 inches"],
        answer: "7 inches"
    },
    {
        question: "What is the name of one of the cities in the Great Central Valley grasslands?",
        options: ["Bakersfield", "Coachella", "Indio", "Hogsmeade"],
        answer: "Bakersfield"
    },
    {
        question: "What is an estuary?",
        options: [
            "A 4.5 star restaurant in NYC.",
            "Area where freshwater meets salty ocean water resulting in brackish water.",
            "a channel also known as strait.",
            "a continuous movement of seawater produced by gravity, wind and water density."
        ],
        answer: "Area where freshwater meets salty ocean water resulting in brackish water."
    }
    // Add more questions here
];

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const resultMessageElement = document.getElementById('result-message');

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const currentQuizItem = quizData[currentQuestion];

    questionElement.textContent = currentQuizItem.question;
    optionsContainer.innerHTML = "";

    currentQuizItem.options.forEach((option) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;

        optionElement.addEventListener('click', () => {
            const selectedOption = document.querySelector('.option.selected');
            if (selectedOption) {
                selectedOption.classList.remove('selected');
            }
            optionElement.classList.add('selected');
        });

        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('.option.selected');
    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedOption && selectedOption.textContent === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        displayQuestion();
        resultMessageElement.textContent = '';
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.innerHTML = `<h2>You scored ${score} out of ${quizData.length}!</h2>`;
}

submitButton.addEventListener('click', checkAnswer);

// Start the quiz when the page loads
displayQuestion();
