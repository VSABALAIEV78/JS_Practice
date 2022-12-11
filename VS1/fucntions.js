'use sctrict';

//task 29.1

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
//console.log(calculateVolumeAndArea(5.2));

//task 29.2

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

console.log(getCoupeNumber(37));

// solved with small hint with formula >>> (seatNum -1) / 4 + 1