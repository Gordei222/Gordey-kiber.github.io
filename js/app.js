function hello() {
    document.getElementById('example').innerHTML = 'Привет мир!'
}

function hello() {
    document.getElementById('example').innerHTML = ''
}

function set_text(id, text) {
    document.getElementById(id).innerHTML = text
}

function submit() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var status = document.getElementById('status');

    if (name == '') {
        status.innerHTML = 'Заполните поле ФИО'
    }

    else if (email == '') {
        status.innerHTML = 'Заполните поле e-mail'
    }

    else if (phone == '') {
        status.innerHTML = 'Заполните поле телефон'
    }
    else{
    status.innerHTML = `РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО. ВАШИ ДАННЫЕ НА САЙТЕ: ФИО - ${name} e-mail; ${email} телефон: ${phone}`;
    }
}

function setBgColor(color) {
    document.body.style.backgroundColor = color;
}

function inputColor() {
    var input_color = document.getElementById('color').value;

    setBgColor(input_color);
}

function setFontSize(id, size) {
    document.getElementById(id).style.fontSize = size;
}


function lampOn() {
    document.getElementById('lamp').src = 'images/pic_bulbon.gif'

    document.getElementById('main').style.backgroundColor = '#fff'

    document.getElementById('main').style.color = '#000'

    document.body.style.backgroundColor = '#FFFF00';
}



function lampOff() {
    document.getElementById('lamp').src = 'images/pic_bulboff.gif'

    document.getElementById('main').style.backgroundColor = '#000'

    document.getElementById('main').style.color = '#fff'
    
    document.body.style.backgroundColor = '#D3D3D3';
}

function deleteTitle() {
    document.getElementById('title').style.display = 'none';
}

function createButton() {
    var btn = document.createElement('BUTTON');
    btn.innerHTML = 'Новая кнопка';
    document.getElementById('buttonList').appendChild(btn);
}
function createParaph() {
    var btn = document.createElement('P');
    btn.innerHTML = 'Новый абзац';
    document.getElementById('buttonList').appendChild(btn);
}

//  Создание объекта
var person = new Object();
// Добавление свойств со значениями
person.name = 'Вася'
person.surname = 'Пупкин'
person.age = '98 лет'
person.weight = '25' 
person.fullname = function() {
    return this.name + ' ' + this.surname;
}


function showPerson() {
    document.getElementById('person').innerHTML = person.fullname() + ':' + person.age
}
var avto = new Object();
avto.brend = 'Audi'
avto.model = 'a6'
avto.year = '2020'
avto.color = 'Black'
person.fullname = function() {
    return this.name + ' ' + this.surname;
}

function showAvto() {
    document.getElementById('avto').innerHTML = 'Бренд: ' + avto.brend + '<br>' + 'Модель: ' +  avto.model + '<br>' + 'Год: ' +  avto.year + '<br>' + 'Цвет: ' +  avto.color
}


let cat = {
    poroda:'Sphinx',
    color:'Brown',
    age:'3 y.o.'
}

cat.eyes = 'green'
cat.showInfo = function() {
    document.getElementById('cat').innerHTML = 
    `Порода: ${cat.poroda} <br>` +
    `Цвет: ${cat.color} <br>` +
    `Возвраст: ${cat.age} <br>` +
    `Цвет глаз: ${cat.eyes} <br>`
}

const questions = [
    {
        questions: 'Вопрос 1',
        answers: {
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no',
        },
        rightAnswer: '3'
    },

    {
        questions: 'Вопрос 2',
        answers: {
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no',
        },
        rightAnswer: '3'
    },

    {
        questions: 'Вопрос 3',
        answers: {
            1: 'no',
            2: 'no',
            3: 'yes',
            4: 'no',
        },
        rightAnswer: '3'
    }

]

let testContainer = document.getElementById('test');
let resultButton = document.getElementById('esultButton');
let resultContainer = document.getElementById('result');

function generateTest(questions, testContainer, resultContainer, resultButton) {
    let out= [];
    let answers;

    for(let i=0; i<questions.length; i++) {
        answers = []
        for(let ans_text in questions[i].answers) {
            answers.push(
                `<label><br><input type= "radio" name="question${i}
                value="${ans_text}"> ${ans_text}) ${questions[i].answers[ans_text]} </label>`
                
            );
        }
        out.push(
            `<div class="question"> ${questions[i].questions} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    }
    testContainer.innerHTML = out.join('');
}

generateTest(questions, testContainer, resultContainer, resultButton)

function showResults(questions, testContainer, resultContainer) {
    let answerContainers = testContainer.querySelectorALL('.answers');

    let userAnswer = '';
    let rightAnswerNum = 0;

    for(let i=0; i<questions.length; i++){

    }
}