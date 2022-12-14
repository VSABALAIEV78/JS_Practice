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



const objectVS = {
    name: 'Kira',
    type: 'dog',
    color: 'red',
    habbits: {
        eating: true,
        working: false,
        sleapingPlace: 'bed'
    },
    age: 1,
    other: [1, 2, 3],
    girl: true,

    makeTest: function () {
        console.log('Test inside object - done');
    }

};

const {
    eating,
    sleapingPlace
} = objectVS.habbits;
console.log(sleapingPlace);


objectVS.makeTest();

console.log(Object.keys(objectVS));
console.log(Object.keys(objectVS).length);


for (let key in objectVS) {
    if (typeof (objectVS[key]) === 'object') {
        for (let i in objectVS[key]) {
            console.log(`Свойство > ${key} имеет значение > ${objectVS[key][i]} `);
        }
    } else {
        console.log(`Свойство > ${key} имеет значение > ${objectVS[key]} `);
    }
}



let arr1 = [1, 44, 53, 8];

arr1.pop(); // detete last value from []
console.log(arr1);

arr1.push('name'); // add last value into []
console.log(arr1);

console.log(arr1.length); // количесво елементов в массиве (с 1)

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);

} // перебор [] через цикл

for (let value of arr1) {
    console.log(value);
}

arr1.forEach(function (item, i, arr1) {
    console.log(`Номер ${i} = ${item} в массиве [ ${arr1} ]`);

});


const srt1 = 'text1, ' + 'text2, ' + 'text3, ';
const str2Arr = srt1.split(', ');
console.log(str2Arr);

console.log(str2Arr.join(': '));

const arr2 = [55, 3, 0, -2, 432, 22, 23, 21, -4.1];
console.log(arr2.sort(compareNum));

function compareNum(a, b) {
    return a - b;
}

const arr3 = ['text', 'other', 'get', 'bbb', 'aa', 'qwa', 3, 4, 5, 2];
console.log(arr3.length / 2);

let x1 = arr3.length / 2;
console.log(x1);


console.log(Math.floor(10.92));


// копия объекта по ссылке // копия объекта по значению

// поверхностная копия // глубокая копия

const obj1 = {
    a1: 5,
    b1: 12,
    c1: 20
};

const obj2 = obj1;

obj2.b1 = "text";


console.log(obj1);
console.log(obj2);


const obj3 = {
    a1: 5,
    b1: 12,
    c1: {
        x: 'color',
        y: 888,
    },
    d1: 'text'

};

const obj4 = {};

function copy(mainObject) {
    let key;
    for (key in mainObject) {
        obj4[key] = mainObject[key];
    }
    return obj4;
}

copy(obj3);

obj4.b1 = 777.8;


console.log(obj3);
console.log(obj4);


const obj5 = {
    a1: 2,
    b1: 555,
    c1: 0
};

const obj6 = {
    x: true,
    y: 888
};

const newObj1 = Object.assign(obj5, obj6); // объединение {5} и {6}
console.log(newObj1);

const newObj2 = Object.assign({}, obj6); // можно так же пустой {}
console.log(newObj2);


const oldArr = [5, 10, 15];
const newArr = oldArr.slice();

newArr[2] = 'text';

console.log(oldArr);
console.log(newArr);

const arr01 = [5, 10, true],
    arr02 = ['5', 10, 'some text arr02'],
    arr03 = [...arr01, ...arr02, false, null];

console.log(arr03);

function someInfo(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const array1 = ['text2', true, 7788];
someInfo(...array1);



const arrVS1 = [5, null, false];
const arrVS2 = [...arrVS1];
console.log(arrVS2); // поверхносная копия [5, null, fasle]

const objectVS1 = {
    one: 1,
    two: true
};

const objectVS2 = {
    ...objectVS1
};
console.log(objectVS2); //{ one: 1, two: true }