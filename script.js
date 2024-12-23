console.log('version 2');


const btnclose = document.querySelector(".close-btn");
const startQuizButton = document.querySelector(".openPopupBtn");
const popupWindow = document.getElementById("popupOverlay");
const question = document.querySelector('.question')
// const options = document.querySelector('.options')
const time = document.querySelector(".time");
const countQuestion = document.querySelector('.btn-question-number');
const options = document.querySelector('.options');
// const popupOverlay = document.getElementById('popupOverlay');
let currentQuestionIndex = 0;


const questionDetails = [
  {
    question: "Who is a developer of fractals?",
    options: [
      "Dr.Benoit MendalBrot",
      "Dr.Williams",
      "Dr.jonas schmetmann",
      "Dr.khushal ahir",
    ],
    answer: "Dr.Benoit MendalBrot",
  },
  {
    question: "What does RAD stand for?",
    options: [
      "Rapid Application Document",
      "Rapid Application Development",
      "Relative Application Development",
      "None of the above",
    ],
    answer: "Rapid Application Development",
  },
  {
    question: "What is the first step in the software development lifecycle?",
    options: [
      "System Design",
      "Coding",
      "System Testing",
      "Preliminary Investigation and Analysis",
    ],
    answer: "Preliminary Investigation and Analysis",
  },
  {
    question: "__________ is identified as fourth generation language?",
    options: ["java", "css", "c++", "c"],
    answer: "Dr.Benoit MendalBrot",
  },
  {
    question: "OHA stands for?",
    options: [
      "open headset alliance",
      "open handset alliance",
      "open handshake alliance",
      "open head alliance",
    ],
    answer: "open headset alliance",
  },
  {
    question: "which is your favourite language?",
    options: [
      "c",
      "c++",
      "javascript",
      "react",
    ],
    answer: "javascript",
  },
  {
    question: "Fuctions is also known as?",
    options: [
      "methods",
      "procedures",
      "stack",
      "heap",
    ],
    answer: "methods",
  },
];

startQuizButton.addEventListener("click", function () {
  if (popupWindow) {
    timer(15);
    popupWindow.classList.remove("hidden");
    displayQuestion(switchQuestion)
  } else {
    console.log("retry");
  }
});
btnclose.addEventListener("click", function () {
  // popupWindow.classList.add("hidden");

// question.textContent = switchQuestion([...x])
  timer(15, true);
  displayQuestion()
  // switchOptions(currentQuestionIndex)
  countQuestions()
  getvalue()
});

// const second = questionDetails[1];
// console.log(second);
// const secondQ = second.question;
// console.log(secondQ);

let times;
const timer = function (starttime, stop = false) {
  times = starttime;
  const t = setInterval(() => {
    if (times >= 0) {
      time.textContent = "Time:" + times;
      times--;
      // console.log(times);
    } 
    else if(times <=0) {
      displayQuestion()
      switchOptions(currentQuestionIndex)
      countQuestions()
      times = starttime;

      // console.log('time stopped reset to',times);
    }
   
    if (stop) {
      clearInterval(t); // Stops the timer if stop flag is true
      // console.log("Timer manually stopped");
    }
  }, 1000);
};
const countQuestions = function(){
  countQuestion.innerHTML = '';
const html =`
    <div class="btn-question-number">
                <button>Question ${currentQuestionIndex}/25</button>
            </div>
`
countQuestion.insertAdjacentHTML("afterbegin",html);
}

const switchQuestion = function (index) {
  if (index >= 0 && index < questionDetails.length){
      const getques = questionDetails[index].question;
      // console.log(getques);
      return getques
    }
    else{
    popupWindow.classList.add("hidden"); 
    }
};
const displayQuestion = function () {
  const newQuestion = switchQuestion(currentQuestionIndex);
  const newOption = switchOptions(currentQuestionIndex);
  if (newQuestion) {
    question.textContent = newQuestion;
    switchOptions(currentQuestionIndex)
    currentQuestionIndex++;  // Increment to the next question
  } else {
    console.log("No more questions available.");
    popupWindow.classList.add("hidden");  // Close the popup when there are no more questions
  }
};
const switchOptions = function(currentQuestionIndex){
  const getOptions = questionDetails[currentQuestionIndex].options;
  
  options.innerHTML = ''; // to remove previous options of respective question
  const html = `
  <div class="options">
                <input type="radio" name="option" value="${getOptions[0]}">
                <label>${getOptions[0]}</label><br>
                <input type="radio" name="option" value="${getOptions[1]}">
                <label>${getOptions[1]}</label><br>
                <input type="radio" name="option" value="${getOptions[2]}">
                <label>${getOptions[2]}</label><br>
                <input type="radio" name="option" value="${getOptions[3]}">
                <label>${getOptions[3]}</label><br>
            </div>
  `
  options.insertAdjacentHTML("afterbegin",html); // to insert label inside the UI
  
  return html;
}

const getvalue =function(){
  let selectedValue = document.querySelector('input[name="option"]:checked').value;
console.log(selectedValue);
return selectedValue
}
