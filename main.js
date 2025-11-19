const name = document.getElementById('name')
const surname = document.getElementById('surname')
const login = document.getElementById('login')
const pass = document.getElementById('pass')
const btn = document.getElementById('btn')
const reg = document.getElementById('reg')

const alogin = document.getElementById('alogin')
const apass = document.getElementById('apass')
const abtn = document.getElementById('abtn')
const log = document.getElementById('log')

const pWelc = document.getElementById('pWelc')

log.style.display = 'none'


const studentsArr = []

function openLoginForm() {
    reg.style.display = 'none'
    log.style.display = 'block'
}

function openRegisterForm() {
    reg.style.display = 'block'
    log.style.display = 'none'
}

function register() {
    if(name.value && surname.value && login.value && pass.value.length > 6) {
        const student = {
            name: name.value,
            surname: surname.value,
            login: login.value,
            pass: pass.value
        }
        studentsArr.push(student)
        localStorage.setItem('students', JSON.stringify(studentsArr))
        openLoginForm()
    }
    else {
        alert('Пароль должен быть от 6 символов')
    }
}

function logiin() {
    const user = JSON.parse(localStorage.getItem('students'))
    const foundStudent = user.find(student => student.login === alogin.value && student.pass === apass.value) 

    if(foundStudent) {
        localStorage.setItem('nowStudent', JSON.stringify(foundStudent))
        window.location.href = './welcome.html'
    }
    else {
        alert('Студент не найдет, попробуйте зарегистрироваться!')  
    }
}

abtn.addEventListener('click', (event) => {
    event.preventDefault()  
    logiin()
})

btn.addEventListener('click', (event) => {
    event.preventDefault()
    register()
})

window.addEventListener('load', () => {
    const newUser = JSON.parse(localStorage.getItem('nowStudent'))
    if(newUser) {
        window.location.href = './welcome.html'
    }
})

