const quizData = [
    {
        question: "What is phishing?",
        options: [
            "A type of fishing",
            "A method of stealing sensitive information",
            "A security protocol",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "What should you do if you receive an unknown email?",
        options: [
            "Open it and see what's inside",
            "Delete it immediately",
            "Reply asking for more information",
            "Forward it to IT"
        ],
        answer: 3
    },
    {
        question: "What is malware?",
        options: [
            "Software designed to harm your computer",
            "A type of hardware",
            "A security feature",
            "None of the above"
        ],
        answer: 0
    }
];

document.getElementById('startQuiz').addEventListener('click', () => {
    document.getElementById('content').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    loadQuiz();
});

function loadQuiz() {
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = '';
    quizData.forEach((item, index) => {
        quizContent.innerHTML += `<div>
            <p>${item.question}</p>
            ${item.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${option}
                </label>
            `).join('')}
        </div>`;
    });
}

document.getElementById('submitAnswers').addEventListener('click', () => {
    let score = 0;
    quizData.forEach((item, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && parseInt(selected.value) === item.answer) {
            score++;
        }
    });
    showResults(score);
});

function showResults(score) {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('resultContent').innerText = `You scored ${score} out of ${quizData.length}`;
}

document.getElementById('restart').addEventListener('click', () => {
    document.getElementById('results').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});
