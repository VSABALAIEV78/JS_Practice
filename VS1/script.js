'use strict';

//Task # 37. 13

const shoppingMallData = {
    shops: [{
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let vShops = 0;
    // получили значения из всех {} в []shops;
    for (let i = 0; i < data.shops.length; i++) {
        if (typeof (data.shops[i]) === 'object') {

            let {
                width,
                length
            } = data.shops[i];

            vShops += width * length;
            //console.log(vShops);
        }
    }

    const totalCost = vShops * data.height * data.moneyPer1m3;
    //console.log(totalCost);

    if (totalCost <= data.budget) {
        return `Бюджета достаточно`;
    } else {
        return `Бюджета недостаточно`;
    }

}

isBudgetEnough(shoppingMallData);
// Task # 37. 13 (shops budget) solved

// Task # 37. 14 (list of students)

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    console.log(arr);
    const newArr = [];

    for (let i = 0; i < 9; i += 3) {
        newArr.push(arr.slice(i, i + 3));
    }

    if (arr.length == 9) {
        newArr.push('Оставшиеся студенты: -');
        return newArr;

    } else {
        newArr.push(`Оставшиеся студенты: ${arr[9]}`);
        for (let j = 10; j < arr.length; j++) {
            newArr[3] += `, ${arr[j]}`;
        }
        return newArr;
    }
}
sortStudentsByGroups(students);

// Task # 37. 14 (list of students). Solved with google help.