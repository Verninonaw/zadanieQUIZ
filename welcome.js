const test = document.getElementById('test')
const nextBtn = document.getElementById('nextQuestion')
const startQuiz = document.getElementById('startQuiz')


const pWelc = document.getElementById('pWelc')
const student = JSON.parse(localStorage.getItem('nowStudent'))
pWelc.textContent = 'Добрый день, ' + student.name

console.log(student)    

let questions = [
    {
      id: 1,
      question: "Столица России?",
      options: ["Москва", "Санкт-Петербург", "Казань", "Новосибирск"],
      correctAnswer: 0
    },

    {
        id: 2,
        question: "2+2?",
        options: ["4", "5", "2", "3"],
        correctAnswer: 0
    },

    {
        id: 3,
        question: "4+4?",
        options: ["4", "8", "3", "155"],
        correctAnswer: 1
    },
  ];
  
let nowQuestion = 0
let userAnswers = []

function mixQuestion() {
    questions.sort(() => Math.random() - 0.5)
}



function showQuestion() {
    const question = questions[nowQuestion]
    const answers = document.getElementById('answers')
    const q = document.getElementById('question')
    q.textContent = question.question
    
    answers.innerHTML = ''
    question.options.forEach((options, index) => {
        answers.innerHTML += `
            <label>
                <input type="radio" name="answer" id='inp' value="${index}">
                ${options}
            </label>`
        
    })
}

function nextQuestion() {
    const selected = document.querySelector('input[type=radio]:checked')
    console.log(selected)
    if(!selected) {
        alert('Выберите ответ')
    }
    else {
    userAnswers.push(selected.value)
    nowQuestion++
    }

    if (nowQuestion < questions.length) {
        showQuestion()
    } else {
        alert('Тест завершен')
    }
}

console.log(userAnswers)

startQuiz.addEventListener('click', () => {
    pWelc.style.display = 'none'
    startQuiz.style.display = 'none'
    test.style.display = 'block'
    mixQuestion()
    showQuestion()
})

nextBtn.addEventListener('click', () => {
    nextQuestion()
})