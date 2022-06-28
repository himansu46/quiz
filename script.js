const quizData = [
  {
    question: "When was Facebook launched?",
    a: "2005",
    b: "2008",
    c: "2004",
    d: "1999",
    correct: "c",
  },
  {
    question: "	In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
    a: "1880s",
    b: "2000s",
    c: "1850s",
    d: "1950",
    correct: "a",
  },
  {
    question: "What frequency range is the High Frequency band?",
    a: "3 to 30 Hz",
    b: "1 GHz",
    c: "30 to 300 MHz",
    d: "100 kHz",
    correct: "a",
  },
  {
    question: "	What is the relationship between resistivity r and conductivity s?",
    a: "R=s2",
    b: "R=s",
    c: "R>s",
    d: "R=1/s",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
