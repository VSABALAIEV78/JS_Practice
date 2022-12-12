'use sctrict';

//task 29.1 (7)

function calculateVolumeAndArea(side) {
    let volume,
        sCube;

    let result;

    if (typeof (side) === 'string' || side <= 0 || side === '' || side === null ||
        !Number.isInteger(side)) {

        result = `При вычислении произошла ошибка`;

    } else {
        volume = side * side * side;
        sCube = (side * side) * 6;
        result = `Объем куба: ${volume}, площадь всей поверхности: ${sCube}`;

    }
    return result;

}
//console.log(calculateVolumeAndArea(14.2));

//task 29.2 (7)

function getCoupeNumber(seatNum) {
    for (let i = 0; i < 1; i++) {
        let coupe;

        if (typeof (seatNum) === 'string' || seatNum < 0 || !Number.isInteger(seatNum)) {
            coupe = 'Ошибка. Проверьте правильность введенного номера места';
        } else if (seatNum === 0 || seatNum > 36) {
            coupe = 'Таких мест в вагоне не существует';
        } else {
            coupe = parseInt((seatNum - 1) / 4 + 1);
        }
        return coupe;
    }
}

//console.log(getCoupeNumber(9));

// solved with small hint with formula >>> (seatNum -1) / 4 + 1

////task 29.3 (8) - minutes to hours and minutes

function getTimeFromMinutes(minutes) {

    let hours,
        min;

    if (typeof (minutes) !== 'number' || !Number.isInteger(minutes) || minutes < 0) {
        return 'Ошибка, проверьте данные';
    }

    hours = parseInt(minutes / 60);
    min = minutes - hours * 60;

    if (hours > 1 && hours < 5) {
        return `Это ${hours} часа и ${min} минут`;

    } else if (hours === 1) {
        return `Это ${hours} час и ${min} минут`;

    } else {
        return `Это ${hours} часов и ${min} минут`;
    }

}

console.log(getTimeFromMinutes(83));


////task 29.4 (8) - show max number from 4

function findMaxNumber(a, b, c, d) {

    if (typeof (a) !== 'number' || typeof (b) !== 'number' || typeof (c) !== 'number' ||
        typeof (d) !== 'number' || a === undefined || b === undefined || c === undefined ||
        d === undefined) {

        return 0;
    }

    return Math.max(a, b, c, d);

}


//console.log(findMaxNumber(-2, 1, 2, 3, 4, 5, 6, 555));