'use strict';

// Lesson 43

// работа с получением елементов со страницы


const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHearts = document.querySelector('.heart');

box.style.backgroundColor = 'green'; // меняет цвет елемента c id "box" в js файле
box.style.width = '78px'; // меняет свойство css в js файле
box.style.height = '78px'; // меняет свойство css в js файле

// or the same result if write in CSS style with .cssTexr
box.style.cssText = 'background-color: purple; width: 120px';


btns[1].style.backgroundColor = 'grey';
btns[3].style.borderRadius = '100%';
btns[3].style.height = '70px';


//поменять все елементы с перебором forEach. Работает для querySelectorAll
hearts.forEach(item => {
    item.style.backgroundColor = 'silver';
});

////////////// создание HTML елементов тегов в файле джс

const div1 = document.createElement('div1'); // создали елемент div1
div1.classList.add('blackVS'); // создали класс для елемента div1

document.body.append(div1); // добавили созданные елементы в конец </body>
document.body.prepend(div1); // добавили созданные елементы в начало <body>


const div2 = document.createElement('div2'); // создали елемент div2
div2.classList.add('VS2'); // создали класс для елемента div2
hearts[1].before(div2); // добавили созданные елементы класс heart перед 1 елемента
hearts[2].after(div2); // добавили созданные елементы класс heart после 3 елемента

circles[0].remove(); // убирает елемент со страницы

circles[1].replaceWith(hearts[2]); // заменяет елемент на странице

div2.innerHTML = '<h3>заголовок 3</h3>'; // добавляет HTML тег на страницу
//div2.insertAdjacentHTML('afterbegin', '<h2>222</h2>');
//div2.insertAdjacentHTML('afterend', '<h2>222</h2>');
//div2.insertAdjacentHTML('beforebegin', '<h2>222</h2>');
//div2.insertAdjacentHTML('beforeend', '<h2>222</h2>');