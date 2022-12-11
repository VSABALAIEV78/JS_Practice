// task 27.1

function sayHello(text) {
    return 'Привет, ' + text;
}

console.log(sayHello('быдло'));


// task 27.2

function returnNeighboringNumbers(a) {
    const array1 = [a - 1, a, a + 1];
    return array1;
}

console.log(returnNeighboringNumbers(9));


// task 27.3

function getMathResult(num, repeat) {
    let result = num;
    for (let i = 2; i <= repeat; i++) {
        if (num > 0 && repeat > 0 && typeof (num) === typeof (repeat)) {
            result += '---' + num * i;
        } else {
            result = num;
        }

    }
    return result;
}
console.log(getMathResult(5, 8));

// udemy sol 

function getMathResult(num, times) {
    if (typeof (times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += num * i + '---';
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(5, 4));



function vs2(number, times) {
    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${number * i}`;
        } else {
            str += number * i + '---';
        }
    }
    return str;
}

console.log(vs2(5, 3));

// methods

const someName = 'Kira is a Dog';

console.log(someName.length);
console.log(someName.toLowerCase(someName));
console.log(someName.toUpperCase(someName));

console.log(someName.indexOf('Dog')); // поиск по символам в строке 
console.dir(someName);

console.log(someName.slice(8, 13)); // 1 - с какой позиции начать 2- до какой не вкл 
console.log(someName.substring(5, 13)); // 1 - с какой позиции начать 2- сколько символов
console.log(someName.substr(8, 5)); // 1 - с какой позиции начать 2- сколько символов


const num1 = 12.4;
console.log(Math.round(num1)); // округление числа (Math.  c большой М)

const text1 = '12.8px';

console.log(parseInt(text1)); // переводит строку в целое число
console.log(parseFloat(text1)); // переводит строку в число с точкой