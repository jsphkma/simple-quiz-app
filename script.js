const quizData = [
    {
        question: "How old am I",
        a: "33",
        b: "30",
        c: "29",
        d: "31",
        correct: "a",
    },
    {
        question: "Where do I live?",
        a: "United States",
        b: "China",
        c: "Australia",
        d: "Canada",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What do I like",
        a: "Cars",
        b: "Movies",
        c: "Programming",
        d: "All of the above",
        correct: "d",
    },
];

const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    
    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    if (currentQuiz < quizData.length) {
    loadQuiz();
    } else {
        alert("You have completed the quiz!");
    }
});
