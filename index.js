let userName ='';
let userAge ='';

const userNameEle = document.querySelector('.user-name');
const userAgeEle = document.querySelector('.user-age');
const userInfoEle = document.querySelector('.user-info');

userNameEle.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    userName = event.target.value;
    displayUserInfo();
  }
});

userAgeEle.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    userAge = event.target.value;
    displayUserInfo();
  }
});

userNameEle.value = '';
userAgeEle.value = '';


function displayUserInfo() {
  if (userName && userAge) {
    alert(`Hello ${userName}! Get ready for your first F1 Quiz. At ${userAge}, you have what it takes to be a future F1 driver!`);
    userNameEle.style.display = 'none';
    userAgeEle.style.display = 'none';
  }
}


const QuizData = [
  {
    question: 'In which year did Max Verstappen win his first Formula 1 championship?',
    options: ['2019', '2017', '2020', '2021'],
    correctAnswer: 2 //'2020'
  },
  {
    question: 'How many pole positions were achieved in a single Formula 1 season by a driver?',
    options: ['13', '9', '16', '7'],
    correctAnswer: 0 // '13'
  },
  {
    question: 'Who holds the record for the most Formula 1 World Championships?',
    options: ['Sebastian Vettel', 'Max Verstappen', 'Lewis Hamilton', 'Fernando Alonso'],
    correctAnswer: 2 // 'Lewis Hamilton'
  },
  {
    question: 'Which Formula 1 team has the most Constructors\' Championships?',
    options: ['Ferrari', 'Mercedes', 'Red Bull Racing', 'McLaren'],
    correctAnswer: 0 //'Ferrari'
  },
  {
    question: 'Who was the youngest Formula 1 World Champion?',
    options: ['Sebastian Vettel', 'Lewis Hamilton', 'Max Verstappen', 'Fernando Alonso'],
    correctAnswer: 0 //'Sebastian Vettel'
  },
  {
    question: 'Which circuit is known as "The Temple of Speed"?',
    options: ['Monaco', 'Monza', 'Spa-Francorchamps', 'Silverstone'],
    correctAnswer: 1 //'Monza'
  }
];


let currentIndexOfQuestion = 0;
let score = 0;
let answered = false; // Variable to track if user has answered current question

const questionEle = document.querySelector('.question');
const optionEles = document.querySelectorAll('.option');
const feedbackEle = document.querySelector('.feedback');
const scoreELe = document.querySelector('.score');
const nextButton = document.querySelector('.next');

function displayQuestion() {
  questionEle.innerText = `Question No.${currentIndexOfQuestion+1} : ${QuizData[currentIndexOfQuestion].question}`;

  for (let i = 0; i < optionEles.length; i++) {
    optionEles[i].innerText = QuizData[currentIndexOfQuestion].options[i];
    optionEles[i].addEventListener('click', optionButtonClick);
  }

  answered = false; // Reset answered status for new question
}

function optionButtonClick(event) {
  const selectedIndex = parseInt(event.target.dataset.index);
  const correctAnswer = QuizData[currentIndexOfQuestion].correctAnswer;

  if (!answered) {
    answered = true; // Mark as answered
    if (selectedIndex === correctAnswer) {
      feedbackEle.innerText = 'Your Answer is Correct';
      score++;
      scoreELe.innerHTML = `Your Current Score is : ${score}`;
    } else {
      feedbackEle.innerText = `Your answer is incorrect, correct option is ${correctAnswer+1}`;
    }

    for (let i = 0; i < optionEles.length; i++) {
      optionEles[i].removeEventListener('click', optionButtonClick);
    }
  }
}

nextButton.addEventListener('click', function() {
  if (answered) {
    currentIndexOfQuestion++;
    
    if (currentIndexOfQuestion < QuizData.length) {
      displayQuestion();
    } else {
      alert(`Quiz is over! You did great and your score was ${score}`);
      currentIndexOfQuestion = 0;
      score = 0;
      scoreELe.innerHTML = `Your Current Score is ${score}`;
      feedbackEle.innerHTML = 'Your answer Info';
      displayQuestion();
    }
  } else {
    alert('Please select an option before moving to the next question.');
  }
});

displayQuestion();
