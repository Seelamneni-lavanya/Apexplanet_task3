// === Image Carousel ===
const images = [
  'Apexplanet_Task3-main\image1.jpg',
  'Apexplanet_Task3-main\image2.jpg',
  'Apexplanet_Task3-main\image3.jpg'
];
let currentIndex = 0;

function showImage(index) {
  const imageElement = document.getElementById('carouselImage');
  imageElement.src = images[index];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// === Interactive Quiz ===
const quizData = [
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "JQuery", "CSS"],
    correct: 2
  }
];

let quizIndex = 0;

function loadQuiz() {
  const q = quizData[quizIndex];
  document.getElementById('question').innerText = q.question;
  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = "";

  q.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => {
      if (i === q.correct) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
      quizIndex = (quizIndex + 1) % quizData.length;
      loadQuiz();
    };
    answersDiv.appendChild(btn);
  });
}

// === Fetch API Data ===
async function getJoke() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();
  document.getElementById("jokeText").innerText = `${data.setup} - ${data.punchline}`;
}

// === On Load ===
window.onload = function() {
  showImage(currentIndex);
  loadQuiz();
};
